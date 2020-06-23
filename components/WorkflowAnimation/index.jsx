import {Fragment, Component, createRef, forwardRef} from 'react';
import { gsap, TimelineLite, TweenLite, Power4, CSSPlugin } from "gsap";
import flatMap from 'lodash/flatMap';

import AnimationCodeText from './AnimationCodeText';
//
gsap.registerPlugin(CSSPlugin);

function tweenTo(el, duration, vars, position){
    return new Promise((resolve, reject) => {
        (new TimelineLite).to(el, duration, {
            ...vars,
            onComplete: resolve
        }, position);
    });
}

function tweenStaggerTo(el, duration, vars, stagger, position) {
    return new Promise((resolve, reject) => {
        (new TimelineLite).staggerTo(el, duration, {
            ...vars,
        }, stagger, position, resolve);
    });
}

const AnimationCodeTextForwardingRef = forwardRef((props, ref) => (
    <AnimationCodeText innerRef={ref} {...props} />
));


class WorkflowAnimation extends Component {

    state = {
        classCardFlex: createRef(),
        cardFlexCursor: createRef(),
        classCardPadding: createRef(),
        cardCursor: createRef(),
        classAvatarLarger: createRef(),
        avatarLargerCursor: createRef(),
        classAvatarRounded: createRef(),
        classAvatarCenter: createRef(),
        classAvatarMarginFix: createRef(),
        classAvatarRightMargin: createRef(),
        avatarCursor: createRef(),
        classContentCenter: createRef(),
        classContentLeftAlign: createRef(),
        contentLeftAlignCursor: createRef(),
        contentCursor: createRef(),
        classNameSize: createRef(),
        nameCursor: createRef(),
        classRoleColor: createRef(),
        roleCursor: createRef(),
        classContactColor1: createRef(),
        contactCursor1: createRef(),
        classContactColor2: createRef(),
        contactCursor2: createRef(),
        card: createRef(),
        cardLarge: createRef(),
        cardSmall: createRef(),
        cardInner: createRef(),
        avatar: createRef(),
        content: createRef(),
        name: createRef(),
        role: createRef(),
        email: createRef(),
        phone: createRef(),
        resizeCursor: createRef(),
        resizeCursorCircle: createRef(),

    }

    static async getServerSideProps(ctx) {
        const initialProps = await Component.getServerSideProps(ctx);
        return { ...initialProps };
    }

