const { useSyncedState, AutoLayout, Input, Text } = figma.widget;

function Header(props: Partial<AutoLayoutProps>) {
    const [headerText, setHeaderText] = useSyncedState("headerText", "");
    const [numberInputText, setNumberInputText] = useSyncedState("numberInputText", "");
    const [additionalInputText, setAdditionalInputText] = useSyncedState("additionalInputText", "");


    return (
        <AutoLayout
            name="Header"
            overflow="visible"
            direction="vertical"
            width={370}
            horizontalAlignItems="center"
        >
            <AutoLayout
                name="badge-container"
                overflow="visible"
                spacing={10}
                width={77}
                horizontalAlignItems="end"
            >
                <AutoLayout
                    name="number"
                    fill="#E0E7FF"
                    height={29}
                    cornerRadius={{
                        topLeft: 8,
                        topRight: 8,
                        bottomRight: 0,
                        bottomLeft: 0,
                    }}
                    overflow="visible"
                    spacing={6}
                    padding={{
                        vertical: 4,
                        horizontal: 8,
                    }}
                    horizontalAlignItems="center"
                    verticalAlignItems="center"
                >
                    <Input
                        name="numberInput"
                        value={numberInputText}
                        placeholder="1.1"
                        onTextEditEnd={(event) => setNumberInputText(event.characters)}
                        fill="#393A78"
                        lineHeight="150%"
                        fontFamily="Inter"
                        fontSize={14}
                        letterSpacing={-0.154}
                        fontWeight={600}
                        width={32}
                        horizontalAlignText="center"
                    />
                </AutoLayout>
                <AutoLayout
                    name="label"
                    fill="#E0E7FF"
                    cornerRadius={{
                        topLeft: 8,
                        topRight: 8,
                        bottomRight: 0,
                        bottomLeft: 0,
                    }}
                    overflow="visible"
                    spacing={6}
                    padding={{
                        vertical: 4,
                        horizontal: 8,
                    }}
                    horizontalAlignItems="center"
                    verticalAlignItems="center"
                >
                    <Text
                        name="HeaderLabel"
                        fill="#393A78"
                        lineHeight="150%"
                        fontFamily="Inter"
                        fontSize={14}
                        letterSpacing={-0.154}
                        fontWeight={600}
                    >
                        Header
                    </Text>
                </AutoLayout>
            </AutoLayout>
            <AutoLayout
                name="Main"
                overflow="hidden"
                effect={{
                    type: "drop-shadow",
                    color: "#0000002E",
                    offset: {
                        x: 0,
                        y: 1,
                    },
                    blur: 3.2,
                    showShadowBehindNode: false,
                }}
                fill="#FFF"
                cornerRadius={12}
                direction="vertical"
                width={372}
            >
                <AutoLayout
                    name="header-title"
                    fill="#FFF"
                    stroke="#00000014"
                    strokeWidth={1}
                    direction="vertical"
                    spacing={12}
                    padding={{
                        vertical: 12,
                        horizontal: 14,
                    }}
                    width="fill-parent"
                >
                    <Input
                        name="Input"
                        value={headerText}
                        placeholder="Header..."
                        onTextEditEnd={(event) => setHeaderText(event.characters)}
                        fill="#1E1E1E"
                        width={306}
                        lineHeight="150%"
                        fontFamily="Inter"
                        fontSize={18}
                        letterSpacing={-0.198}
                        fontWeight={500}
                    />
                </AutoLayout>
                {props.showAdditionalInput && (
                    <AutoLayout
                        name="additional"
                        fill="#FFF"
                        strokeWidth={2}
                        strokeAlign="outside"
                        direction="vertical"
                        spacing={8}
                        padding={{
                            vertical: 12,
                            horizontal: 14,
                        }}
                        width="fill-parent"
                    >
                        <Input
                            name="additionalInput"
                            value={additionalInputText}
                            placeholder="Additional information"
                            onTextEditEnd={(event) => setAdditionalInputText(event.characters)}
                            fill="#1E1E1E9E"
                            width="fill-parent"
                            lineHeight="150%"
                            fontFamily="Inter"
                            fontSize={12}
                            letterSpacing={-0.132}
                            fontWeight={500}
                        />
                    </AutoLayout>
                )}
            </AutoLayout>
        </AutoLayout>
    );
}

export default Header;