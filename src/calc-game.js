import { cli } from './cli.js'
import { game } from './index.js'
import { randomNum, randomOper } from './utils.js'

// REalize logic in Bin File
// realize false answer
// realize 3 games
// realize win
// realuze undefind answers


const calcGame = {
    rules() {
        console.log(`What is the result of the expression?`)
    },

    generateQuestion() {
        return `${randomNum()} ${randomOper()} ${randomNum()}`
    },

    ask() {
        const question = this.generateQuestion()
        game.askQuestion(question)
        const answer = this.answer(question)
        const userAnswer = eval(cli.getAnswer())
        if (this.check(answer, userAnswer)) {
            game.trueAnswerText()
        } else {
            // REALIZE
            console.log('LOSE');
        }
        return question
    },

    answer(question) {
        return eval(question)
    },

    check(answer, userAnswer) {
        if (answer === userAnswer) {
            return true
        } else {
            return false
        }
    }
}

export { calcGame }