    runAnimation() {

        this.animateCardPadding()
            .then(() => this.animateAvatarRadius())
            .then(() => this.animateAvatarCentering())
            .then(() => this.animateNameSize())
            .then(() => this.animateRoleColor())
            .then(() => this.animateContactColors())
            .then(() => this.animateContentCentering())
            .then(() => this.animateCardWidening())
            .then(() => this.animateCardFlexLayout())
            .then(() => this.animateAvatarMarginFix())
            .then(() => this.animateContentLeftAlign())
            .then(() => this.animateAvatarRightMargin())
            .then(() => this.animateAvatarLarger())
            .then(() => this.animateResizeCursorIntoPosition())
            .then(() => this.animateCardResizing())
    }
    animateCardPadding() {
        return tweenTo(this.state.cardCursor.current, .08, { visibility: 'visible' })
            .then(() => tweenStaggerTo(this.state.classCardPadding.current.children, 0.08, { display: 'inline-block' }, 0.08))
            .then(() => tweenTo(this.state.cardInner.current, 1, { padding: '1.5rem', ease: Power4.easeOut }, '+=.25'))
            .then(() => tweenTo(this.state.cardCursor.current, .08, { visibility: 'hidden' }))
    }
    animateAvatarRadius() {
        return tweenTo(this.state.avatarCursor.current, .08, { visibility: 'visible' })
            .then(() => tweenStaggerTo(this.state.classAvatarRounded.current.children, 0.08, { display: 'inline-block' }, 0.08))
            .then(() => tweenTo(this.state.avatar.current, 1, { borderRadius: '2rem', ease: Power4.easeOut }, '+=.25'))
    }
    animateAvatarCentering(){
        return tweenStaggerTo(this.state.classAvatarCenter.current.children, .08, { display: 'inline-block' }, .08)
            .then(() => {
                const oldPosition = this.state.avatar.current.getBoundingClientRect()
                TweenLite.set(this.state.avatar.current, { marginLeft: 'auto', marginRight: 'auto' })
                TweenLite.set(this.state.avatar.current, { x: 0 })
                TweenLite.set(this.state.avatar.current, { x: oldPosition.left - this.state.avatar.current.getBoundingClientRect().left })
                return tweenTo(this.state.avatar.current, 1, { x: 0, ease: Power4.easeOut }, '+=.25')
            })
            .then(() => tweenTo(this.state.avatarCursor.current, .08, { visibility: 'hidden'}))
    }
    animateNameSize() {
        return tweenTo(this.state.nameCursor.current, .08, { visibility: 'visible'})
            .then(() => tweenStaggerTo(this.state.classNameSize.current.children, 0.08, { display: 'inline-block' }, 0.08))
            .then(() => tweenTo(this.state.name.current, 1, { fontSize: '1.25rem', ease: Power4.easeOut }, '+=.25'))
            .then(() => tweenTo(this.state.nameCursor.current, .08, { visibility: 'hidden'}))
    }
    animateRoleColor() {
        return tweenTo(this.state.roleCursor.current, .08, { visibility: 'visible'})
            .then(() => tweenStaggerTo(this.state.classRoleColor.current.children, 0.08, { display: 'inline-block' }, 0.08))
            .then(() => tweenTo(this.state.role.current, 1, { color: '#9f7aea', ease: Power4.easeOut }, '+=.25'))
            .then(() => tweenTo(this.state.roleCursor.current, .08, { visibility: 'hidden'}))
    }
    animateContactColors() {
        return tweenTo(this.state.contactCursor1.current, .25, { visibility: 'visible'})
            .then(() => tweenTo(this.state.contactCursor2.current, .25, { visibility: 'visible'}))
            .then(() => {
                return Promise.all([
                    tweenStaggerTo(this.state.classContactColor1.current.children, 0.08, { display: 'inline-block' }, 0.08),
                    tweenStaggerTo(this.state.classContactColor2.current.children, 0.08, { display: 'inline-block' }, 0.08),
                ])
            })
            .then(() => {
                return Promise.all([
                    tweenTo(this.state.email.current, 1, { color: '#647287', ease: Power4.easeOut }, '+=.25'),
                    tweenTo(this.state.phone.current, 1, { color: '#647287', ease: Power4.easeOut }, '+=.25'),
                ])
            })
            .then(() => {
                return Promise.all([
                    tweenTo(this.state.contactCursor1.current, .08, { visibility: 'hidden'}),
                    tweenTo(this.state.contactCursor2.current, .08, { visibility: 'hidden'}),
                ])
            })
    }
    animateContentCentering() {
        return tweenTo(this.state.contentCursor.current, .08, { visibility: 'visible'})
            .then(() => tweenStaggerTo(this.state.classContentCenter.current.children, 0.08, { display: 'inline-block' }, 0.08))
            .then(() => {
                const elements = flatMap([...this.state.content.current.children], el => [...el.children])
                const oldPositions = elements.map(el => el.getBoundingClientRect())

                TweenLite.set(this.state.content.current, { textAlign: 'center' })

                elements.forEach((el, i) => {
                    TweenLite.set(el, { x: oldPositions[i].left - el.getBoundingClientRect().left })
                })

                return tweenTo(elements, 1, { x: 0, ease: Power4.easeOut })
            })
            .then(() => tweenTo(this.state.contentCursor.current, .25, { visibility: 'hidden' }))
    }
    animateCardWidening() {
        return tweenTo(this.state.resizeCursor.current, 1, { opacity: 1, x: 0, y: 0, ease: Power4.easeOut })
            .then(() => tweenTo(this.state.resizeCursorCircle.current, 0, { opacity: 1 }))
            .then(() => tweenTo(this.state.card.current, 2, { width: '30rem', ease: Power4.easeOut }, '+=.25'))
            .then(() => tweenTo(this.state.resizeCursorCircle.current, 0, { opacity: .5 }))
            .then(() => tweenTo(this.state.resizeCursor.current, 1, { opacity: 0, x: 100, y: 150, ease: Power4.easeInOut }, '+=.25'))
    }
    animateCardFlexLayout() {
        return tweenTo(this.state.cardFlexCursor.current, .25, { visibility: 'visible'})
            .then(() => tweenStaggerTo(this.state.classCardFlex.current.children, 0.08, { display: 'inline-block' }, 0.08))
            .then(() => {
                const contentElements = flatMap([...this.state.content.current.children], el => [...el.children])
                const oldCardPosition = this.state.cardInner.current.getBoundingClientRect()
                const oldAvatarPosition = this.state.avatar.current.getBoundingClientRect()
                const oldContentPositions = contentElements.map(el => el.getBoundingClientRect())

                TweenLite.set(this.state.cardInner.current, { display: 'flex' })


                const newCardPosition = this.state.cardInner.current.getBoundingClientRect()
                const newAvatarPosition = this.state.avatar.current.getBoundingClientRect()
                const newContentPositions = contentElements.map(el => el.getBoundingClientRect())

                TweenLite.set(this.state.cardInner.current, { height: oldCardPosition.height })
                TweenLite.set(this.state.avatar.current, { x: oldAvatarPosition.left - newAvatarPosition.left })
                contentElements.forEach((el, i) => {
                    TweenLite.set(el, {
                        x: oldContentPositions[i].left - newContentPositions[i].left,
                        y: oldContentPositions[i].top - newContentPositions[i].top,
                    })
                })

                return Promise.all([
                    tweenTo(this.state.avatar.current, 1, { x: 0, ease: Power4.easeOut }, '+=.25'),
                    tweenTo(contentElements, 1, { x: 0, y: 0, ease: Power4.easeOut }, '+=.25'),
                    tweenTo(this.state.cardInner.current, 1, { height: newCardPosition.height, ease: Power4.easeOut }, '+=.25'),
                ])
            })
            .then(() => tweenTo(this.state.cardFlexCursor.current, .25, { visibility: 'hidden' }))
    }
    animateAvatarMarginFix() {
        return tweenTo(this.state.avatarCursor.current, .25, { visibility: 'visible'})
            .then(() => tweenStaggerTo(this.state.classAvatarMarginFix.current.children, 0.08, { display: 'inline-block' }, 0.08))
            .then(() => {
                const oldAvatarPosition = this.state.avatar.current.getBoundingClientRect()
                const oldContentPosition = this.state.content.current.getBoundingClientRect()

                TweenLite.set(this.state.avatar.current, { marginRight: 0, marginLeft: 0 })

                const newAvatarPosition = this.state.avatar.current.getBoundingClientRect()
                const newContentPosition = this.state.content.current.getBoundingClientRect()

                TweenLite.set(this.state.avatar.current, { x: oldAvatarPosition.left - newAvatarPosition.left })
                TweenLite.set(this.state.content.current, { x: oldContentPosition.left - newContentPosition.left })

                return Promise.all([
                    tweenTo(this.state.avatar.current, 1, { x: 0, ease: Power4.easeOut }, '+=.25'),
                    tweenTo(this.state.content.current, 1, { x: 0, ease: Power4.easeOut }, '+=.25'),
                ])
            })
            .then(() => tweenTo(this.state.avatarCursor.current, .25, { visibility: 'hidden' }))
    }
    animateContentLeftAlign() {
        return tweenTo(this.state.contentLeftAlignCursor.current, .25, { visibility: 'visible'})
            .then(() => tweenStaggerTo(this.state.classContentLeftAlign.current.children, 0.08, { display: 'inline-block' }, 0.08))
            .then(() => {
                const elements = flatMap([...this.state.content.current.children], el => [...el.children])
                const oldPositions = elements.map(el => el.getBoundingClientRect())

                TweenLite.set(this.state.content.current, { textAlign: 'left' })

                elements.forEach((el, i) => {
                    TweenLite.set(el, { x: oldPositions[i].left - el.getBoundingClientRect().left })
                })

                return tweenTo(elements, 1, { x: 0, ease: Power4.easeOut })
            })
            .then(() => tweenTo(this.state.contentLeftAlignCursor.current, .25, { visibility: 'hidden' }))
    }
    animateAvatarRightMargin() {
        return tweenTo(this.state.avatarCursor.current, .25, { visibility: 'visible'})
            .then(() => tweenStaggerTo(this.state.classAvatarRightMargin.current.children, 0.08, { display: 'inline-block' }, 0.08))
            .then(() => {
                const oldContentPosition = this.state.content.current.getBoundingClientRect()

                TweenLite.set(this.state.avatar.current, { marginRight: '1.5rem' })

                const newContentPosition = this.state.content.current.getBoundingClientRect()

                TweenLite.set(this.state.content.current, { x: oldContentPosition.left - newContentPosition.left })

                return tweenTo(this.state.content.current, 1, { x: 0, ease: Power4.easeOut }, '+=.25')
            })
            .then(() => tweenTo(this.state.avatarCursor.current, .25, { visibility: 'hidden' }))
    }
    animateAvatarLarger() {
        TweenLite.set(this.state.avatar.current, { borderRadius: '100%' })

        return tweenTo(this.state.avatarLargerCursor.current, .08, { visibility: 'visible'})
            .then(() => tweenStaggerTo(this.state.classAvatarLarger.current.children, 0.08, { display: 'inline-block' }, 0.08))
            .then(() => tweenTo(this.state.avatar.current, 1, { height: '6rem', width: '6rem', ease: Power4.easeOut }, '+=.25'))
            .then(() => tweenTo(this.state.avatarLargerCursor.current, .08, { visibility: 'hidden'}))
    }
    animateResizeCursorIntoPosition() {
        TweenLite.set(this.state.cardInner.current, { display: 'none' })
        TweenLite.set(this.state.cardLarge.current, { display: 'flex' })

        return tweenTo(this.state.resizeCursor.current, 1, { opacity: 1, x: 0, y: 0, ease: Power4.easeOut })
            .then(() => tweenTo(this.state.resizeCursorCircle.current, 0, { opacity: 1 }))
    }
    animateCardResizing() {
        return Promise.all([
            tweenTo(this.state.cardLarge.current, 0, { display: 'none' }, '+=.65'),
            tweenTo(this.state.cardSmall.current, 0, { display: 'block' }, '+=.65'),
            tweenTo(this.state.card.current, 2, { width: '20rem', ease: Power4.easeOut }, '+=.25'),
        ])
            .then(() => {
                return Promise.all([
                    tweenTo(this.state.cardLarge.current, 0, { display: 'flex' }, '+=.5'),
                    tweenTo(this.state.cardSmall.current, 0, { display: 'none' }, '+=.5'),
                    tweenTo(this.state.card.current, 2, { width: '30rem', ease: Power4.easeOut }, '+=.25'),
                ])
            })
            .then(() => this.animateCardResizing())
    }

