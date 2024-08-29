const { AutoLayout, Text } = figma.widget;

interface ContentTypeSelectorProps {
    onSelectContentType: (contentType: ContentType) => void;
    selectedContentType: ContentType | null;
}

function ContentTypeSelector({ onSelectContentType, selectedContentType }: ContentTypeSelectorProps) {
    return (
        <AutoLayout spacing={10}>
            <Text
                onClick={() => onSelectContentType("header")}
                fill={selectedContentType === "header" ? "#7C3AED" : "#000000"}
            >
                Header
            </Text>
            <Text
                onClick={() => onSelectContentType("question")}
                fill={selectedContentType === "question" ? "#7C3AED" : "#000000"}
            >
                Question
            </Text>
        </AutoLayout>
    );
}

export default ContentTypeSelector;