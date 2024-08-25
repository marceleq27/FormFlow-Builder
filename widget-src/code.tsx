// This is a form builder widget

const { widget } = figma
const { useSyncedState, usePropertyMenu, AutoLayout, Text, SVG, Frame, Input } = widget

// This is the answer widget

function Answer(
  props: Partial<AutoLayoutProps>
) {
  const [answerText, setAnswerText] = useSyncedState("answerText", "");

  return (
    <AutoLayout
      name="Answer"
      effect={{
        type: "drop-shadow",
        color: "#B5BDC840",
        offset: {
          x: 0,
          y: 0,
        },
        blur: 0,
        spread: 6,
        showShadowBehindNode:
          false,
      }}
      fill="#FFF"
      stroke="#B5BDC8"
      cornerRadius={16}
      strokeWidth={2}
      strokeAlign="outside"
      direction="vertical"
      spacing={20}
      padding={{
        vertical: 27,
        horizontal: 23,
      }}
      width={250}
      {...props}
    >
      <Input
        name="Input"
        value={answerText}
        placeholder="Answer..."
        onTextEditEnd={(event) => setAnswerText(event.characters)}
        fill="#1E1E1E"
        width={204}
        lineHeight="150%"
        fontFamily="Inter"
        fontSize={14}
        letterSpacing={-0.154}
        fontWeight={500}
      />
    </AutoLayout>
  );
}

// This is the header widget

function Header(
  props: Partial<AutoLayoutProps>
) {
  const [headerText, setHeaderText] = useSyncedState("headerText", "");

  return (
    <AutoLayout
      name="Header"
      effect={{
        type: "drop-shadow",
        color: "#B5BDC840",
        offset: {
          x: 0,
          y: 0,
        },
        blur: 0,
        spread: 6,
        showShadowBehindNode:
          false,
      }}
      fill="#FFF"
      stroke="#B5BDC8"
      cornerRadius={16}
      strokeWidth={2}
      strokeAlign="outside"
      direction="vertical"
      spacing={20}
      padding={{
        vertical: 27,
        horizontal: 23,
      }}
      width={250}
      {...props}
    >
      <Input
        name="Input"
        value={headerText}
        placeholder="Header..."
        onTextEditEnd={(event) => setHeaderText(event.characters)}
        fill="#1E1E1E"
        width={204}
        lineHeight="150%"
        fontFamily="Inter"
        fontSize={14}
        letterSpacing={-0.154}
        fontWeight={500}
      />
    </AutoLayout>
  );
}

// This is the radio widget

