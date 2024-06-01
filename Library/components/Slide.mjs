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
    PercentageOutOfRangeError,

    // // DarkGlasses
    css,
    CardClassesByMood,
} from '../../UserInterface.mjs'



class Slide extends Figure {
    constructor(classlist=[], id=null, slideImg=null, slideCaption=null, choices=[]){
        [css.class.slide.container, css.class.embossedCard].forEach(clss => classlist.push(clss))
        super(classlist, id, slideImg, slideCaption)
        choices.forEach(choice => this.element.appendChild(choice.element))
    }
}

class SlideImg extends Img {
    constructor(path='', alt='', classList=[], id=''){
        classList.push(css.class.slide.img)
        super(path, alt, classList, id)
    }
}

class SlideCaption extends Figcaption {
    constructor(textContent='', classList=[], id=''){
        classList.push(css.class.slide.caption)
        super(textContent, classList, id)
    }
}


export {
    Slide,
    SlideImg,
    SlideCaption,
}