import {
    // Constants
    display,
    flex,
    event,
    unit,
    tag,

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
} from './vjsc/vanilla.mjs'
import {
    Choice,
    Slide,
    SlideImg,
    SlideCaption,
} from './Library/components/Slide.mjs'

const css = {
    class: {
        mood: [
            'mood0',
            'mood1',
            'mood2',
            'mood3',
            'mood4',
            'mood5',
            'mood6',
            'mood7',
            'mood8'
        ],
        embossedSlide: 'embossedSlide',
        btn: 'btn',
        choice: {
            enabledLight: 'enabledLight',
            enabledDark: 'enabledDark',
            disabledLight: 'disabledLight',
            disabledDark: 'disabledDark',
        },
        slide: {
            container: 'slide',
            img: 'slideImg',
            imgPlaceholder: 'slideImgPlaceholder',
            caption: 'slideCaption',
            choice: 'slideChoice',
        },
        dialogue: 'dialogue',
    },
    id: {},
    keyframe: { // CSS Animations
        dialogue: ''
    }
}



export {
    // Constants
    display,
    flex,
    event,
    unit,
    tag,

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

    css,
    // CardClassesByMood,
    Slide,
    SlideImg,
    SlideCaption,
    Choice,
}
