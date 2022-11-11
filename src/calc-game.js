import { cli } from './cli.js'
import { game } from './index.js'
import { randomNum, randomOper } from './utils.js'

const calcGame = (countRound) => {
    let isGame = true
    let result = 0

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
        if (typeof userAnswer === 'string') {
            return 'string'
        }
        if (answer === eval(userAnswer)) {
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
        const answer = eval(question)
        const userAnswer = cli.getAnswer()
        if (isCheck(answer, userAnswer) === true) {
            game.trueAnswerText()
            result += 1
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