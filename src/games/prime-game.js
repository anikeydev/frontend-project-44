import game from '../index.js';
import cli from '../cli.js';
import { randomNum } from '../utils.js';

const primeGame = (countRound) => {
  let isGame = true;
  let result = 0;

  game.welcomeInGame();
  const name = cli.getName();
  game.greetingByName(name);

  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  function isPrime(n) {
    if (n < 2) {
      return false;
    } if (n === 2) {
      return true;
    }

    let i = 2;
    const limit = Math.sqrt(n);
    while (i <= limit) {
      if (n % i === 0) {
        return false;
      }
      i += 1;
    }

    return true;
  }

  function getAnswer(question) {
    if (isPrime(question)) {
      return 'yes';
    }
    return 'no';
  }

  function isCheck(answer, userAnswer) {
    if (isPrime(answer)) {
      if (userAnswer === 'yes') {
        return true;
      }
      return false;
    }
    if (userAnswer === 'no') {
      return true;
    }
    return false;
  }

  while (isGame) {
    if (result === countRound) {
      game.winText(name);
      isGame = false;
      return;
    }
    const question = randomNum();
    game.askQuestion(question);

    const userAnswer = cli.getAnswer();

    if (isCheck(question, userAnswer)) {
      game.trueAnswerText();
      result += 1;
    } else {
      game.loseAnswerText(name, getAnswer(question), userAnswer);
      isGame = false;
    }
  }
};

export default primeGame;
