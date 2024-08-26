import QuestionTemplate from './QuestionTemplate';

const dropdownIconSvg = `<svg width='6' height='12' viewBox='0 0 6 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path fill-rule='evenodd' clip-rule='evenodd' d='M0.352252 7.85225C0.571922 7.63258 0.928078 7.63258 1.14775 7.85225L3 9.7045L4.85225 7.85225C5.07192 7.63258 5.42808 7.63258 5.64775 7.85225C5.86742 8.07192 5.86742 8.42808 5.64775 8.64775L3.39775 10.8977C3.17808 11.1174 2.82192 11.1174 2.60225 10.8977L0.352252 8.64775C0.132583 8.42808 0.132583 8.07192 0.352252 7.85225Z' fill='#30333D'/>
<path fill-rule='evenodd' clip-rule='evenodd' d='M2.60225 1.10225C2.82192 0.882583 3.17808 0.882583 3.39775 1.10225L5.64775 3.35225C5.86742 3.57192 5.86742 3.92808 5.64775 4.14775C5.42808 4.36742 5.07192 4.36742 4.85225 4.14775L3 2.2955L1.14775 4.14775C0.928078 4.36742 0.571922 4.36742 0.352252 4.14775C0.132583 3.92808 0.132583 3.57192 0.352252 3.35225L2.60225 1.10225Z' fill='#30333D'/>
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