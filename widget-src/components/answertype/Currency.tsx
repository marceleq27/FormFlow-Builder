import AnswerTemplate from '../AnswerTemplate';
import { currencySVGs } from '../../currencySVGs';

function Currency(props: Partial<AutoLayoutProps> & {
    showAdditionalInput: boolean,
    currency: string,
    answerText: string,
    setAnswerText: (text: string) => void,
    additionalInputText: string,
    setAdditionalInputText: (text: string) => void
}) {
    const currencyIconSvg = currencySVGs[props.currency] || currencySVGs.default;

    return (
        <AnswerTemplate
            {...props}
            answerType="Currency"
            iconSvg={currencyIconSvg}
        />
    );
}

export default Currency;