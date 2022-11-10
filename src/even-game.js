import readlineSync from 'readline-sync'
import { randomNum } from './utils.js'

const evenGame = (name) => {
    const countQuestions = 3
    
    let result = 0
    let isLose = false

    console.log('Answer "yes" if the number is even, otherwise answer "no"')

    const ask = () => {
        let random = randomNum()
        console.log(`Question: ${random}`)
        const answer = readlineSync.question('Your answer: ')

        if (answer === 'yes') {
            if (random % 2 === 0) {
                console.log('Correct!')
                result += 1
                if (result === countQuestions) {
                    console.log(`Congratulations, ${name}`)
                    isLose = true
                }
            } else {
                console.log(`"${answer}" is wrong answer ;(. Correct answer was "no"\nLet's try again, ${name}!`)
                isLose = true
            }
        } else if (answer === 'no') {
            if (random % 2 !== 0) {
                console.log('Correct!')
                result += 1
                if (result === countQuestions) {
                    console.log(`Congratulations, ${name}`)
                    isLose = true
                }
            } else {
                console.log(`"${answer}" is wrong answer ;(. Correct answer was "yes"\nLet's try again, ${name}!`)
                isLose = true          
            }
        } else {
            console.log(`I don know is "${answer}"\nLet's try again, ${name}!`)
            isLose = true
        }

    }

    while (isLose === false) {
        ask()
    }
}

export { evenGame }