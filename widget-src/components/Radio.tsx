const { useSyncedState, AutoLayout, Input, Frame, SVG, Text } = figma.widget;

function Radio(props: Partial<AutoLayoutProps>) {
    const [radioText, setRadioText] = useSyncedState("radioText", "");
    const [numberInputText, setNumberInputText] = useSyncedState("numberInputText", "");

    console.log("Rendering Radio component with props:", props);

    return (
        <AutoLayout
            name="Question"
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
                        letterSpacing={
                            -0.154
                        }
                        fontWeight={600}
                    >
                        Question
                    </Text>
                </AutoLayout>
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
                    name="type-label"
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
                        strokeWidth={0.5}
                        width={12}
                        height={12}
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
                            height={10}
                            width={10}
                            src="<svg width='10' height='10' viewBox='0 0 10 10' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path d='M5 0.125C4.03582 0.125 3.09329 0.410914 2.2916 0.946586C1.48991 1.48226 0.865067 2.24363 0.496089 3.13442C0.127112 4.02521 0.030571 5.00541 0.218674 5.95107C0.406777 6.89672 0.871076 7.76536 1.55286 8.44715C2.23464 9.12893 3.10328 9.59323 4.04894 9.78133C4.99459 9.96943 5.97479 9.87289 6.86558 9.50391C7.75637 9.13494 8.51775 8.51009 9.05342 7.7084C9.58909 6.90671 9.875 5.96418 9.875 5C9.87364 3.70749 9.35958 2.46831 8.44564 1.55436C7.5317 0.640418 6.29251 0.126365 5 0.125ZM5 9.125C4.18415 9.125 3.38663 8.88307 2.70827 8.42981C2.02992 7.97655 1.50121 7.33231 1.189 6.57857C0.876788 5.82482 0.795099 4.99542 0.954263 4.19525C1.11343 3.39508 1.5063 2.66008 2.08319 2.08318C2.66008 1.50629 3.39508 1.11342 4.19525 0.954261C4.99543 0.795097 5.82483 0.876785 6.57857 1.189C7.33232 1.50121 7.97655 2.02992 8.42981 2.70827C8.88307 3.38663 9.125 4.18415 9.125 5C9.12376 6.09364 8.68877 7.14213 7.91545 7.91545C7.14213 8.68876 6.09364 9.12376 5 9.125ZM7.625 5C7.625 5.51918 7.47105 6.02669 7.18261 6.45837C6.89417 6.89005 6.4842 7.2265 6.00455 7.42518C5.52489 7.62386 4.99709 7.67585 4.48789 7.57456C3.97869 7.47328 3.51096 7.22327 3.14385 6.85616C2.77673 6.48904 2.52673 6.02131 2.42544 5.51211C2.32415 5.00291 2.37614 4.47511 2.57482 3.99546C2.7735 3.5158 3.10995 3.10583 3.54163 2.81739C3.97331 2.52895 4.48083 2.375 5 2.375C5.69597 2.37574 6.36321 2.65255 6.85534 3.14467C7.34746 3.63679 7.62426 4.30404 7.625 5Z' fill='#30333D'/>
</svg>
"
                        />
                    </Frame>
                    <Text
                        name="Radio"
                        fill="#30333D"
                        lineHeight="150%"
                        fontFamily="Inter"
                        fontSize={12}
                        letterSpacing={
                            -0.132
                        }
                        fontWeight={500}
                    >
                        Radio
                    </Text>
                </AutoLayout>
            </AutoLayout>
        </AutoLayout>
    );
}

export default Radio;