import {Fragment} from 'react';
import Highlight, { defaultProps } from "prism-react-renderer";

const CodeHighlight = ({children, lang}) => {

    if (typeof children !== 'string')
        return (<Fragment>children</Fragment>);

    return (
        <Fragment>
            <div className="scrollbar-none m-0 p-0 overflow-auto scrolling-touch">
            <Highlight {...defaultProps} code={children} language={lang}>
                {({ className, style, tokens, getLineProps, getTokenProps }) => (
                    <pre className={className} style={style}>
                        {tokens.map((line, i) => (
                            <div {...getLineProps({ line, key: i })}>
                                {line.map((token, key) => (
                                    <span {...getTokenProps({ token, key })} />
                                ))}
                            </div>
                        ))}
                      </pre>
                )}
            </Highlight>
            </div>
        </Fragment>
    );
};

export default CodeHighlight;