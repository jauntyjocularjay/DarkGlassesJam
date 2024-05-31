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

const CardByMood = [
    [css.class.mood0, css.class.embossedCard],
    [css.class.mood1, css.class.embossedCard],
    [css.class.mood2, css.class.embossedCard],
    [css.class.mood3, css.class.embossedCard],
    [css.class.mood4, css.class.embossedCard],
    [css.class.mood5, css.class.embossedCard],
    [css.class.mood6, css.class.embossedCard],
    [css.class.mood7, css.class.embossedCard],
    [css.class.mood8, css.class.embossedCard],
]

const css = {
    class: {
        mood: [
            'mood00',
            'mood01',
            'mood02',
            'mood03',
            'mood04',
            'mood05',
            'mood06',
            'mood07',
            'mood08'
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


