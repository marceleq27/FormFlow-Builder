import AnswerTemplate from '../AnswerTemplate';

const checkboxIconSvg = `<svg width='10' height='10' viewBox='0 0 10 10' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path d='M7.27275 3.47725C7.49242 3.69692 7.49242 4.05308 7.27275 4.27275L4.64775 6.89775C4.42808 7.11742 4.07192 7.11742 3.85225 6.89775L2.72725 5.77275C2.50758 5.55308 2.50758 5.19692 2.72725 4.97725C2.94692 4.75758 3.30308 4.75758 3.52275 4.97725L4.25 5.7045L6.47725 3.47725C6.69692 3.25758 7.05308 3.25758 7.27275 3.47725Z' fill='#30333D'/>
<path d='M1.4375 1.4375V8.5625H8.5625V1.4375H1.4375ZM0.3125 1.25C0.3125 0.732233 0.732233 0.3125 1.25 0.3125H8.75C9.26777 0.3125 9.6875 0.732233 9.6875 1.25V8.75C9.6875 9.26777 9.26777 9.6875 8.75 9.6875H1.25C0.732233 9.6875 0.3125 9.26777 0.3125 8.75V1.25Z' fill='#30333D'/>
</svg>`;

function Checkbox(props: Partial<AutoLayoutProps> & { showAdditionalInput: boolean }) {
    return (
        <AnswerTemplate
            {...props}
            answerType="Checkbox"
            iconSvg={checkboxIconSvg}
        />
    );
}

export default Checkbox;