    componentDidMount() {
        setTimeout(() => {
            this.runAnimation()
        }, 1000)
    }


    render() {

        return (
                <div>
                    <div className="flex flex-col">
                        <div className="shadow-lg code-white text-sm font-mono subpixel-antialiased bg-gray-800 px-5 pb-6 pt-4 rounded-lg leading-normal overflow-hidden" style={{width: "36rem", lineHeight: "1.675"}}>
                            <div className="flex mb-4">
                                <span className="h-3 w-3 bg-red-500 rounded-full"></span>
                                <span className="ml-2 h-3 w-3 bg-orange-300 rounded-full"></span>
                                <span className="ml-2 h-3 w-3 bg-green-500 rounded-full"></span>
                            </div>
                            <div className="whitespace-no-wrap">{/**/}
                           {/**/}<div className="inline-block text-gray-600">1&nbsp;&nbsp;</div>{/**/}
                           {/**/}<div className="inline-block code-blue">&lt;</div>{/**/}
                           {/**/}<div className="inline-block code-red">div&nbsp;</div>{/**/}
                           {/**/}<div className="inline-block code-yellow">class</div>{/**/}
                           {/**/}<div className="inline-block code-blue">=&quot;</div>{/**/}
                           {/**/}<AnimationCodeTextForwardingRef ref={(ref) => this.state.classCardFlex = {current: ref}} className="inline-block code-green" text="md:flex "></AnimationCodeTextForwardingRef>{/**/}
                           {/**/}<div ref={this.state.cardFlexCursor} className="invisible inline-block border-r-2 border-yellow h-6 absolute" style={{marginTop: "-0.125rem"}}></div>{/**/}
                           {/**/}<div className="inline-block code-green">bg-white rounded-lg</div>{/**/}
                           {/**/}<AnimationCodeTextForwardingRef ref={(ref) => this.state.classCardPadding = {current: ref}} className="inline-block code-green" text=" p-6"></AnimationCodeTextForwardingRef>{/**/}
                           {/**/}<div ref={this.state.cardCursor} className="inline-block border-r-2 border-yellow h-6 absolute" style={{marginTop: "-0.125rem"}}></div>{/**/}
                           {/**/}<div className="inline-block code-blue">&quot;&gt;</div>{/**/}
                         {/**/}</div>
                            <div className="whitespace-no-wrap">{/**/}
                           {/**/}<div className="inline-block text-gray-600">2&nbsp;&nbsp;</div>{/**/}
                           {/**/}<div className="inline-block code-blue">&nbsp;&nbsp;&lt;</div>{/**/}
                           {/**/}<div className="inline-block code-red">img&nbsp;</div>{/**/}
                           {/**/}<div className="inline-block code-yellow">class</div>{/**/}
                           {/**/}<div className="inline-block code-blue">=&quot;</div>{/**/}
                           {/**/}<div className="inline-block code-green">h-16 w-16</div>{/**/}
                           {/**/}<AnimationCodeTextForwardingRef ref={(ref) => this.state.classAvatarLarger = {current: ref}} className="inline-block code-green" text=" md:h-24 md:w-24"></AnimationCodeTextForwardingRef>{/**/}
                           {/**/}<div ref={this.state.avatarLargerCursor} className="invisible inline-block border-r-2 border-yellow h-6 absolute" style={{marginTop: "-0.125rem"}}></div>{/**/}
                           {/**/}<AnimationCodeTextForwardingRef ref={(ref) => this.state.classAvatarRounded = {current: ref}} className="inline-block code-green" text=" rounded-full"></AnimationCodeTextForwardingRef>{/**/}
                           {/**/}<AnimationCodeTextForwardingRef ref={(ref) => this.state.classAvatarCenter = {current: ref}} className="inline-block code-green" text=" mx-auto"></AnimationCodeTextForwardingRef>{/**/}
                           {/**/}<AnimationCodeTextForwardingRef ref={(ref) => this.state.classAvatarMarginFix = {current: ref}} className="inline-block code-green" text=" md:mx-0"></AnimationCodeTextForwardingRef>{/**/}
                           {/**/}<AnimationCodeTextForwardingRef ref={(ref) => this.state.classAvatarRightMargin = {current: ref}} className="inline-block code-green" text=" md:mr-6"></AnimationCodeTextForwardingRef>{/**/}
                           {/**/}<div ref={this.state.avatarCursor} className="invisible inline-block border-r-2 border-yellow h-6 absolute" style={{marginTop: "-0.125rem"}}></div>{/**/}
                           {/**/}<div className="inline-block code-blue">&quot;&nbsp;</div>{/**/}
                           {/**/}<div className="inline-block code-purple">src</div>{/**/}
                           {/**/}<div className="inline-block code-blue">=&quot;</div>{/**/}
                           {/**/}<div className="inline-block code-green">avatar.jpg</div>{/**/}
                           {/**/}<div className="inline-block code-blue">&quot;&gt;</div>{/**/}
                         {/**/}</div>{/**/}
                         {/**/}<div>{/**/}
                           {/**/}<div className="inline-block text-gray-600">3&nbsp;&nbsp;</div>{/**/}
                           {/**/}<div className="inline-block code-blue">&nbsp;&nbsp;&lt;</div>{/**/}
                           {/**/}<div className="inline-block code-red">div</div>{/**/}
                           {/**/}<div ref={this.state.classContentCenter} className="inline-block code-green">{/**/}
                             {/**/}<div className="hidden">&nbsp;</div>{/**/}
                             {/**/}<div className="hidden code-yellow">c</div>{/**/}
                             {/**/}<div className="hidden code-yellow">l</div>{/**/}
                             {/**/}<div className="hidden code-yellow">a</div>{/**/}
                             {/**/}<div className="hidden code-yellow">s</div>{/**/}
                             {/**/}<div className="hidden code-yellow">s</div>{/**/}
                             {/**/}<div className="hidden code-blue">=</div>{/**/}
                             {/**/}<div className="hidden code-blue">&quot;</div>{/**/}
                             {/**/}<div className="hidden code-green">t</div>{/**/}
                             {/**/}<div className="hidden code-green">e</div>{/**/}
                             {/**/}<div className="hidden code-green">x</div>{/**/}
                             {/**/}<div className="hidden code-green">t</div>{/**/}
                             {/**/}<div className="hidden code-green">-</div>{/**/}
                             {/**/}<div className="hidden code-green">c</div>{/**/}
                             {/**/}<div className="hidden code-green">e</div>{/**/}
                             {/**/}<div className="hidden code-green">n</div>{/**/}
                             {/**/}<div className="hidden code-green">t</div>{/**/}
                             {/**/}<div className="hidden code-green">e</div>{/**/}
                             {/**/}<div className="hidden code-green">{/**/}
                               {/**/}<span>r</span>{/**/}
                               {/**/}<div ref={this.state.classContentLeftAlign} className="inline-block code-green">{/**/}
                                 {/**/}<div className="hidden">&nbsp;</div>{/**/}
                                 {/**/}<div className="hidden code-green">m</div>{/**/}
                                 {/**/}<div className="hidden code-green">d</div>{/**/}
                                 {/**/}<div className="hidden code-green">:</div>{/**/}
                                 {/**/}<div className="hidden code-green">t</div>{/**/}
                                 {/**/}<div className="hidden code-green">e</div>{/**/}
                                 {/**/}<div className="hidden code-green">x</div>{/**/}
                                 {/**/}<div className="hidden code-green">t</div>{/**/}
                                 {/**/}<div className="hidden code-green">-</div>{/**/}
                                 {/**/}<div className="hidden code-green">l</div>{/**/}
                                 {/**/}<div className="hidden code-green">e</div>{/**/}
                                 {/**/}<div className="hidden code-green">f</div>{/**/}
                                 {/**/}<div className="hidden code-green">t</div>{/**/}
                               {/**/}</div>{/**/}
                               {/**/}<div ref={this.state.contentLeftAlignCursor} className="invisible inline-block border-r-2 border-yellow h-6 absolute" style={{marginTop: "-0.125rem"}}></div>{/**/}
                             {/**/}</div>{/**/}
                             {/**/}<div className="hidden code-blue">&quot;</div>{/**/}
                           {/**/}</div>{/**/}
                           {/**/}<div ref={this.state.contentCursor} className="invisible inline-block border-r-2 border-yellow h-6 absolute" style={{marginTop: "-0.125rem"}}></div>{/**/}
                           {/**/}<div className="inline-block code-blue">&gt;</div>{/**/}
                         {/**/}</div>{/**/}
                         {/**/}<div>{/**/}
                           {/**/}<div className="inline-block text-gray-600">4&nbsp;&nbsp;</div>{/**/}
                           {/**/}<div className="inline-block code-blue">&nbsp;&nbsp;&nbsp;&nbsp;&lt;</div>{/**/}
                           {/**/}<div className="inline-block code-red">h2</div>{/**/}
                           {/**/}<AnimationCodeTextForwardingRef ref={(ref) => this.state.classNameSize = {current: ref}} className="inline-block code-green" text={[
                                { class: 'code-yellow', text: ' class' },
                                { class: 'code-blue', text: '="' },
                                'text-lg',
                                { class: 'code-blue', text: '"' }
                              ]}></AnimationCodeTextForwardingRef>{/**/}
                           {/**/}<div ref={this.state.nameCursor} className="invisible inline-block border-r-2 border-yellow h-6 absolute" style={{marginTop: "-0.125rem"}}></div>{/**/}
                           {/**/}<div className="inline-block code-blue">&gt;</div>{/**/}
                           {/**/}<div className="inline-block code-white">Erin Lindford</div>{/**/}
                           {/**/}<div className="inline-block code-blue">&lt;/</div>{/**/}
                           {/**/}<div className="inline-block code-red">h2</div>{/**/}
                           {/**/}<div className="inline-block code-blue">&gt;</div>{/**/}
                         {/**/}</div>{/**/}
                         {/**/}<div>{/**/}
                           {/**/}<div className="inline-block text-gray-600">5&nbsp;&nbsp;</div>{/**/}
                           {/**/}<div className="inline-block code-blue">&nbsp;&nbsp;&nbsp;&nbsp;&lt;</div>{/**/}
                           {/**/}<div className="inline-block code-red">div</div>{/**/}
                           {/**/}<div ref={this.state.classRoleColor} className="inline-block code-green">{/**/}
                             {/**/}<div className="hidden">&nbsp;</div>{/**/}
                             {/**/}<div className="hidden code-yellow">c</div>{/**/}
                             {/**/}<div className="hidden code-yellow">l</div>{/**/}
                             {/**/}<div className="hidden code-yellow">a</div>{/**/}
                             {/**/}<div className="hidden code-yellow">s</div>{/**/}
                             {/**/}<div className="hidden code-yellow">s</div>{/**/}
                             {/**/}<div className="hidden code-blue">=</div>{/**/}
                             {/**/}<div className="hidden code-blue">&quot;</div>{/**/}
                             {/**/}<div className="hidden code-green">t</div>{/**/}
                             {/**/}<div className="hidden code-green">e</div>{/**/}
                             {/**/}<div className="hidden code-green">x</div>{/**/}
                             {/**/}<div className="hidden code-green">t</div>{/**/}
                             {/**/}<div className="hidden code-green">-</div>{/**/}
                             {/**/}<div className="hidden code-green">p</div>{/**/}
                             {/**/}<div className="hidden code-green">u</div>{/**/}
                             {/**/}<div className="hidden code-green">r</div>{/**/}
                             {/**/}<div className="hidden code-green">p</div>{/**/}
                             {/**/}<div className="hidden code-green">l</div>{/**/}
                             {/**/}<div className="hidden code-green">e</div>{/**/}
                             {/**/}<div className="hidden code-green">-</div>{/**/}
                             {/**/}<div className="hidden code-green">5</div>{/**/}
                             {/**/}<div className="hidden code-green">0</div>{/**/}
                             {/**/}<div className="hidden code-green">0</div>{/**/}
                             {/**/}<div className="hidden code-blue">&quot;</div>{/**/}
                           {/**/}</div>{/**/}
                           {/**/}<div ref={this.state.roleCursor} className="invisible inline-block border-r-2 border-yellow h-6 absolute" style={{marginTop: "-0.125rem"}}></div>{/**/}
                           {/**/}<div className="inline-block code-blue">&gt;</div>{/**/}
                           {/**/}<div className="inline-block code-white">Customer Support</div>{/**/}
                           {/**/}<div className="inline-block code-blue">&lt;/</div>{/**/}
                           {/**/}<div className="inline-block code-red">div</div>{/**/}
                           {/**/}<div className="inline-block code-blue">&gt;</div>{/**/}
                         {/**/}</div>{/**/}
                         {/**/}<div className="whitespace-no-wrap">{/**/}
                           {/**/}<div className="inline-block text-gray-600">6&nbsp;&nbsp;</div>{/**/}
                           {/**/}<div className="inline-block code-blue">&nbsp;&nbsp;&nbsp;&nbsp;&lt;</div>{/**/}
                           {/**/}<div className="inline-block code-red">div</div>{/**/}
                           {/**/}<div ref={this.state.classContactColor1} className="inline-block code-green">{/**/}
                             {/**/}<div className="hidden">&nbsp;</div>{/**/}
                             {/**/}<div className="hidden code-yellow">c</div>{/**/}
                             {/**/}<div className="hidden code-yellow">l</div>{/**/}
                             {/**/}<div className="hidden code-yellow">a</div>{/**/}
                             {/**/}<div className="hidden code-yellow">s</div>{/**/}
                             {/**/}<div className="hidden code-yellow">s</div>{/**/}
                             {/**/}<div className="hidden code-blue">=</div>{/**/}
                             {/**/}<div className="hidden code-blue">&quot;</div>{/**/}
                             {/**/}<div className="hidden code-green">t</div>{/**/}
                             {/**/}<div className="hidden code-green">e</div>{/**/}
                             {/**/}<div className="hidden code-green">x</div>{/**/}
                             {/**/}<div className="hidden code-green">t</div>{/**/}
                             {/**/}<div className="hidden code-green">-</div>{/**/}
                             {/**/}<div className="hidden code-green">g</div>{/**/}
                             {/**/}<div className="hidden code-green">r</div>{/**/}
                             {/**/}<div className="hidden code-green">a</div>{/**/}
                             {/**/}<div className="hidden code-green">y</div>{/**/}
                             {/**/}<div className="hidden code-green">-</div>{/**/}
                             {/**/}<div className="hidden code-green">6</div>{/**/}
                             {/**/}<div className="hidden code-green">0</div>{/**/}
                             {/**/}<div className="hidden code-green">0</div>{/**/}
                             {/**/}<div className="hidden code-blue">&quot;</div>{/**/}
                           {/**/}</div>{/**/}
                           {/**/}<div ref={this.state.contactCursor1} className="invisible inline-block border-r-2 border-yellow h-6 absolute" style={{marginTop: "-0.125rem"}}></div>{/**/}
                           {/**/}<div className="inline-block code-blue">&gt;</div>{/**/}
                           {/**/}<div className="inline-block code-white">erinlindford@example.com</div>{/**/}
                           {/**/}<div className="inline-block code-blue">&lt;/</div>{/**/}
                           {/**/}<div className="inline-block code-red">div</div>{/**/}
                           {/**/}<div className="inline-block code-blue">&gt;</div>{/**/}
                         {/**/}</div>{/**/}
                         {/**/}<div className="whitespace-no-wrap">{/**/}
                           {/**/}<div className="inline-block text-gray-600">7&nbsp;&nbsp;</div>{/**/}
                           {/**/}<div className="inline-block code-blue">&nbsp;&nbsp;&nbsp;&nbsp;&lt;</div>{/**/}
                           {/**/}<div className="inline-block code-red">div</div>{/**/}
                           {/**/}<div ref={this.state.classContactColor2} className="inline-block code-green">{/**/}
                             {/**/}<div className="hidden">&nbsp;</div>{/**/}
                             {/**/}<div className="hidden code-yellow">c</div>{/**/}
                             {/**/}<div className="hidden code-yellow">l</div>{/**/}
                             {/**/}<div className="hidden code-yellow">a</div>{/**/}
                             {/**/}<div className="hidden code-yellow">s</div>{/**/}
                             {/**/}<div className="hidden code-yellow">s</div>{/**/}
                             {/**/}<div className="hidden code-blue">=</div>{/**/}
                             {/**/}<div className="hidden code-blue">&quot;</div>{/**/}
                             {/**/}<div className="hidden code-green">t</div>{/**/}
                             {/**/}<div className="hidden code-green">e</div>{/**/}
                             {/**/}<div className="hidden code-green">x</div>{/**/}
                             {/**/}<div className="hidden code-green">t</div>{/**/}
                             {/**/}<div className="hidden code-green">-</div>{/**/}
                             {/**/}<div className="hidden code-green">g</div>{/**/}
                             {/**/}<div className="hidden code-green">r</div>{/**/}
                             {/**/}<div className="hidden code-green">a</div>{/**/}
                             {/**/}<div className="hidden code-green">y</div>{/**/}
                             {/**/}<div className="hidden code-green">-</div>{/**/}
                             {/**/}<div className="hidden code-green">6</div>{/**/}
                             {/**/}<div className="hidden code-green">0</div>{/**/}
                             {/**/}<div className="hidden code-green">0</div>{/**/}
                             {/**/}<div className="hidden code-blue">&quot;</div>{/**/}
                           {/**/}</div>{/**/}
                           {/**/}<div ref={this.state.contactCursor2} className="invisible inline-block border-r-2 border-yellow h-6 absolute" style={{marginTop: "-0.125rem"}}></div>{/**/}
                           {/**/}<div className="inline-block code-blue">&gt;</div>{/**/}
                           {/**/}<div className="inline-block code-white">(555) 765-4321</div>{/**/}
                           {/**/}<div className="inline-block code-blue">&lt;/</div>{/**/}
                           {/**/}<div className="inline-block code-red">div</div>{/**/}
                           {/**/}<div className="inline-block code-blue">&gt;</div>{/**/}
                         {/**/}</div>{/**/}
                         {/**/}<div>{/**/}
                           {/**/}<div className="inline-block text-gray-600">8&nbsp;&nbsp;</div>{/**/}
                           {/**/}<div className="inline-block code-blue">&nbsp;&nbsp;&lt;/</div>{/**/}
                           {/**/}<div className="inline-block code-red">div</div>{/**/}
                           {/**/}<div className="inline-block code-blue">&gt;</div>{/**/}
                         {/**/}</div>{/**/}
                         {/**/}<div>{/**/}
                           {/**/}<div className="inline-block text-gray-600">9&nbsp;&nbsp;</div>{/**/}
                           {/**/}<div className="inline-block code-blue">&lt;/</div>{/**/}
                           {/**/}<div className="inline-block code-red">div</div>{/**/}
                           {/**/}<div className="inline-block code-blue">&gt;</div>{/**/}
                         {/**/}</div>{/**/}
                       {/**/}</div>
                    <div ref={this.state.card} className="shadow-lg leading-normal self-end bg-white w-64 rounded-lg -mt-16 relative" style={{width: "20rem"}}>
                        <div ref={this.state.cardLarge} className="hidden p-6">
                            <img ref={this.state.avatar} className="h-24 w-24 block mr-6 rounded-full" src="https://randomuser.me/api/portraits/women/17.jpg" alt=""/>
                                <div ref={this.state.content} className="text-gray-800 text-left">
                                    <h2 ref={this.state.name} className="text-xl font-normal text-gray-800">
                                        <div className="inline-block relative">Erin Lindford</div>
                                    </h2>
                                    <div ref={this.state.role}>
                                        <div className="inline-block relative text-purple-500">Customer Support</div>
                                    </div>
                                    <div ref={this.state.email}>
                                        <div className="inline-block relative text-gray-600">erinlindford@example.com</div>
                                    </div>
                                    <div ref={this.state.phone}>
                                        <div className="inline-block relative text-gray-600">(555) 765-4321</div>
                                    </div>
                                </div>
                        </div>
                        <div ref={this.state.cardSmall} className="hidden p-6">
                            <img ref={this.state.avatar} className="h-16 w-16 block mb-4 mx-auto rounded-full" src="https://randomuser.me/api/portraits/women/17.jpg" alt=""/>
                                <div ref={this.state.content} className="text-gray-800 text-center">
                                    <h2 ref={this.state.name} className="text-xl font-normal text-gray-800">
                                        <div className="inline-block relative">Erin Lindford</div>
                                    </h2>
                                    <div ref={this.state.role}>
                                        <div className="inline-block relative text-purple-500">Customer Support</div>
                                    </div>
                                    <div ref={this.state.email}>
                                        <div className="inline-block relative text-gray-600">erinlindford@example.com</div>
                                    </div>
                                    <div ref={this.state.phone}>
                                        <div className="inline-block relative text-gray-600">(555) 765-4321</div>
                                    </div>
                                </div>
                        </div>
                        <div ref={this.state.cardInner}>
                            <img ref={this.state.avatar} className="h-16 w-16 block mb-4" src="https://randomuser.me/api/portraits/women/17.jpg" alt=""/>
                                <div ref={this.state.content} className="text-gray-800">
                                    <h2 ref={this.state.name} className="text-base font-normal text-gray-800">
                                        <div className="inline-block relative">Erin Lindford</div>
                                    </h2>
                                    <div ref={this.state.role}>
                                        <div className="inline-block relative">Customer Support</div>
                                    </div>
                                    <div ref={this.state.email}>
                                        <div className="inline-block relative">erinlindford@example.com</div>
                                    </div>
                                    <div ref={this.state.phone}>
                                        <div className="inline-block relative">(555) 765-4321</div>
                                    </div>
                                </div>
                        </div>
                        <div className="absolute flex inset-y-0 left-0">
                            <div ref={this.state.resizeCursor} className="mt-16 h-6 w-6 -ml-3 opacity-0 relative" style={{transform: "translateX(150px) translateY(150px)"}}>
                                <svg ref={this.state.resizeCursorCircle} className="absolute inset-0 h-6 w-6 text-black opacity-50" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                    <circle cx="50" cy="50" r="40" stroke="rgba(255, 255, 255, 0.5)" strokeWidth="8" fill="rgba(0, 0, 0, 0.5)" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default WorkflowAnimation;