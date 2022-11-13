import game from '../index.js';
import cli from '../cli.js';
import { randomNum } from '../utils.js';

const gcdGame = (countRound) => {
  let isGame = true;
  let result = 0;
  const ball = 1;

  game.welcomeInGame();
  const name = cli.getName();
  game.greetingByName(name);

  console.log('Find the greatest common divisor of given numbers.');

  function generateQustion() {
    return `${randomNum()} ${randomNum()}`;
  }

  function getAnswer(question) {
    const nums = question.split(' ');

    const gcd = (a, b) => {
      if (!b) {
        return a;
      }

      return gcd(b, a % b);
    };

    return gcd(nums[0], nums[1]);
  }

  function isCheck(answer, userAnswer) {
    if (answer.toString() === userAnswer.toString()) {
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
    const question = generateQustion();
    game.askQuestion(question);
    const answer = getAnswer(question);
    const userAnswer = cli.getAnswer();
    if (isCheck(answer, userAnswer)) {
      game.trueAnswerText();
      result += ball;
    } else {
      game.loseAnswerText(name, answer, userAnswer);
      isGame = false;
    }
  }
};

export default gcdGame;
