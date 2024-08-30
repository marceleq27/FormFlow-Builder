import AnswerTemplate from '../AnswerTemplate';
import { currencySVGs } from '../../currencySVGs';

function Currency(props: Partial<AutoLayoutProps> & { showAdditionalInput: boolean, currency: string }) {
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