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
} from '../UserInterface.mjs'

class Choice {
    constructor(moodInt=9, enabled=true){
        
        let span

        if( moodInt > 0 || moodInt < 0 ) {
            throw new RangeError(`moodInt: ${moodInt} must be an integer between 0 and 9`)
        }

        choiceClasses.push(mood[moodInt])

        enabled 
            ? choiceClasses.push(css.class.choice.enabledDark)
            : choiceClasses.push(css.class.choice.disabledDark)


        span = new Span('choice ', choiceClasses)
        this.element = span.element
    }
}

class Slide {
    constructor(){
        this.figure = new Figure()
    }
}

export {
    Choice,
    Slide,
}