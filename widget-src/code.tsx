import Header from './components/Header';
import AnswerTemplate from './components/AnswerTemplate';
import Input from './components/answertype/Input';
import Radio from './components/answertype/Radio';
import Dropdown from './components/answertype/Dropdown';
import Checkbox from './components/answertype/Checkbox';
import TextArea from './components/answertype/TextArea';
import Currency from './components/answertype/Currency';
import PercentageInput from './components/answertype/PercentageInput';
import Datepicker from './components/answertype/Datepicker';
import Fileupload from './components/answertype/Fileupload';
import Slider from './components/answertype/Slider';
import Custom from './components/answertype/Custom';
import Question from './components/Question';
import { icons } from './icons';

const { widget } = figma;
const { useSyncedState, usePropertyMenu, AutoLayout, Text } = widget;

function Widget(props: Partial<AutoLayoutProps>) {
  const [contentType, setContentType] = useSyncedState("contentType", "header");
  const [answerType, setAnswerType] = useSyncedState("answerType", "input");
  const [showAdditionalInput, setShowAdditionalInput] = useSyncedState("showAdditionalInput", false);
  const [isLinkEditable, setIsLinkEditable] = useSyncedState("isLinkEditable", false);
  const [showHeaderAdditionalInput, setShowHeaderAdditionalInput] = useSyncedState("showHeaderAdditionalInput", false);
  const [currency, setCurrency] = useSyncedState("currency", "GBP"); // Add this line
  const [answerText, setAnswerText] = useSyncedState("answerText", "");
  const [additionalInputText, setAdditionalInputText] = useSyncedState("additionalInputText", "");
  const [showQuestionNumber, setShowQuestionNumber] = useSyncedState("showQuestionNumber", true);
  const [showHeaderNumber, setShowHeaderNumber] = useSyncedState("showHeaderNumber", true);

  usePropertyMenu(
    [
      {
        itemType: "dropdown",
        propertyName: "contentType",
        tooltip: "Select Content Type",
        options: [
          { option: "header", label: "Header" },
          { option: "question", label: "Question" },
          { option: "answer", label: "Answer" },
        ],
        selectedOption: contentType,
      },
      ...(contentType === "question" ? [
        {
          itemType: "toggle",
          propertyName: "toggleQuestionAdditionalInput",
          tooltip: showAdditionalInput ? "Hide additional" : "Show additional",
          isToggled: showAdditionalInput,
          icon: icons.ADDITIONAL_INPUT
        },
        {
          itemType: "toggle",
          propertyName: "toggleQuestionNumber",
          tooltip: showQuestionNumber ? "Hide number" : "Show number",
          isToggled: showQuestionNumber,
          icon: icons.QUESTION_NUMBER
        }
      ] : []),
      ...(contentType === "answer" ? [
        {
          itemType: "dropdown",
          propertyName: "answerType",
          tooltip: "Select Answer Type",
          options: [
            { option: "input", label: "Input" },
            { option: "radio", label: "Radio" },
            { option: "dropdown", label: "Dropdown" },
            { option: "checkbox", label: "Checkbox" },
            { option: "textarea", label: "Text Area" },
            { option: "currency", label: "Currency" },
            { option: "percentageinput", label: "Percentage Input" },
            { option: "datepicker", label: "Datepicker" },
            { option: "fileupload", label: "File Upload" },
            { option: "slider", label: "Slider" },
            { option: "custom", label: "Custom" },
          ],
          selectedOption: answerType,
        },
        ...(answerType === "currency" ? [{
          itemType: "dropdown",
          propertyName: "currency",
          tooltip: "Select Currency",
          options: [
            { option: "USD", label: "US Dollar (USD)" },
            { option: "EUR", label: "Euro (EUR)" },
            { option: "GBP", label: "British Pound (GBP)" },
            { option: "JPY", label: "Japanese Yen (JPY)" },
          ],
          selectedOption: currency,
        }] : []),
        {
          itemType: "toggle",
          propertyName: "toggleAdditionalInput",
          tooltip: showAdditionalInput ? "Hide additional" : "Show additional",
          isToggled: showAdditionalInput,
          icon: icons.ADDITIONAL_INPUT
        },
        ...(answerType === "custom" ? [{
          itemType: "toggle",
          propertyName: "toggleLinkEdit",
          tooltip: isLinkEditable ? "Save link" : "Edit link",
          isToggled: isLinkEditable,
          icon: icons.EDIT_LINK
        }] : [])
      ] : []),
      ...(contentType === "header" ? [
        {
          itemType: "toggle",
          propertyName: "toggleHeaderAdditionalInput",
          tooltip: showHeaderAdditionalInput ? "Hide additional" : "Show additional",
          isToggled: showHeaderAdditionalInput,
          icon: icons.ADDITIONAL_INPUT
        },
        {
          itemType: "toggle",
          propertyName: "toggleHeaderNumber",
          tooltip: showHeaderNumber ? "Hide number" : "Show number",
          isToggled: showHeaderNumber,
          icon: icons.HEADER_NUMBER
        }
      ] : []),
      {
        itemType: "separator"
      },
      {
        itemType: "action",
        propertyName: "addWidget",
        tooltip: "Add",
        icon: icons.ADD_WIDGET
      },
      {
        itemType: "link",
        propertyName: "guide",
        tooltip: "Guide",
        href: "https://x.com/home",
        icon: icons.GUIDE
      },
    ],
    ({ propertyName, propertyValue }) => {
      if (propertyName === "contentType") {
        console.log(`Changing content type to: ${propertyValue}`);
        setContentType(propertyValue);
      } else if (propertyName === "answerType") {
        console.log(`Changing answer type to: ${propertyValue}`);
        const currentWidget = figma.currentPage.selection[0] as WidgetNode;
        if (currentWidget && currentWidget.type === "WIDGET") {
          const newWidget = currentWidget.cloneWidget({
            contentType: contentType,
            answerType: propertyValue,
            answerText: answerText,
            additionalInputText: additionalInputText,
            // ... other properties ...
          });

          newWidget.setPluginData("contentType", contentType);
          newWidget.setPluginData("answerType", propertyValue);
          newWidget.setPluginData("showAdditionalInput", showAdditionalInput.toString());
          newWidget.setPluginData("isLinkEditable", isLinkEditable.toString());
          newWidget.setPluginData("showHeaderAdditionalInput", showHeaderAdditionalInput.toString());
          newWidget.setPluginData("answerText", answerText);
          newWidget.setPluginData("additionalInputText", additionalInputText);

          newWidget.x = currentWidget.x;
          newWidget.y = currentWidget.y;
          figma.currentPage.appendChild(newWidget);
          figma.currentPage.selection = [newWidget];
          currentWidget.remove();
        }
        setAnswerType(propertyValue);
      } else if (propertyName === "addWidget") {
        const currentWidget = figma.currentPage.selection[0] as WidgetNode;
        if (currentWidget && currentWidget.type === "WIDGET") {
          const newWidget = currentWidget.cloneWidget({
            contentType: contentType,
            answerType: answerType,
            answerText: "",
            additionalInputText: "",
            // ... reset all other text fields ...
          });

          newWidget.setPluginData("contentType", contentType);
          newWidget.setPluginData("answerType", answerType);
          newWidget.setPluginData("showAdditionalInput", showAdditionalInput.toString());
          newWidget.setPluginData("isLinkEditable", isLinkEditable.toString());
          newWidget.setPluginData("showHeaderAdditionalInput", showHeaderAdditionalInput.toString());
          newWidget.setPluginData("answerText", "");
          newWidget.setPluginData("additionalInputText", "");

          newWidget.x = currentWidget.x;
          newWidget.y = currentWidget.y + currentWidget.height + 50;
          figma.currentPage.appendChild(newWidget);
        }
      } else if (propertyName === "toggleAdditionalInput") {
        setShowAdditionalInput(!showAdditionalInput);
      } else if (propertyName === "toggleLinkEdit") {
        setIsLinkEditable(!isLinkEditable);
      } else if (propertyName === "toggleHeaderAdditionalInput") {
        setShowHeaderAdditionalInput(!showHeaderAdditionalInput);
      } else if (propertyName === "currency") {
        setCurrency(propertyValue);
      } else if (propertyName === "toggleQuestionAdditionalInput") {
        setShowAdditionalInput(!showAdditionalInput);
      } else if (propertyName === "toggleQuestionNumber") {
        setShowQuestionNumber(!showQuestionNumber);
      } else if (propertyName === "toggleHeaderNumber") {
        setShowHeaderNumber(!showHeaderNumber);
      }
    }
  );

  console.log(`Current content type: ${contentType}`);
  console.log(`Current answer type: ${answerType}`);

  try {
    if (contentType === "header") {
      console.log("Rendering Header component");
      return <Header {...props} showAdditionalInput={showHeaderAdditionalInput} showHeaderNumber={showHeaderNumber} />;
    } else if (contentType === "question") {
      console.log("Rendering Question component");
      return <Question {...props} showAdditionalInput={showAdditionalInput} showQuestionNumber={showQuestionNumber} />;
    } else if (contentType === "answer") {
      console.log("Rendering Answer component");
      switch (answerType) {
        case "input":
          return <Input {...props} showAdditionalInput={showAdditionalInput} answerText={answerText} setAnswerText={setAnswerText} additionalInputText={additionalInputText} setAdditionalInputText={setAdditionalInputText} />;
        case "radio":
          return <Radio {...props} showAdditionalInput={showAdditionalInput} answerText={answerText} setAnswerText={setAnswerText} additionalInputText={additionalInputText} setAdditionalInputText={setAdditionalInputText} />;
        case "dropdown":
          return <Dropdown {...props} showAdditionalInput={showAdditionalInput} answerText={answerText} setAnswerText={setAnswerText} additionalInputText={additionalInputText} setAdditionalInputText={setAdditionalInputText} />;
        case "checkbox":
          return <Checkbox {...props} showAdditionalInput={showAdditionalInput} answerText={answerText} setAnswerText={setAnswerText} additionalInputText={additionalInputText} setAdditionalInputText={setAdditionalInputText} />;
        case "textarea":
          return <TextArea {...props} showAdditionalInput={showAdditionalInput} answerText={answerText} setAnswerText={setAnswerText} additionalInputText={additionalInputText} setAdditionalInputText={setAdditionalInputText} />;
        case "currency":
          return <Currency {...props} showAdditionalInput={showAdditionalInput} currency={currency} answerText={answerText} setAnswerText={setAnswerText} additionalInputText={additionalInputText} setAdditionalInputText={setAdditionalInputText} />;
        case "percentageinput":
          return <PercentageInput {...props} showAdditionalInput={showAdditionalInput} answerText={answerText} setAnswerText={setAnswerText} additionalInputText={additionalInputText} setAdditionalInputText={setAdditionalInputText} />;
        case "datepicker":
          return <Datepicker {...props} showAdditionalInput={showAdditionalInput} answerText={answerText} setAnswerText={setAnswerText} additionalInputText={additionalInputText} setAdditionalInputText={setAdditionalInputText} />;
        case "fileupload":
          return <Fileupload {...props} showAdditionalInput={showAdditionalInput} answerText={answerText} setAnswerText={setAnswerText} additionalInputText={additionalInputText} setAdditionalInputText={setAdditionalInputText} />;
        case "slider":
          return <Slider {...props} showAdditionalInput={showAdditionalInput} answerText={answerText} setAnswerText={setAnswerText} additionalInputText={additionalInputText} setAdditionalInputText={setAdditionalInputText} />;
        case "custom":
          return <Custom {...props} showAdditionalInput={showAdditionalInput} isLinkEditable={isLinkEditable} answerText={answerText} setAnswerText={setAnswerText} additionalInputText={additionalInputText} setAdditionalInputText={setAdditionalInputText} />;
        default:
          console.log("Error: Invalid answer type");
          return <Text>Error: Invalid answer type</Text>;
      }
    } else {
      console.log("Error: Invalid content type");
      return <Text>Error: Invalid content type</Text>;
    }
  } catch (error) {
    console.error("Error rendering component:", error);
    return <Text>Error rendering component: {error.message}</Text>;
  }
}

widget.register(Widget);