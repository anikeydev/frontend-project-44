import readlineSync from 'readline-sync'
import { randomNum } from './utils.js'

const evenGame = (name) => {
    let countGame = 3

    console.log('Answer "yes" if the number is even, otherwise answer "no"')

    const ask = () => {
        let random = randomNum()
        console.log(`Question: ${random}`)
        const answer = readlineSync.question('Your answer: ')

        const isEvenNum = (num) => {
            if (num % 2 === 0) {
                return 'yes'
            } else {
                return 'no'
            }
        }

        if (answer === isEvenNum(random)) {
            console.log('Correct!')
            countGame -= 1
        } else {
            console.log(`'yes' is wrong answer ;(. Correct answer was 'no'\nLet's try again, ${name}!`)
            countGame = 0
        }

    }

    while (countGame > 0) {
        ask()
    }

}

export { evenGame }