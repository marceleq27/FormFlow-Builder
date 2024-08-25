const { useSyncedState, AutoLayout, Input } = figma.widget;

function Answer(props: Partial<AutoLayoutProps>) {
    const [answerText, setAnswerText] = useSyncedState("answerText", "");

    return (
        <AutoLayout
            name="Answer"
            effect={{
                type: "drop-shadow",
                color: "#B5BDC840",
                offset: { x: 0, y: 0 },
                blur: 0,
                spread: 6,
                showShadowBehindNode: false,
            }}
            fill="#FFF"
            stroke="#B5BDC8"
            cornerRadius={16}
            strokeWidth={2}
            strokeAlign="outside"
            direction="vertical"
            spacing={20}
            padding={{ vertical: 27, horizontal: 23 }}
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

export default Answer;