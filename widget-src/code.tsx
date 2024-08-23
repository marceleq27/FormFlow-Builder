// This is a form builder widget

const { widget } = figma
const { useSyncedState, usePropertyMenu, AutoLayout, Text, SVG } = widget


// This is the answer widget

function Answer(
  props: Partial<AutoLayoutProps>
) {
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
      <Text
        name="Option 1"
        fill="#1E1E1E"
        width={204}
        lineHeight="150%"
        fontFamily="Inter"
        fontSize={14}
        letterSpacing={-0.154}
        fontWeight={500}
      >
        Option 1
      </Text>
    </AutoLayout>
  );
}

// This is the radio widget

function Radio(
  props: Partial<AutoLayoutProps>
) {
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
      <Text
        name="Mollit ad pariatur aliquip qui culpa proident anim voluptate."
        fill="#1E1E1E"
        width={306}
        lineHeight="150%"
        fontFamily="Inter"
        fontSize={18}
        letterSpacing={-0.198}
        fontWeight={500}
      >
        Mollit ad pariatur aliquip qui culpa proident anim voluptate.
      </Text>
    </AutoLayout>
  );
}


// This is the main widget
function Widget(
  props: Partial<AutoLayoutProps>
) {
  const [type, setType] = useSyncedState("type", "answer");

  usePropertyMenu(
    [
      {
        itemType: "dropdown",
        propertyName: "type",
        tooltip: "Select Type",
        options: [
          { option: "answer", label: "Answer" },
          { option: "radio", label: "Radio" },
        ],
        selectedOption: type,
      },
    ],
    ({ propertyName, propertyValue }) => {
      if (propertyName === "type") {
        console.log(`Changing type to: ${propertyValue}`); // Debugging log
        setType(propertyValue);
      }
    }
  );

  console.log(`Current type: ${type}`); // Debugging log

  try {
    return type === "answer" ? (
      <Answer {...props} />
    ) : (
      <Radio {...props} />
    );
  } catch (error) {
    console.error("Error rendering component:", error);
    return <Text>Error rendering component</Text>;
  }
}

widget.register(Widget)