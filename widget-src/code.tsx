import Answer from './components/Answer';
import Header from './components/Header';
import Radio from './components/Radio';
import Input from './components/Input';
import Dropdown from './components/Dropdown';
import Checkbox from './components/Checkbox';
import Datepicker from './components/Datepicker';
import Signature from './components/Signature';
import Slider from './components/Slider';
import Custom from './components/Custom';

const { widget } = figma;
const { useSyncedState, usePropertyMenu, AutoLayout, Text } = widget;

function Widget(props: Partial<AutoLayoutProps>) {
  const [contentType, setContentType] = useSyncedState("contentType", "answer");
  const [questionType, setQuestionType] = useSyncedState("questionType", "radio");
  const [showAdditionalInput, setShowAdditionalInput] = useSyncedState("showAdditionalInput", true);
  const [isLinkEditable, setIsLinkEditable] = useSyncedState("isLinkEditable", false);

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
          itemType: "dropdown",
          propertyName: "questionType",
          tooltip: "Select Question Type",
          options: [
            { option: "radio", label: "Radio" },
            { option: "input", label: "Input" },
            { option: "dropdown", label: "Dropdown" },
            { option: "checkbox", label: "Checkbox" },
            { option: "datepicker", label: "Datepicker" },
            { option: "signature", label: "Signature" },
            { option: "slider", label: "Slider" },
            { option: "custom", label: "Custom" },
          ],
          selectedOption: questionType,
        },
        {
          itemType: "toggle",
          propertyName: "toggleAdditionalInput",
          tooltip: showAdditionalInput ? "Hide additional" : "Show additional",
          isToggled: showAdditionalInput,
          icon: `<svg width='16' height='16' viewBox='-0.5 -1 18 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path d='M8 0.85714C2.28571 0.85714 0 6 0 6C0 6 2.28571 11.1429 8 11.1429C13.7143 11.1429 16 6 16 6C16 6 13.7143 0.85714 8 0.85714Z' stroke='white' stroke-width='1.14286' stroke-linecap='round' stroke-linejoin='round'/>
<path d='M8 8.85714C9.57796 8.85714 10.8571 7.57795 10.8571 6C10.8571 4.42204 9.57796 3.14285 8 3.14285C6.42204 3.14285 5.14286 4.42204 5.14286 6C5.14286 7.57795 6.42204 8.85714 8 8.85714Z' stroke='white' stroke-width='1.14286' stroke-linecap='round' stroke-linejoin='round'/>
</svg>`
        },
        ...(questionType === "custom" ? [{
          itemType: "toggle",
          propertyName: "toggleLinkEdit",
          tooltip: isLinkEditable ? "Save link" : "Edit link",
          isToggled: isLinkEditable,
          icon: `<svg width='16' height='16' viewBox='0 -1 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path d='M11.25 3.13579C11.2312 3.7886 10.9628 4.40934 10.5 4.87017L8.87112 6.50001C8.63388 6.73855 8.35168 6.92766 8.04085 7.0564C7.73003 7.18514 7.39676 7.25094 7.06034 7.25001H7.05799C6.71582 7.24977 6.37717 7.18095 6.06204 7.04763C5.74691 6.91431 5.46169 6.71919 5.22324 6.47379C4.98479 6.22839 4.79794 5.93769 4.67372 5.61886C4.5495 5.30004 4.49044 4.95955 4.50002 4.61751C4.50282 4.51805 4.54501 4.42378 4.61732 4.35543C4.68962 4.28709 4.78611 4.25026 4.88557 4.25306C4.98503 4.25585 5.0793 4.29805 5.14765 4.37035C5.21599 4.44265 5.25282 4.53915 5.25002 4.6386C5.24319 4.88044 5.28491 5.1212 5.37271 5.34665C5.46051 5.57209 5.5926 5.77765 5.76119 5.95117C5.92978 6.1247 6.13144 6.26267 6.35426 6.35694C6.57707 6.45121 6.81652 6.49986 7.05846 6.50001C7.29629 6.50062 7.53188 6.45408 7.75161 6.36308C7.97134 6.27208 8.17085 6.13843 8.33862 5.96985L9.96752 4.34095C10.3036 4.00064 10.4914 3.54119 10.4899 3.0629C10.4884 2.58462 10.2977 2.12635 9.95953 1.78815C9.62134 1.44996 9.16307 1.25929 8.68479 1.2578C8.2065 1.2563 7.74705 1.44409 7.40674 1.78017L6.89112 2.29579C6.82022 2.36315 6.72581 2.40015 6.62803 2.39889C6.53024 2.39764 6.43681 2.35824 6.36766 2.28909C6.29851 2.21994 6.25911 2.12651 6.25786 2.02872C6.25661 1.93094 6.2936 1.83653 6.36096 1.76563L6.87659 1.25001C7.11447 1.01204 7.39691 0.823266 7.70777 0.694473C8.01863 0.56568 8.35182 0.49939 8.6883 0.49939C9.02479 0.49939 9.35797 0.56568 9.66883 0.694473C9.97969 0.823266 10.2621 1.01204 10.5 1.25001C10.7464 1.49702 10.94 1.79159 11.0689 2.11579C11.1979 2.43998 11.2595 2.78702 11.25 3.13579ZM5.1094 7.70282L4.59377 8.21845C4.4256 8.38774 4.22544 8.52192 4.00495 8.61317C3.78446 8.70443 3.54803 8.75094 3.3094 8.75001C2.95141 8.74972 2.60155 8.64333 2.30401 8.44428C2.00646 8.24523 1.7746 7.96246 1.6377 7.63168C1.50081 7.30091 1.46503 6.93698 1.53488 6.58588C1.60474 6.23477 1.7771 5.91226 2.03018 5.65907L3.65627 4.03017C3.91239 3.7727 4.24001 3.59819 4.59658 3.5293C4.95315 3.46042 5.3222 3.50034 5.65579 3.64388C5.98938 3.78743 6.2721 4.02796 6.46723 4.33425C6.66237 4.64053 6.76089 4.99842 6.75002 5.36142C6.74723 5.46087 6.78405 5.55737 6.8524 5.62967C6.92075 5.70197 7.01502 5.74417 7.11448 5.74696C7.21393 5.74976 7.31043 5.71293 7.38273 5.64459C7.45503 5.57624 7.49723 5.48197 7.50002 5.38251C7.50903 5.03429 7.44719 4.68787 7.31827 4.36427C7.18934 4.04067 6.99602 3.74664 6.75002 3.50001C6.26964 3.01983 5.61822 2.75009 4.93901 2.75009C4.25979 2.75009 3.60838 3.01983 3.12799 3.50001L1.50002 5.12892C1.14201 5.48679 0.898109 5.94276 0.799153 6.4392C0.700198 6.93564 0.750625 7.45028 0.944063 7.91807C1.1375 8.38586 1.46527 8.78582 1.88594 9.06739C2.30661 9.34896 2.80131 9.49951 3.30752 9.50001C3.64402 9.50098 3.97738 9.43519 4.28828 9.30645C4.59918 9.17772 4.88146 8.98858 5.11877 8.75001L5.6344 8.23439C5.69508 8.1629 5.72679 8.07128 5.72326 7.97757C5.71973 7.88387 5.68123 7.79489 5.61533 7.72817C5.54944 7.66146 5.46095 7.62185 5.36729 7.61716C5.27364 7.61246 5.18163 7.64303 5.1094 7.70282Z' fill='white'/>
          </svg>`
        }] : [])
      ] : []),
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
      } else if (propertyName === "toggleLinkEdit") {
        setIsLinkEditable(!isLinkEditable);
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
      switch (questionType) {
        case "radio":
          return <Radio {...props} showAdditionalInput={showAdditionalInput} />;
        case "input":
          return <Input {...props} showAdditionalInput={showAdditionalInput} />;
        case "dropdown":
          return <Dropdown {...props} showAdditionalInput={showAdditionalInput} />;
        case "checkbox":
          return <Checkbox {...props} showAdditionalInput={showAdditionalInput} />;
        case "datepicker":
          return <Datepicker {...props} showAdditionalInput={showAdditionalInput} />;
        case "signature":
          return <Signature {...props} showAdditionalInput={showAdditionalInput} />;
        case "slider":
          return <Slider {...props} showAdditionalInput={showAdditionalInput} />;
        case "custom":
          return <Custom {...props} showAdditionalInput={showAdditionalInput} isLinkEditable={isLinkEditable} />;
        default:
          console.log("Error: Invalid question type"); // Debugging log
          return <Text>Error: Invalid question type</Text>;
      }
    } else if (contentType === "answer") {
      console.log("Rendering Answer component"); // Debugging log
      return <Answer {...props} />;
    } else {
      console.log("Error: Invalid content type"); // Debugging log
      return <Text>Error: Invalid content type</Text>;
    }
  } catch (error) {
    console.error("Error rendering component:", error); // Changed to console.error for more details
    return <Text>Error rendering component: {error.message}</Text>; // Display error message
  }
}

widget.register(Widget);