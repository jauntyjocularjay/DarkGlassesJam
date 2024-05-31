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
} from './vjsc/vanilla.mjs'



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
        embossedCard: 'embossedCard',
        choice: {
            enabledDark: 'enabledChoiceDark',
            enabledLight: 'enabledChoiceLight',
            disabledDark: 'disabledChoiceDark',
            disabledLight: 'disabledChoiceLight',
        }
    },
    id: {

    },
    keyframe: { // CSS Animations

    }
}

const CardClassesByMood = [
    [css.class.mood[0], css.class.embossedCard],
    [css.class.mood[1], css.class.embossedCard],
    [css.class.mood[2], css.class.embossedCard],
    [css.class.mood[3], css.class.embossedCard],
    [css.class.mood[4], css.class.embossedCard],
    [css.class.mood[5], css.class.embossedCard],
    [css.class.mood[6], css.class.embossedCard],
    [css.class.mood[7], css.class.embossedCard],
    [css.class.mood[8], css.class.embossedCard],
]


export {
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

    css,
    CardClassesByMood,
}
