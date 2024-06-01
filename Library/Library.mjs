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
    // CardClassesByMood,
    Choice,
    Slide,
    SlideImg,
    SlideCaption,
} from '../UserInterface.mjs'



let moodInt = 8;

let html = document.querySelector(tag.html)
html.classList.add(css.class.mood[moodInt])

const wrapper = document.querySelector('#wrapper')
let header = new H2('Header')
let slideImg = new SlideImg('', 'a broken image link',[css.class.slide.imgPlaceholder])
let caption = new Figcaption('caption for the image')
let choices = [
    new Choice("Drink", [], 'drink', true, false),
    new Choice("Pour", [], 'pour', false, true)
]
let chapterSlide = new Slide([], 'demo-slide', header, slideImg, caption, choices)

wrapper.appendChild(chapterSlide.element)


