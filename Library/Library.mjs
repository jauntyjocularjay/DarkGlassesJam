import {
    // Constants
    display,
    flex,
    event,
    unit,

    // Base Classes
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

const mood9 = new DivSample([css.classes.mood9, css.classes.card], 'mood9')
const mood8 = new DivSample([css.classes.mood8, css.classes.card], 'mood8')
const mood7 = new DivSample([css.classes.mood7, css.classes.card], 'mood7')
const mood6 = new DivSample([css.classes.mood6, css.classes.card], 'mood6')
const mood5 = new DivSample([css.classes.mood5, css.classes.card], 'mood5')
const mood4 = new DivSample([css.classes.mood4, css.classes.card], 'mood4')
const mood3 = new DivSample([css.classes.mood3, css.classes.card], 'mood3')
const mood2 = new DivSample([css.classes.mood2, css.classes.card], 'mood2')
const mood1 = new DivSample([css.classes.mood1, css.classes.card], 'mood1')
const mood0 = new DivSample([css.classes.mood0, css.classes.card], 'mood0')






















