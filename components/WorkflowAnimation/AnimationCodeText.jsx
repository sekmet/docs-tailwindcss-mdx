import _ from 'lodash';

const AnimationCodeText = (props) => {

    let text = props.text;
    let cid = 0;

    if (_.isString(text)) {
        text = [text]
    }

    const characters = _(text).map((chunk) => {
        return _.isString(chunk)
            ? { text: chunk, class: '' }
            : chunk
    }).flatMap((chunk) => {
        return chunk.text.split('').map(c => {
            return (<div key={++cid} className={`hidden whitespace-pre ${chunk.class}`}>{c}</div>);
        })
    }).value();

    return (
        <div ref={props.innerRef} className="inline-block code-green">{characters}</div>
    );
};

export default AnimationCodeText;