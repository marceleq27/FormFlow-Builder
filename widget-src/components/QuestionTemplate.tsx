const { useSyncedState, AutoLayout, Input, Frame, SVG, Text } = figma.widget;

interface QuestionTemplateProps extends Partial<AutoLayoutProps> {
    showAdditionalInput: boolean;
    questionType: string;
    iconSvg: string;
}

function QuestionTemplate(props: QuestionTemplateProps) {
    const [questionText, setQuestionText] = useSyncedState(`${props.questionType}Text`, "");
    const [numberInputText, setNumberInputText] = useSyncedState(`${props.questionType}NumberText`, "");
    const [additionalInputText, setAdditionalInputText] = useSyncedState(`${props.questionType}AdditionalText`, "");

    console.log(`Rendering ${props.questionType} component with props:`, props);

    return (
        <AutoLayout
            name={props.questionType}
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
                        name="Question"
                        fill="#393A78"
                        lineHeight="150%"
                        fontFamily="Inter"
                        fontSize={14}
                        letterSpacing={-0.154}
                        fontWeight={600}
                    >
                        Question
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
                    name="question"
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
                        name="type-badge"
                        fill="#E3E4E8"
                        cornerRadius={5}
                        overflow="visible"
                        spacing={3}
                        padding={{
                            vertical: 2,
                            horizontal: 4,
                        }}
                        horizontalAlignItems="center"
                        verticalAlignItems="center"
                    >
                        <Frame
                            name="Icon"
                            width={12}
                            height={12}
                            overflow="visible"
                        >
                            <SVG
                                name="Vector"
                                src={props.iconSvg}
                                width="fill-parent"
                                height="fill-parent"
                            />
                        </Frame>
                        <Text
                            name="form-type"
                            fill="#30333D"
                            lineHeight="150%"
                            fontFamily="Inter"
                            fontSize={12}
                            letterSpacing={-0.132}
                            fontWeight={500}
                        >
                            {props.questionType}
                        </Text>
                    </AutoLayout>
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

export default QuestionTemplate;