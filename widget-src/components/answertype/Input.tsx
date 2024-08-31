import AnswerTemplate from '../AnswerTemplate';

function Input(props: Partial<AutoLayoutProps> & {
    showAdditionalInput: boolean,
    answerText: string,
    setAnswerText: (text: string) => void,
    additionalInputText: string,
    setAdditionalInputText: (text: string) => void
}) {
    return (
        <AnswerTemplate
            {...props}
            answerType="Input"
            iconSvg={inputIconSvg}
            answerText={props.answerText}
            setAnswerText={props.setAnswerText}
            additionalInputText={props.additionalInputText}
            setAdditionalInputText={props.setAdditionalInputText}
        />
    );
}

export default Input;