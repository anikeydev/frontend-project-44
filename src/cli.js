import readlineSync from 'readline-sync';

const cli = {
  getName() {
    return readlineSync.question('May I have your name? ');
  },
  getAnswer() {
    return readlineSync.question('Your answer: ');
  },
};

export { cli };