function Radio(
  props: Partial<AutoLayoutProps>
) {
  const [radioText, setRadioText] = useSyncedState("radioText", "");

  console.log("Rendering Radio component with props:", props);

  return (
    <AutoLayout
      name="Radio"
      effect={{
        type: "drop-shadow",
        color: "#00000014",
        offset: {
          x: 0,
          y: 2,
        },
        blur: 14.1,
        showShadowBehindNode: false,
      }}
      fill="#FFF"
      stroke="#E2E8F0"
      cornerRadius={16}
      direction="vertical"
      spacing={20}
      padding={{
        vertical: 27,
        horizontal: 23,
      }}
      width={352}
      {...props}
    >
      <Input
        name="Input"
        value={radioText}
        placeholder="Question..."
        onTextEditEnd={(event) => setRadioText(event.characters)}
        fill="#1E1E1E"
        width={306}
        lineHeight="150%"
        fontFamily="Inter"
        fontSize={18}
        letterSpacing={-0.198}
        fontWeight={500}
      />
      <AutoLayout
        name="form-builder-badge"
        fill="#FEF9C3"
        cornerRadius={8}
        overflow="visible"
        spacing={4}
        padding={{
          vertical: 4,
          horizontal: 8,
        }}
        verticalAlignItems="center"
      >
        <Frame
          name="Icon"
          strokeWidth={0.833}
          width={20}
          height={20}
        >
          <SVG
            name="Vector"
            x={{
              type: "horizontal-scale",
              leftOffsetPercent: 9.375,
              rightOffsetPercent: 9.375,
            }}
            y={{
              type: "vertical-scale",
              topOffsetPercent: 9.375,
              bottomOffsetPercent: 9.375,
            }}
            height={16}
            width={16}
            src="<svg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path d='M9 0.875008C7.39303 0.875008 5.82214 1.35153 4.486 2.24432C3.14985 3.1371 2.10844 4.40605 1.49348 5.8907C0.87852 7.37535 0.717618 9.00902 1.03112 10.5851C1.34463 12.1612 2.11846 13.6089 3.25476 14.7453C4.39106 15.8816 5.8388 16.6554 7.41489 16.9689C8.99099 17.2824 10.6247 17.1215 12.1093 16.5065C13.594 15.8916 14.8629 14.8502 15.7557 13.514C16.6485 12.1779 17.125 10.607 17.125 9.00001C17.1227 6.84582 16.266 4.78052 14.7427 3.25728C13.2195 1.73404 11.1542 0.877282 9 0.875008ZM9 15.875C7.64026 15.875 6.31105 15.4718 5.18046 14.7164C4.04987 13.9609 3.16868 12.8872 2.64833 11.631C2.12798 10.3747 1.99183 8.99238 2.2571 7.65876C2.52238 6.32514 3.17716 5.10013 4.13864 4.13865C5.10013 3.17716 6.32514 2.52238 7.65876 2.25711C8.99238 1.99184 10.3747 2.12798 11.631 2.64834C12.8872 3.16869 13.9609 4.04987 14.7164 5.18046C15.4718 6.31105 15.875 7.64026 15.875 9.00001C15.8729 10.8227 15.1479 12.5702 13.8591 13.8591C12.5702 15.1479 10.8227 15.8729 9 15.875ZM13.375 9.00001C13.375 9.8653 13.1184 10.7112 12.6377 11.4306C12.157 12.1501 11.4737 12.7108 10.6742 13.042C9.87482 13.3731 8.99515 13.4598 8.14648 13.2909C7.29782 13.1221 6.51827 12.7055 5.90641 12.0936C5.29456 11.4817 4.87788 10.7022 4.70907 9.85353C4.54026 9.00486 4.6269 8.12519 4.95803 7.32577C5.28916 6.52634 5.84992 5.84306 6.56938 5.36233C7.28885 4.8816 8.13471 4.62501 9 4.62501C10.1599 4.62625 11.272 5.08758 12.0922 5.90779C12.9124 6.72799 13.3738 7.84007 13.375 9.00001Z' fill='#854D0E'/>
</svg>"
          />
        </Frame>
        <Text
          name="Input"
          fill="#854D0E"
          lineHeight="150%"
          fontFamily="Inter"
          fontWeight={600}
        >
          Radio
        </Text>
      </AutoLayout>
    </AutoLayout>
  );
}

// This is the input widget

function InputWidget(
  props: Partial<AutoLayoutProps>
) {
  const [inputText, setInputText] = useSyncedState("inputText", "");

  return (
    <AutoLayout
      name="Input"
      effect={{
        type: "drop-shadow",
        color: "#00000014",
        offset: {
          x: 0,
          y: 2,
        },
        blur: 14.1,
        showShadowBehindNode: false,
      }}
      fill="#FFF"
      stroke="#E2E8F0"
      cornerRadius={16}
      direction="vertical"
      spacing={20}
      padding={{
        vertical: 27,
        horizontal: 23,
      }}
      width={352}
      {...props}
    >
      <Input
        name="Input"
        value={inputText}
        placeholder="Question..."
        onTextEditEnd={(event) => setInputText(event.characters)}
        fill="#1E1E1E"
        width={306}
        lineHeight="150%"
        fontFamily="Inter"
        fontSize={18}
        letterSpacing={-0.198}
        fontWeight={500}
      />
      <AutoLayout
        name="form-builder-badge"
        fill="#FEF9C3"
        cornerRadius={8}
        overflow="visible"
        spacing={4}
        padding={{
          vertical: 4,
          horizontal: 8,
        }}
        verticalAlignItems="center"
      >
        <Frame
          name="Icon"
          strokeWidth={0.833}
          width={20}
          height={20}
        >
          <SVG
            name="Vector"
            x={{
              type: "horizontal-scale",
              leftOffsetPercent: 9.375,
              rightOffsetPercent: 9.375,
            }}
            y={{
              type: "vertical-scale",
              topOffsetPercent: 9.375,
              bottomOffsetPercent: 9.375,
            }}
            height={16}
            width={16}
            src="<svg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path d='M9 0.875008C7.39303 0.875008 5.82214 1.35153 4.486 2.24432C3.14985 3.1371 2.10844 4.40605 1.49348 5.8907C0.87852 7.37535 0.717618 9.00902 1.03112 10.5851C1.34463 12.1612 2.11846 13.6089 3.25476 14.7453C4.39106 15.8816 5.8388 16.6554 7.41489 16.9689C8.99099 17.2824 10.6247 17.1215 12.1093 16.5065C13.594 15.8916 14.8629 14.8502 15.7557 13.514C16.6485 12.1779 17.125 10.607 17.125 9.00001C17.1227 6.84582 16.266 4.78052 14.7427 3.25728C13.2195 1.73404 11.1542 0.877282 9 0.875008ZM9 15.875C7.64026 15.875 6.31105 15.4718 5.18046 14.7164C4.04987 13.9609 3.16868 12.8872 2.64833 11.631C2.12798 10.3747 1.99183 8.99238 2.2571 7.65876C2.52238 6.32514 3.17716 5.10013 4.13864 4.13865C5.10013 3.17716 6.32514 2.52238 7.65876 2.25711C8.99238 1.99184 10.3747 2.12798 11.631 2.64834C12.8872 3.16869 13.9609 4.04987 14.7164 5.18046C15.4718 6.31105 15.875 7.64026 15.875 9.00001C15.8729 10.8227 15.1479 12.5702 13.8591 13.8591C12.5702 15.1479 10.8227 15.8729 9 15.875ZM13.375 9.00001C13.375 9.8653 13.1184 10.7112 12.6377 11.4306C12.157 12.1501 11.4737 12.7108 10.6742 13.042C9.87482 13.3731 8.99515 13.4598 8.14648 13.2909C7.29782 13.1221 6.51827 12.7055 5.90641 12.0936C5.29456 11.4817 4.87788 10.7022 4.70907 9.85353C4.54026 9.00486 4.6269 8.12519 4.95803 7.32577C5.28916 6.52634 5.84992 5.84306 6.56938 5.36233C7.28885 4.8816 8.13471 4.62501 9 4.62501C10.1599 4.62625 11.272 5.08758 12.0922 5.90779C12.9124 6.72799 13.3738 7.84007 13.375 9.00001Z' fill='#854D0E'/>
</svg>"
          />
        </Frame>
        <Text
          name="Input"
          fill="#854D0E"
          lineHeight="150%"
          fontFamily="Inter"
          fontWeight={600}
        >
          Input
        </Text>
      </AutoLayout>
    </AutoLayout>
  );
}

