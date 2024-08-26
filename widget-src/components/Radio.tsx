import QuestionTemplate from './QuestionTemplate';

const radioIconSvg = `<svg width='10' height='10' viewBox='0 0 10 10' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path d='M5 0.125C4.03582 0.125 3.09329 0.410914 2.2916 0.946586C1.48991 1.48226 0.865067 2.24363 0.496089 3.13442C0.127112 4.02521 0.030571 5.00541 0.218674 5.95107C0.406777 6.89672 0.871076 7.76536 1.55286 8.44715C2.23464 9.12893 3.10328 9.59323 4.04894 9.78133C4.99459 9.96943 5.97479 9.87289 6.86558 9.50391C7.75637 9.13494 8.51775 8.51009 9.05342 7.7084C9.58909 6.90671 9.875 5.96418 9.875 5C9.87364 3.70749 9.35958 2.46831 8.44564 1.55436C7.5317 0.640418 6.29251 0.126365 5 0.125ZM5 9.125C4.18415 9.125 3.38663 8.88307 2.70827 8.42981C2.02992 7.97655 1.50121 7.33231 1.189 6.57857C0.876788 5.82482 0.795099 4.99542 0.954263 4.19525C1.11343 3.39508 1.5063 2.66008 2.08319 2.08318C2.66008 1.50629 3.39508 1.11342 4.19525 0.954261C4.99543 0.795097 5.82483 0.876785 6.57857 1.189C7.33232 1.50121 7.97655 2.02992 8.42981 2.70827C8.88307 3.38663 9.125 4.18415 9.125 5C9.12376 6.09364 8.68877 7.14213 7.91545 7.91545C7.14213 8.68876 6.09364 9.12376 5 9.125ZM7.625 5C7.625 5.51918 7.47105 6.02669 7.18261 6.45837C6.89417 6.89005 6.4842 7.2265 6.00455 7.42518C5.52489 7.62386 4.99709 7.67585 4.48789 7.57456C3.97869 7.47328 3.51096 7.22327 3.14385 6.85616C2.77673 6.48904 2.52673 6.02131 2.42544 5.51211C2.32415 5.00291 2.37614 4.47511 2.57482 3.99546C2.7735 3.5158 3.10995 3.10583 3.54163 2.81739C3.97331 2.52895 4.48083 2.375 5 2.375C5.69597 2.37574 6.36321 2.65255 6.85534 3.14467C7.34746 3.63679 7.62426 4.30404 7.625 5Z' fill='#30333D'/>
</svg>`;

function Radio(props: Partial<AutoLayoutProps> & { showAdditionalInput: boolean }) {
    return (
        <QuestionTemplate
            {...props}
            questionType="Radio"
            iconSvg={radioIconSvg}
        />
    );
}

export default Radio;