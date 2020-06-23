import {Fragment} from 'react';

function highlightedCode(activeScreen, code) {
    const regex = new RegExp(`(${activeScreen}\:[^\\s\\&]+)`, 'g');
    //return escapeHtml(code).replace(regex, `<span class="text-code-yellow">$1</span>`).replace(/none:/g, '');

    return `${code}`.replace(regex, `<span class="text-code-yellow">$1</span>`).replace(/none:/g, '');
}

const HightlightedCodeSample = ({activeScreen, children}) => {

    return (
        <Fragment>
            <pre className="scrollbar-none m-0 p-0 overflow-auto scrolling-touch">
                <code className="inline-block p-4">{highlightedCode(activeScreen, children)}</code>
            </pre>
        </Fragment>
    );
};

export default HightlightedCodeSample;