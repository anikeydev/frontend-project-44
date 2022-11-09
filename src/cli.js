import readlineSync from 'readline-sync'

const cli = {
    hello() {
        console.log('Welcome to the Brain Games!')
    },
    greetingByName() {
        const name = readlineSync.question('May I have your name? ')
        console.log(`Hello, ${name}`)
        return name
    },
}

export { cli }