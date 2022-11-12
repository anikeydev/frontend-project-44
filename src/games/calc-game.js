import { cli } from '../cli.js'
import { game } from '../index.js'
import { randomNum, randomOper } from '../utils.js'

const calcGame = (countRound) => {
    let isGame = true
    let result = 0
    const ball = 1

    game.welcomeInGame()
    const name = cli.getName()
    game.greetingByName(name)

    console.log(`What is the result of the expression?`)

    while(isGame) {
        ask()
    }

    function generateQuestion() {
        return `${randomNum()} ${randomOper()} ${randomNum()}`
    }

    function isCheck(answer, userAnswer) {
        if (answer === userAnswer) {
            return true
        } else {
            return false
        }
    }

    function ask() {
        if (result === countRound) {
            game.winText(name)
            isGame = false
            return
        }
        const question = generateQuestion()
        game.askQuestion(question)
        const answer = eval(question).toString()
        const userAnswer = cli.getAnswer().toString()
        if (isCheck(answer, userAnswer) === true) {
            game.trueAnswerText()
            result += ball
        } else if (isCheck(answer, userAnswer) === false) {
            game.loseAnswerText(name, answer, userAnswer)
            isGame = false
        } else {
            game.dontKnowAnswer(userAnswer, name)
            isGame = false
        }
    }
}

export { calcGame }