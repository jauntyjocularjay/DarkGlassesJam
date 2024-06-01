import {
    // // VanillaJS Components
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



class Choice extends DivBtn {
    constructor(textContent='', classList=[], id=null, moodInt=8, enabled=true, light=true){
        if(moodInt > 8 || moodInt < 0){
            throw new RangeError('Mood must be an integer between 0 and 8 inclusive.')
        }

        // [css.class.mood[moodInt]].forEach(clss => classList.push(clss))

        if(enabled && light){
            classList.push(css.class.choice.enabledLight)
        } else if(enabled && dark){
            classList.push(css.class.choice.enabledDark)
        } else if(!enabled && light){
            classList.push(css.class.choice.disabledLight)
        } else if(!enabled && dark){
            classList.push(css.class.choice.disabledDark)
        } else {
            throw new TypeError(`Invalid Boolean; {enabled: ${enabled}}, {light: ${light}} must both be boolean values`)
        }

        super(textContent, classList, id)
    }
}

export {
    Choice,
}