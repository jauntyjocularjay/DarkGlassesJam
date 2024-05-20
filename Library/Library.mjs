import {
    // Constants
    display,
    flex,
    event,
    unit,

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
    css
} from '../DarkGlasses.mjs'


document.querySelector('html').classList.add('mood9')

class DivSample {
    constructor(classList=[], id=''){
        this.div = new Div(classList, id)
        this.element = this.div.element
        this.p = new P()
        this.text = new Span('Sample text!!!1!!!ONE!!!')
        this.p.element.appendChild(this.text.element)
        this.element.appendChild(this.p.element)
        document.querySelector('body').appendChild(this.element)
    }
}

const elements = {}

const moodCards = [
    [css.class.mood0, css.class.card],
    [css.class.mood1, css.class.card],
    [css.class.mood2, css.class.card],
    [css.class.mood3, css.class.card],
    [css.class.mood4, css.class.card],
    [css.class.mood5, css.class.card],
    [css.class.mood6, css.class.card],
    [css.class.mood7, css.class.card],
    [css.class.mood8, css.class.card],
    [css.class.mood9, css.class.card],
]

let i = 0

moodCards.reverse().forEach(card => {
    elements[`mood${i}`] = new DivSample(card)
    i++
})







