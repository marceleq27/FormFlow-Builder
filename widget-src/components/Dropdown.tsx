import QuestionTemplate from './QuestionTemplate';

const dropdownIconSvg = `<svg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
<g clip-path='url(#clip0_9071_747)'>
<path d='M9.75 4.5L6 8.25L2.25 4.5' stroke='black' stroke-width='1.125' stroke-linecap='round' stroke-linejoin='round'/>
</g>
<defs>
<clipPath id='clip0_9071_747'>
<rect width='12' height='12' fill='white'/>
</clipPath>
</defs>
</svg>`;

function Dropdown(props: Partial<AutoLayoutProps> & { showAdditionalInput: boolean }) {
    return (
        <QuestionTemplate
            {...props}
            questionType="Dropdown"
            iconSvg={dropdownIconSvg}
        />
    );
}

export default Dropdown;