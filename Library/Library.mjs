import {
    // Constants
    display,
    flex,
    event,
    unit,
    tag,

    // Base class
    Selection,
    StyleSheet,
    Listener,
    ListenerOnLoad,
    // FlexBoxClass,

    // Classables
    // // Containers
    Img,
    Div,
    DivBtn,
    FlexBox,
    Figure,
    Form,
    Label,
    // // Input
    Button,
    Input,
    TextArea,
    Select,
    Option,
    // // Format elements
    Br,
    //  // External Resource Links
    Link,
    Style,

    // Text Elements
    // // Headers
    H1,
    H2,
    H3,
    H4,
    H5,
    H6,
    // // Body Text
    P,
    Figcaption,
    A,
    Strong,
    Abbr,
    Blockquote,
    Sub,
    Sup,
    Span,
    Text,
    Code,
    Pre,

    // Functions
    getStylesheetByFileName,
    addAdoptedStyleSheet,

    // JSONCSS
    JSONCSS,
    UnsupportedJSONCSSError,
    PercentageOutOfRangeError
} from '../vjsc/vanilla.mjs'
import {
    css,
} from '../DarkGlasses.mjs'


document.querySelector('html').classList.add('mood9')

class DivSample {
    constructor(classList=[], id=''){
        this.div = new Div(classList, id)
        this.element = this.div.element
        this.p = new P()
        this.text = new Span('Sample text!!!1!!!ONE!!! ')
        this.p.element.appendChild(this.text.element)
        this.element.appendChild(this.p.element)
        document.querySelector('body').appendChild(this.element)
    }
}

const bools = [true, false]

class Choice {
    constructor(moodInt=9, enabled=true){
        const choiceClasses = []
        let span

        if(moodInt === 0){
            enabled 
                ? choiceClasses.push(css.class.choice.enabledDark)
                : choiceClasses.push(css.class.choice.disabledDark)
        } else if (moodInt === 1){
            enabled 
                ? choiceClasses.push(css.class.choice.enabledDark)
                : choiceClasses.push(css.class.choice.disabledDark)
        } else if(moodInt === 2){
            enabled 
                ? choiceClasses.push(css.class.choice.enabledDark)
                : choiceClasses.push(css.class.choice.disabledDark)
        } else if(moodInt === 3){
            enabled 
                ? choiceClasses.push(css.class.choice.enabledDark)
                : choiceClasses.push(css.class.choice.disabledDark)
        } else if(moodInt === 4){
            enabled 
                ? choiceClasses.push(css.class.choice.enabledDark)
                : choiceClasses.push(css.class.choice.disabledDark)
        } else if(moodInt === 5){
            enabled 
                ? choiceClasses.push(css.class.choice.enabledDark)
                : choiceClasses.push(css.class.choice.disabledDark)
        } else if(moodInt === 6){
            enabled 
                ? choiceClasses.push(css.class.choice.enabledLight)
                : choiceClasses.push(css.class.choice.disabledLight)
        } else if(moodInt === 7){
            enabled 
                ? choiceClasses.push(css.class.choice.enabledLight)
                : choiceClasses.push(css.class.choice.disabledLight)
        } else if(moodInt === 8){
            enabled 
                ? choiceClasses.push(css.class.choice.enabledLight)
                : choiceClasses.push(css.class.choice.disabledLight)
        } else {
            throw new RangeError(`moodInt: ${moodInt} must be an integer between 0 and 9`)
        }

        span = new Span('choice ',choiceClasses)
        this.element = span.element
    }
}

const elements = {}

const CardsByMood = [
    [css.class.mood0, css.class.embossedCard],
    [css.class.mood1, css.class.embossedCard],
    [css.class.mood2, css.class.embossedCard],
    [css.class.mood3, css.class.embossedCard],
    [css.class.mood4, css.class.embossedCard],
    [css.class.mood5, css.class.embossedCard],
    [css.class.mood6, css.class.embossedCard],
    [css.class.mood7, css.class.embossedCard],
    [css.class.mood8, css.class.embossedCard],
]

let i = 0

moodCards.reverse().forEach(card => {
    elements[`mood${i}`] = new DivSample(card)
    const enabledChoice = new Choice(i, true)
    const disabledChoice = new Choice(i, false)
    elements[`mood${i}`].element.querySelector(tag.p).appendChild(enabledChoice.element)
    elements[`mood${i}`].element.querySelector(tag.p).appendChild(disabledChoice.element)
    i++
})







