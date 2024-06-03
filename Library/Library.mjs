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
    PSpan,
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
    Dialogue,
} from '../UserInterface.mjs'



let moodInt = 1;

let html = document.querySelector(tag.html)
html.classList.add(css.class.mood[moodInt])

const wrapper = document.querySelector('#wrapper')
let header = new H2('Day 1')
let slideImg = new SlideImg('', 'a broken image link',[css.class.slide.imgPlaceholder])
let caption = new Figcaption()
let choiceArray = [
    new Choice("Drink", [], 'drink', true, false),
    new Choice("Pour", [], 'pour', false, true)
]
let chapterSlide = new Slide([], 'demo-slide', header, slideImg, caption)

wrapper.appendChild(chapterSlide.element)


const dialogueObjArray = [
    {
        Thomas: 'Hello',
        Kelly: 'Hello, how are you?',
    },
    {
        Thomas: `I'm doing good`,
        Kelly: 'No, Superman does good. You are doing well.',
    },
    {
        Thomas: 'Thanks, E.B. White.'
    }]
const dialogue = new Dialogue(chapterSlide, dialogueObjArray, choiceArray)

// const dialogue = {
//     counter: 0,
//     span: [
//         new Span('Sam: Hello',['dialogue']),
//         new Span('Kelly: Hello, how are you?'),
//         new Span(`Sam: I'm doing good`),
//         new Span('Kelly: No, Superman does good. You are doing well.'),
//         new Span('Sam: Thanks, E.B. White.')
//     ]
// }

// function paintDialogue(caption) {
//     if(dialogue.counter < dialogue.span.length){
//         let p = new P()
//         p.element.appendChild(dialogue.span[dialogue.counter].element, ['dialogue'])
//         caption.element.appendChild(p.element)
//         dialogue.counter++
//     }

// }
// chapterSlide.element.addEventListener('click', () => {paintDialogue(caption)})