// This is the question widget

function Question(
  props: Partial<AutoLayoutProps>
) {
  const [questionText, setQuestionText] = useSyncedState("questionText", "");

  return (
    <AutoLayout
      name="Question"
      effect={{
        type: "drop-shadow",
        color: "#00000014",
        offset: {
          x: 0,
          y: 2,
        },
        blur: 14.1,
        showShadowBehindNode: false,
      }}
      fill="#FFF"
      stroke="#E2E8F0"
      cornerRadius={16}
      direction="vertical"
      spacing={20}
      padding={{
        vertical: 27,
        horizontal: 23,
      }}
      width={352}
      {...props}
    >
      <Input
        name="Input"
        value={questionText}
        placeholder="Question..."
        onTextEditEnd={(event) => setQuestionText(event.characters)}
        fill="#1E1E1E"
        width={306}
        lineHeight="150%"
        fontFamily="Inter"
        fontSize={18}
        letterSpacing={-0.198}
        fontWeight={500}
      />
      <AutoLayout
        name="form-builder-badge"
        fill="#FEF9C3"
        cornerRadius={8}
        overflow="visible"
        spacing={4}
        padding={{
          vertical: 4,
          horizontal: 8,
        }}
        verticalAlignItems="center"
      >
        <Frame
          name="Icon"
          strokeWidth={0.833}
          width={20}
          height={20}
        >
          <SVG
            name="Vector"
            x={{
              type: "horizontal-scale",
              leftOffsetPercent: 9.375,
              rightOffsetPercent: 9.375,
            }}
            y={{
              type: "vertical-scale",
              topOffsetPercent: 9.375,
              bottomOffsetPercent: 9.375,
            }}
            height={16}
            width={16}
            src="<svg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path d='M9 0.875008C7.39303 0.875008 5.82214 1.35153 4.486 2.24432C3.14985 3.1371 2.10844 4.40605 1.49348 5.8907C0.87852 7.37535 0.717618 9.00902 1.03112 10.5851C1.34463 12.1612 2.11846 13.6089 3.25476 14.7453C4.39106 15.8816 5.8388 16.6554 7.41489 16.9689C8.99099 17.2824 10.6247 17.1215 12.1093 16.5065C13.594 15.8916 14.8629 14.8502 15.7557 13.514C16.6485 12.1779 17.125 10.607 17.125 9.00001C17.1227 6.84582 16.266 4.78052 14.7427 3.25728C13.2195 1.73404 11.1542 0.877282 9 0.875008ZM9 15.875C7.64026 15.875 6.31105 15.4718 5.18046 14.7164C4.04987 13.9609 3.16868 12.8872 2.64833 11.631C2.12798 10.3747 1.99183 8.99238 2.2571 7.65876C2.52238 6.32514 3.17716 5.10013 4.13864 4.13865C5.10013 3.17716 6.32514 2.52238 7.65876 2.25711C8.99238 1.99184 10.3747 2.12798 11.631 2.64834C12.8872 3.16869 13.9609 4.04987 14.7164 5.18046C15.4718 6.31105 15.875 7.64026 15.875 9.00001C15.8729 10.8227 15.1479 12.5702 13.8591 13.8591C12.5702 15.1479 10.8227 15.8729 9 15.875ZM13.375 9.00001C13.375 9.8653 13.1184 10.7112 12.6377 11.4306C12.157 12.1501 11.4737 12.7108 10.6742 13.042C9.87482 13.3731 8.99515 13.4598 8.14648 13.2909C7.29782 13.1221 6.51827 12.7055 5.90641 12.0936C5.29456 11.4817 4.87788 10.7022 4.70907 9.85353C4.54026 9.00486 4.6269 8.12519 4.95803 7.32577C5.28916 6.52634 5.84992 5.84306 6.56938 5.36233C7.28885 4.8816 8.13471 4.62501 9 4.62501C10.1599 4.62625 11.272 5.08758 12.0922 5.90779C12.9124 6.72799 13.3738 7.84007 13.375 9.00001Z' fill='#854D0E'/>
</svg>"
          />
        </Frame>
        <Text
          name="Input"
          fill="#854D0E"
          lineHeight="150%"
          fontFamily="Inter"
          fontWeight={600}
        >
          Question
        </Text>
      </AutoLayout>
    </AutoLayout>
  );
}

