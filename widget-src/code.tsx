import * as imports from './imports';

const { widget } = figma;
const { useSyncedState, usePropertyMenu, AutoLayout, Text } = widget;

function Widget(props: Partial<AutoLayoutProps>) {
  const [contentType, setContentType] = useSyncedState("contentType", "header");
  const [answerType, setAnswerType] = useSyncedState("answerType", "input");
  const [showAdditionalInput, setShowAdditionalInput] = useSyncedState("showAdditionalInput", false);
  const [isLinkEditable, setIsLinkEditable] = useSyncedState("isLinkEditable", false);
  const [showHeaderAdditionalInput, setShowHeaderAdditionalInput] = useSyncedState("showHeaderAdditionalInput", false);
  const [currency, setCurrency] = useSyncedState("currency", "GBP");
  const [answerText, setAnswerText] = useSyncedState("answerText", "");
  const [additionalInputText, setAdditionalInputText] = useSyncedState("additionalInputText", "");
  const [showQuestionNumber, setShowQuestionNumber] = useSyncedState("showQuestionNumber", true);
  const [showHeaderNumber, setShowHeaderNumber] = useSyncedState("showHeaderNumber", true);
  const [isValidationRequired, setIsValidationRequired] = useSyncedState("isValidationRequired", false);

  const propertyMenuItems = [
    {
      itemType: "dropdown",
      propertyName: "contentType",
      tooltip: "Select Content Type",
      options: imports.contentTypeOptions,
      selectedOption: contentType,
    },
    ...(contentType === "question" ? [
      createToggleItem("toggleQuestionAdditionalInput", showAdditionalInput, imports.icons.ADDITIONAL_INPUT),
      createToggleItem("toggleQuestionNumber", showQuestionNumber, imports.icons.QUESTION_NUMBER),
      createToggleItem("toggleValidationRequired", isValidationRequired, imports.icons.REQUIRE_TOGGLE)
    ] : []),
    ...(contentType === "answer" ? [
      {
        itemType: "dropdown",
        propertyName: "answerType",
        tooltip: "Select Answer Type",
        options: imports.answerTypeOptions,
        selectedOption: answerType,
      },
      ...(answerType === "currency" ? [{
        itemType: "dropdown",
        propertyName: "currency",
        tooltip: "Select Currency",
        options: imports.currencyOptions,
        selectedOption: currency,
      }] : []),
      createToggleItem("toggleAdditionalInput", showAdditionalInput, imports.icons.ADDITIONAL_INPUT),
      ...(answerType === "custom" ? [
        createToggleItem("toggleLinkEdit", isLinkEditable, imports.icons.EDIT_LINK)
      ] : [])
    ] : []),
    ...(contentType === "header" ? [
      createToggleItem("toggleHeaderAdditionalInput", showHeaderAdditionalInput, imports.icons.ADDITIONAL_INPUT),
      createToggleItem("toggleHeaderNumber", showHeaderNumber, imports.icons.HEADER_NUMBER)
    ] : []),
    { itemType: "separator" },
    createActionItem("addWidget", "Add", imports.icons.ADD_WIDGET),
    createLinkItem("guide", "Guide", "https://x.com/home", imports.icons.GUIDE)
  ];

  usePropertyMenu(propertyMenuItems, handlePropertyChange);

  console.log(`Current content type: ${contentType}`);
  console.log(`Current answer type: ${answerType}`);

  try {
    return renderComponent();
  } catch (error) {
    console.error("Error rendering component:", error);
    return <Text>Error rendering component: {error.message}</Text>;
  }

  function createToggleItem(propertyName, isToggled, icon) {
    let tooltip;
    if (propertyName === "toggleValidationRequired") {
      tooltip = "Required";
    } else if (propertyName === "toggleQuestionAdditionalInput" || propertyName === "toggleAdditionalInput" || propertyName === "toggleHeaderAdditionalInput") {
      tooltip = "Additional information";
    } else if (propertyName === "toggleQuestionNumber" || propertyName === "toggleHeaderNumber") {
      tooltip = "Number";
    } else if (propertyName === "toggleLinkEdit") {
      tooltip = isToggled ? "Save link" : "Edit link";
    } else {
      tooltip = isToggled ? "Hide" : "Show";
    }
    return {
      itemType: "toggle",
      propertyName,
      tooltip,
      isToggled,
      icon
    };
  }

  function createActionItem(propertyName, tooltip, icon) {
    return { itemType: "action", propertyName, tooltip, icon };
  }

  function createLinkItem(propertyName, tooltip, href, icon) {
    return { itemType: "link", propertyName, tooltip, href, icon };
  }

  function handlePropertyChange({ propertyName, propertyValue }) {
    const actions = {
      contentType: () => setContentType(propertyValue),
      answerType: () => handleAnswerTypeChange(propertyValue),
      addWidget: addWidget,
      toggleAdditionalInput: () => setShowAdditionalInput(!showAdditionalInput),
      toggleLinkEdit: () => setIsLinkEditable(!isLinkEditable),
      toggleHeaderAdditionalInput: () => setShowHeaderAdditionalInput(!showHeaderAdditionalInput),
      currency: () => setCurrency(propertyValue),
      toggleQuestionAdditionalInput: () => setShowAdditionalInput(!showAdditionalInput),
      toggleQuestionNumber: () => setShowQuestionNumber(!showQuestionNumber),
      toggleHeaderNumber: () => setShowHeaderNumber(!showHeaderNumber),
      toggleValidationRequired: () => setIsValidationRequired(!isValidationRequired)
    };

    const action = actions[propertyName];
    if (action) action();
  }

  function handleAnswerTypeChange(newAnswerType) {
    console.log(`Changing answer type to: ${newAnswerType}`);
    const currentWidget = figma.currentPage.selection[0] as WidgetNode;
    if (currentWidget && currentWidget.type === "WIDGET") {
      const newWidget = currentWidget.cloneWidget({
        contentType, answerType: newAnswerType, answerText, additionalInputText,
      });

      updateWidgetPluginData(newWidget, newAnswerType);
      replaceWidget(currentWidget, newWidget);
    }
    setAnswerType(newAnswerType);
  }

  function updateWidgetPluginData(widget, newAnswerType) {
    const data = {
      contentType, answerType: newAnswerType, showAdditionalInput: showAdditionalInput.toString(),
      isLinkEditable: isLinkEditable.toString(), showHeaderAdditionalInput: showHeaderAdditionalInput.toString(),
      answerText, additionalInputText
    };
    Object.entries(data).forEach(([key, value]) => widget.setPluginData(key, value));
  }

  function replaceWidget(oldWidget, newWidget) {
    newWidget.x = oldWidget.x;
    newWidget.y = oldWidget.y;
    figma.currentPage.appendChild(newWidget);
    figma.currentPage.selection = [newWidget];
    oldWidget.remove();
  }

  function addWidget() {
    const currentWidget = figma.currentPage.selection[0] as WidgetNode;
    if (currentWidget && currentWidget.type === "WIDGET") {
      const newWidget = currentWidget.cloneWidget({
        contentType,
        answerType,
        answerText: "",
        additionalInputText: "",
        // Reset specific state values for Header and Question components
        ...(contentType === "header" && {
          headerText: "",
          numberInputText: "",
          additionalInputText: ""
        }),
        ...(contentType === "question" && {
          questionText: "",
          numberInputText: "",
          additionalInputText: ""
        })
      });

      updateWidgetPluginData(newWidget, answerType);
      newWidget.y = currentWidget.y + currentWidget.height + 50;
      figma.currentPage.appendChild(newWidget);
    }
  }

  function renderComponent() {
    const commonProps = {
      ...props,
      showAdditionalInput,
      answerText,
      setAnswerText,
      additionalInputText,
      setAdditionalInputText
    };

    if (contentType === "header") {
      return <imports.Header {...commonProps} showAdditionalInput={showHeaderAdditionalInput} showHeaderNumber={showHeaderNumber} />;
    } else if (contentType === "question") {
      return <imports.Question {...commonProps} showQuestionNumber={showQuestionNumber} isValidationRequired={isValidationRequired} />;
    } else if (contentType === "answer") {
      // Change this line
      const AnswerComponent = imports[answerType.charAt(0).toUpperCase() + answerType.slice(1).replace(/\s+/g, '')];
      if (typeof AnswerComponent !== 'function') {
        console.error(`Invalid answer type: ${answerType}`);
        return <Text>Error: Invalid answer type</Text>;
      }
      return <AnswerComponent {...commonProps} isLinkEditable={isLinkEditable} currency={currency} />;
    } else {
      console.log("Error: Invalid content type");
      return <Text>Error: Invalid content type</Text>;
    }
  }
}

widget.register(Widget);