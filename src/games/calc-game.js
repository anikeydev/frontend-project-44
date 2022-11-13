import cli from '../cli.js';
import { game } from '../index.js';
import { randomNum, randomOper } from '../utils.js';

const calcGame = (countRound) => {
  let isGame = true;
  let result = 0;
  const ball = 1;

  game.welcomeInGame();
  const name = cli.getName();
  game.greetingByName(name);

  console.log('What is the result of the expression?');

  function generateQuestion() {
    const num1 = randomNum();
    const num2 = randomNum();
    const oper = randomOper();
    const string = `${num1} ${oper} ${num2}`;

    switch (oper) {
      case '+':
        return {
          string,
          result: num1 + num2,
        };
      case '*':
        return {
          string,
          result: num1 * num2,
        };
      case '-':
        return {
          string,
          result: num1 - num2,
        };
      default:
        return 0;
    }
  }

  function isCheck(answer, userAnswer) {
    if (answer === userAnswer) {
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
    const question = generateQuestion();
    game.askQuestion(question.string);
    const answer = question.result.toString();
    const userAnswer = cli.getAnswer().toString();
    if (isCheck(answer, userAnswer) === true) {
      game.trueAnswerText();
      result += ball;
    } else if (isCheck(answer, userAnswer) === false) {
      game.loseAnswerText(name, answer, userAnswer);
      isGame = false;
    } else {
      game.dontKnowAnswer(userAnswer, name);
      isGame = false;
    }
  }
};

export default calcGame;
