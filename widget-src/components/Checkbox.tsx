import QuestionTemplate from './QuestionTemplate';

const checkboxIconSvg = `<svg width='10' height='10' viewBox='0 0 10 10' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path d='M8.33333 1.04167H1.66667C1.32292 1.04167 1.04167 1.32292 1.04167 1.66667V8.33333C1.04167 8.67708 1.32292 8.95833 1.66667 8.95833H8.33333C8.67708 8.95833 8.95833 8.67708 8.95833 8.33333V1.66667C8.95833 1.32292 8.67708 1.04167 8.33333 1.04167ZM4.16667 7.29167L2.08333 5.20833L2.72917 4.5625L4.16667 5.99583L7.27083 2.89167L7.91667 3.54167L4.16667 7.29167Z' fill='#30333D'/>
</svg>`;

function Checkbox(props: Partial<AutoLayoutProps> & { showAdditionalInput: boolean }) {
    return (
        <QuestionTemplate
            {...props}
            questionType="Checkbox"
            iconSvg={checkboxIconSvg}
        />
    );
}

export default Checkbox;