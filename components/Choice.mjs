

class Choice {
    constructor(moodInt=9, enabled=true){
        
        let span

        


        if(moodInt === 0){
            enabled 
                ? choiceClasses.push(css.class.choice.enabledDark)
                : choiceClasses.push(css.class.choice.disabledDark)
        } else if (moodInt === 1){
            enabled 
                ? choiceClasses.push(css.class.choice.enabledDark)
                : choiceClasses.push(css.class.choice.disabledDark)
        } else if(moodInt === 2){
            enabled 
                ? choiceClasses.push(css.class.choice.enabledDark)
                : choiceClasses.push(css.class.choice.disabledDark)
        } else if(moodInt === 3){
            enabled 
                ? choiceClasses.push(css.class.choice.enabledDark)
                : choiceClasses.push(css.class.choice.disabledDark)
        } else if(moodInt === 4){
            enabled 
                ? choiceClasses.push(css.class.choice.enabledDark)
                : choiceClasses.push(css.class.choice.disabledDark)
        } else if(moodInt === 5){
            enabled 
                ? choiceClasses.push(css.class.choice.enabledDark)
                : choiceClasses.push(css.class.choice.disabledDark)
        } else if(moodInt === 6){
            enabled 
                ? choiceClasses.push(css.class.choice.enabledLight)
                : choiceClasses.push(css.class.choice.disabledLight)
        } else if(moodInt === 7){
            enabled 
                ? choiceClasses.push(css.class.choice.enabledLight)
                : choiceClasses.push(css.class.choice.disabledLight)
        } else if(moodInt === 8){
            enabled 
                ? choiceClasses.push(css.class.choice.enabledLight)
                : choiceClasses.push(css.class.choice.disabledLight)
        } else {
            throw new RangeError(`moodInt: ${moodInt} must be an integer between 0 and 9`)
        }

        span = new Span('choice ', choiceClasses)
        this.element = span.element
    }
}

export { Choice }