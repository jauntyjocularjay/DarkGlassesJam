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
    PercentageOutOfRangeError,

    // Dark Glasses
    css,
    CardClassesByMood,
    Choice,
    Slide,
    SlideImg,
    SlideCaption,
} from '../UserInterface.mjs'



const wrapper = document.querySelector('#wrapper')
let slideImg = new SlideImg('', '')
let caption = new Figcaption('caption for the image')
let choices = [
    new Choice("Drink", [], 'drink', 6, false),
    new Choice("Pour", [], 'pour', 7, true)
]
let chapterSlide = new Slide([], 'demo-slide', slideImg, caption, choices)

wrapper.appendChild(chapterSlide.element)





