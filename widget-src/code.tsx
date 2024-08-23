// This is a form builder widget

const { widget } = figma
const { useSyncedState, usePropertyMenu, AutoLayout, Text, SVG, Frame } = widget


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
          name="Radio"
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