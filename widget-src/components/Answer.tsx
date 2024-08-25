const { useSyncedState, AutoLayout, Input, Text } = figma.widget;

function Answer(props: Partial<AutoLayoutProps>) {
    const [answerText, setAnswerText] = useSyncedState("answerText", "");

    return (
        <AutoLayout
            name="Answer"
            overflow="visible"
            direction="vertical"
            width={370}
            horizontalAlignItems="center"
        >
            <AutoLayout
                name="badge"
                fill="#D0FAE5"
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
                    name="Answer"
                    fill="#1E5C49"
                    lineHeight="150%"
                    fontFamily="Inter"
                    fontSize={14}
                    letterSpacing={
                        -0.154
                    }
                    fontWeight={600}
                >
                    Answer
                </Text>
            </AutoLayout>
            <AutoLayout
                name="main"
                effect={{
                    type: "drop-shadow",
                    color: "#0000002E",
                    offset: {
                        x: 0,
                        y: 1,
                    },
                    blur: 3.2,
                    showShadowBehindNode:
                        false,
                }}
                fill="#FFF"
                cornerRadius={12}
                strokeWidth={2}
                strokeAlign="outside"
                spacing={20}
                padding={{
                    vertical: 14,
                    horizontal: 14,
                }}
                width="fill-parent"
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
                    fontSize={18}
                    letterSpacing={-0.154}
                    fontWeight={500}
                />
            </AutoLayout>
        </AutoLayout>
    );
}

export default Answer;