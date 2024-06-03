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

    // // DarkGlasses
    css,
} from '../../UserInterface.mjs'



class Slide extends Figure {
    constructor(classlist=[], id=null, slideHeader=null, slideImg=null, slideCaption=null, choices=[]){
        [css.class.slide.container].forEach(clss => classlist.push(clss))
        super(classlist, id, slideHeader, slideImg, slideCaption)
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

class Dialogue {
    constructor(container=new Slide(), dialogueObjArray=[{character1: '', character2: ''}], classList=[], id=null){
        console.log('dialogueObj:', dialogueObjArray)
        this.pspanArray = []
        this.listener = null
        const caption = container.element.querySelector('caption')
    
        dialogueObjArray.forEach(dialogueObj => {
            for(const [key, value] of Object.entries(dialogueObj)){
                this.pspanArray.push(new PSpan(value, [key]))
            }
        })

        const listener = new Listener(event.element.click, () => {
            this.pspanArray.forEach(pspan => {
                console.log('const caption', caption)
                caption.appendChild(pspan.element)
            })
        })

        container.pushEventListenerObj(listener)
    }


}

class Choice extends DivBtn {
    constructor(textContent='', classList=[], id=null, enabled=true, light=true){

        if(enabled && light){
            classList.push(css.class.choice.enabledLight)
        } else if(enabled && !light){
            classList.push(css.class.choice.enabledDark)
        } else if(!enabled && light){
            classList.push(css.class.choice.disabledLight)
        } else if(!enabled && !light){
            classList.push(css.class.choice.disabledDark)
        } else {
            throw new TypeError(`Invalid Boolean; {enabled: ${enabled}}, {light: ${light}} must both be boolean values`)
        }

        super(textContent, classList, id)
    }
}



export {
    Slide,
    SlideImg,
    SlideCaption,
    Dialogue,
    Choice,
}