// This is the main widget
function Widget(
  props: Partial<AutoLayoutProps>
) {
  const [contentType, setContentType] = useSyncedState("contentType", "answer");
  const [questionType, setQuestionType] = useSyncedState("questionType", "radio");

  usePropertyMenu(
    [
      {
        itemType: "dropdown",
        propertyName: "contentType",
        tooltip: "Select Content Type",
        options: [
          { option: "answer", label: "Answer" },
          { option: "header", label: "Header" },
          { option: "question", label: "Question" },
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
        itemType: "action",
        propertyName: "addWidget",
        tooltip: "Add",
        icon: `<svg width='12' height='12' viewBox='0 0 19 19' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path d='M18.8168 9.91072C18.8168 10.2091 18.6983 10.4952 18.4873 10.7062C18.2763 10.9172 17.9902 11.0357 17.6918 11.0357H10.5668V18.1607C10.5668 18.4591 10.4483 18.7452 10.2373 18.9562C10.0263 19.1672 9.7402 19.2857 9.44183 19.2857C9.14346 19.2857 8.85732 19.1672 8.64634 18.9562C8.43536 18.7452 8.31683 18.4591 8.31683 18.1607V11.0357H1.19183C0.893465 11.0357 0.607317 10.9172 0.396338 10.7062C0.18536 10.4952 0.0668335 10.2091 0.0668335 9.91072C0.0668335 9.61235 0.18536 9.3262 0.396338 9.11523C0.607317 8.90425 0.893465 8.78572 1.19183 8.78572H8.31683V1.66072C8.31683 1.36235 8.43536 1.0762 8.64634 0.865226C8.85732 0.654247 9.14346 0.535721 9.44183 0.535721C9.7402 0.535721 10.0263 0.654247 10.2373 0.865226C10.4483 1.0762 10.5668 1.36235 10.5668 1.66072V8.78572H17.6918C17.9902 8.78572 18.2763 8.90425 18.4873 9.11523C18.6983 9.3262 18.8168 9.61235 18.8168 9.91072Z' fill='white'/>
</svg>`
      },
      {
        itemType: "separator"
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
      }
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
          connector.connectorStartStrokeCap = "CIRCLE_FILLED";
          connector.strokeColor = figma.util.solidPaint("#000000"); // Set stroke color to black using solidPaint
          figma.currentPage.appendChild(connector);
        }
      }
    }
  );

  console.log(`Current content type: ${contentType}`); // Debugging log
  console.log(`Current question type: ${questionType}`); // Debugging log

  try {
    if (contentType === "answer") {
      return <Answer {...props} />;
    } else if (contentType === "header") {
      return <Header {...props} />;
    } else if (contentType === "question") {
      return questionType === "radio" ? <Radio {...props} /> : <InputWidget {...props} />;
    } else {
      return <Text>Error: Invalid content type</Text>;
    }
  } catch (error) {
    console.log("Error rendering component:", error);
    return <Text>Error rendering component</Text>;
  }
}

widget.register(Widget)