import Answer from './components/Answer';
import Header from './components/Header';
import Radio from './components/Radio';
import InputWidget from './components/Input';

const { widget } = figma;
const { useSyncedState, usePropertyMenu, AutoLayout, Text } = widget;

function Widget(props: Partial<AutoLayoutProps>) {
  const [contentType, setContentType] = useSyncedState("contentType", "answer");
  const [questionType, setQuestionType] = useSyncedState("questionType", "radio");
  const [showAdditionalInput, setShowAdditionalInput] = useSyncedState("showAdditionalInput", true);

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
      ...(contentType === "question" ? [{
        itemType: "dropdown",
        propertyName: "questionType",
        tooltip: "Select Question Type",
        options: [
          { option: "radio", label: "Radio" },
          { option: "input", label: "Input" },
        ],
        selectedOption: questionType,
      }] : []),
      {
        itemType: "toggle",
        propertyName: "toggleAdditionalInput",
        tooltip: "Show/Hide Additional",
        isToggled: showAdditionalInput,
        icon: `<svg width='16' height='13' viewBox='0 -1 10 10' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path fill-rule='evenodd' clip-rule='evenodd' d='M5.0625 4C5.0625 3.68934 5.31434 3.4375 5.625 3.4375H10.125C10.4357 3.4375 10.6875 3.68934 10.6875 4C10.6875 4.31066 10.4357 4.5625 10.125 4.5625H5.625C5.31434 4.5625 5.0625 4.31066 5.0625 4Z' fill='white'/>
<path fill-rule='evenodd' clip-rule='evenodd' d='M5.90625 1C5.90625 0.68934 6.15809 0.4375 6.46875 0.4375H10.125C10.4357 0.4375 10.6875 0.68934 10.6875 1C10.6875 1.31066 10.4357 1.5625 10.125 1.5625H6.46875C6.15809 1.5625 5.90625 1.31066 5.90625 1Z' fill='white'/>
<path fill-rule='evenodd' clip-rule='evenodd' d='M1.3125 7C1.3125 6.68934 1.56434 6.4375 1.875 6.4375H10.125C10.4357 6.4375 10.6875 6.68934 10.6875 7C10.6875 7.31066 10.4357 7.5625 10.125 7.5625H1.875C1.56434 7.5625 1.3125 7.31066 1.3125 7Z' fill='white'/>
<path fill-rule='evenodd' clip-rule='evenodd' d='M0.164752 1.16475C0.384422 0.945082 0.740578 0.945082 0.960248 1.16475L2.4375 2.642L3.91475 1.16475C4.13442 0.945082 4.49058 0.945082 4.71025 1.16475C4.92992 1.38442 4.92992 1.74058 4.71025 1.96025L2.83525 3.83525C2.61558 4.05492 2.25942 4.05492 2.03975 3.83525L0.164752 1.96025C-0.0549175 1.74058 -0.0549175 1.38442 0.164752 1.16475Z' fill='white'/>
</svg>`
      },
      {
        itemType: "separator"
      },
      {
        itemType: "action",
        propertyName: "addWidget",
        tooltip: "Add",
        icon: `<svg width='12' height='12' viewBox='0 0 19 19' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path d='M18.8168 9.91072C18.8168 10.2091 18.6983 10.4952 18.4873 10.7062C18.2763 10.9172 17.9902 11.0357 17.6918 11.0357H10.5668V18.1607C10.5668 18.4591 10.4483 18.7452 10.2373 18.9562C10.0263 19.1672 9.7402 19.2857 9.44183 19.2857C9.14346 19.2857 8.85732 19.1672 8.64634 18.9562C8.43536 18.7452 8.31683 18.4591 8.31683 18.1607V11.0357H1.19183C0.893465 11.0357 0.607317 10.9172 0.396338 10.7062C0.18536 10.4952 0.0668335 10.2091 0.0668335 9.91072C0.0668335 9.61235 0.18536 9.3262 0.396338 9.11523C0.607317 8.90425 0.893465 8.78572 1.19183 8.78572H8.31683V1.66072C8.31683 1.36235 8.43536 1.0762 8.64634 0.865226C8.85732 0.654247 9.14346 0.535721 9.44183 0.535721C9.7402 0.535721 10.0263 0.654247 10.2373 0.865226C10.4483 1.0762 10.5668 1.36235 10.5668 1.66072V8.78572H17.6918C17.9902 8.78572 18.2763 8.90425 18.4873 9.11523C18.6983 9.3262 18.8168 9.61235 18.8168 9.91072Z' fill='white'/>
</svg>`
      },
      {
        itemType: "link",
        propertyName: "guide",
        tooltip: "Guide",
        href: "https://x.com/home",
        icon: `<svg width='12' height='12' viewBox='0 0 128 184' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path fill-rule='evenodd' clip-rule='evenodd' d='M0 56C0 23.9593 29.853 0 64 0C98.147 0 128 23.9593 128 56C128 85.5094 102.678 108.164 72 111.559V120C72 124.418 68.4183 128 64 128C59.5817 128 56 124.418 56 120V104C56 99.5817 59.5817 96 64 96C91.713 96 112 76.9793 112 56C112 35.0207 91.713 16 64 16C36.287 16 16 35.0207 16 56C16 60.4183 12.4183 64 8 64C3.58172 64 0 60.4183 0 56Z' fill='white'/>
<path d='M64 184C72.8366 184 80 176.837 80 168C80 159.163 72.8366 152 64 152C55.1634 152 48 159.163 48 168C48 176.837 55.1634 184 64 184Z' fill='white'/>
</svg>`
      },
    ],
    ({ propertyName, propertyValue }) => {
      if (propertyName === "contentType") {
        console.log(`Changing content type to: ${propertyValue}`); // Debugging log
        setContentType(propertyValue);
      } else if (propertyName === "questionType") {
        console.log(`Changing question type to: ${propertyValue}`); // Debugging log
        setQuestionType(propertyValue);
      } else if (propertyName === "addWidget") {
        const currentWidget = figma.currentPage.selection[0] as WidgetNode;
        if (currentWidget && currentWidget.type === "WIDGET") {
          const newWidget = currentWidget.cloneWidget({
            answerText: "",
            headerText: "",
            radioText: "",
            inputText: "",
            questionText: ""
          });
          newWidget.x += 0; // Adjust position as needed
          newWidget.y += 200; // Adjust position as needed
          figma.currentPage.appendChild(newWidget);

          // Create a new connector from the current widget to the new widget
          const connector = figma.createConnector();
          connector.connectorStart = {
            endpointNodeId: currentWidget.id,
            magnet: "BOTTOM",
          };
          connector.connectorEnd = {
            endpointNodeId: newWidget.id,
            magnet: "TOP",
          };
          connector.connectorStartStrokeCap = "NONE";
          connector.connectorEndStrokeCap = "NONE";
          connector.strokeColor = figma.util.solidPaint("#000000"); // Set stroke color to black using solidPaint
          figma.currentPage.appendChild(connector);
        }
      } else if (propertyName === "toggleAdditionalInput") {
        setShowAdditionalInput(!showAdditionalInput);
      }
    }
  );

  console.log(`Current content type: ${contentType}`); // Debugging log
  console.log(`Current question type: ${questionType}`); // Debugging log

  try {
    if (contentType === "header") {
      console.log("Rendering Header component"); // Debugging log
      return <Header {...props} />;
    } else if (contentType === "question") {
      console.log("Rendering Question component"); // Debugging log
      return questionType === "radio" ? <Radio {...props} showAdditionalInput={showAdditionalInput} /> : <InputWidget {...props} />;
    } else if (contentType === "answer") {
      console.log("Rendering Answer component"); // Debugging log
      return <Answer {...props} />;
    } else {
      console.log("Error: Invalid content type"); // Debugging log
      return <Text>Error: Invalid content type</Text>;
    }
  } catch (error) {
    console.log("Error rendering component:", error);
    return <Text>Error rendering component</Text>;
  }
}

widget.register(Widget);