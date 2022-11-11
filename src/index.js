const game = {

    welcomeInGame() {
        console.log('Welcome to the Brain Games!')
    },
    
    greetingByName(name) {
        console.log(`Hello, ${name}`)
    },

    winText(name) {
        console.log(`Congratulations, ${name}!`)
    },

    trueAnswerText() {
        console.log('Correct!')
    },

    loseAnswerText(name, answer, userAnswer) {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${name}!`)
    },

    askQuestion(value) {
        console.log(`Question: ${value}`)
    },

    dontKnowAnswer(userAnswer, name) {
        console.log(`I don know is "${userAnswer}"\nLet's try again, ${name}!`)
    }

}

export { game }