import readlineSync from 'readline-sync'
import { randomNum } from './utils.js'

const evenGame = (name) => {
    let countGame = 3
    let result = 0

    console.log('Answer "yes" if the number is even, otherwise answer "no"')

    const ask = () => {
        let random = randomNum()
        console.log(`Question: ${random}`)
        const answer = readlineSync.question('Your answer: ')

        if (answer === 'yes') {
            if (random % 2 === 0) {
                console.log('Correct!')
                countGame -= 1
                result += 1
                if (result === 3) {
                    console.log(`Congratulations, ${name}`)
                }
            } else {
                console.log(`"${answer}" is wrong answer ;(. Correct answer was "no"\nLet's try again, ${name}!`)
                countGame = 0
            }
        } else if (answer === 'no') {
            if (random % 2 !== 0) {
                console.log('Correct!')
                countGame -= 1
                result += 1
                if (result === 3) {
                    console.log(`Congratulations, ${name}`)
                }
            } else {
                console.log(`"${answer}" is wrong answer ;(. Correct answer was "yes"\nLet's try again, ${name}!`)
                countGame = 0           
            }
        } else {
            console.log(`I don know is "${answer}"\nLet's try again, ${name}!`)
            countGame = 0
        }

    }

    while (countGame > 0) {
        ask()
    }

}

export { evenGame }