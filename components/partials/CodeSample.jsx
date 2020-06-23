import {Fragment, useEffect, Children, isValidElement} from 'react';
import Highlight, { defaultProps } from "prism-react-renderer";
import cn from "classnames";

const CodeSample = ({ children,  className, lang }, others) => {

    const {useHighlighter} = others;
    let code ,render;
    let isRendered = false;

    Children.map(children, (child, idx) => {

        if (children.length == 2) {
            if (!isValidElement(child)) {
                code = child;
            } else {
                isRendered = false;
                render = child;
            }
        } else {
            isRendered = true;
            if (!isValidElement(child)) {
                code = child;
                render = child;
            }
        }

        return [code, render]
    });


    //useEffect(() => {
   //     if (result) {
   //         code = result[0];
   //         render = result[1];
   //     }
   // }, []);
    //console.log('children === ', result)

    /*if (children && children.length == 2){
        code = children[1];
        render = children[0];
    } else {
        code = children;
        render = children;
        isRendered = true;
    }*/

    return (
        <Fragment>
        <div className={`relative overflow-hidden mb-8`}>
            <div className={`bg-white rounded-t-lg overflow-hidden border-t border-l border-r border-gray-400 p-4 ${className ? className : ''}`} {...others}>
            {isRendered ? <div dangerouslySetInnerHTML={{__html: render }}></div> : render}
            </div>
            <div className="rounded-b-lg bg-gray-800">
                {useHighlighter ? <Highlight {...defaultProps} code={code} language={lang}>
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
                : <pre className={cn('scrollbar-none m-0 p-0', {[` language-${lang}`]: lang})}>
                    <code className={cn('inline-block p-4 scrolling-touch',{[` language-${lang}`]: lang})}>{code}</code>
                </pre>}
            </div>
        </div>
        </Fragment>
    );
};

export default CodeSample;