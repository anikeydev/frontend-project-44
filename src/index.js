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

    askQuestion(value) {
        console.log(`Question: ${value}`)
    }

}

export { game }