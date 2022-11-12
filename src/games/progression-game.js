import { cli } from '../cli.js';
import { game } from '../index.js';
import { randomNumByMinMax, randomNum, randomNumByMax } from '../utils.js';

const progGame = (countRound) => {
  let isGame = true;
  let result = 0;
  const ball = 1;

  game.welcomeInGame();
  const name = cli.getName();
  game.greetingByName(name);

  console.log('What number is missing in the progression?');

  while (isGame) {
    ask();
  }

  function ask() {
    if (result === countRound) {
      game.winText(name);
      isGame = false;
      return;
    }
    const question = generateProgress();

    game.askQuestion(question.progress);
    const userAnswer = cli.getAnswer();

    if (isCheck(question.answer, userAnswer)) {
      game.trueAnswerText();
      result += ball;
    } else {
      game.loseAnswerText(name, question.answer, userAnswer);
      isGame = false;
    }
  }

  function isCheck(answer, userAnswer) {
    if (answer.toString() === userAnswer.toString()) {
      return true;
    }
    return false;
  }

  function randomStep(max) {
    const step = randomNumByMax(max);
    if (step === 0) {
      return randomStep(max);
    }
    return step;
  }

  function generateProgress(minCount = 5, maxCount = 10, step = 1) {
    const resultArr = [];
    let resultStr = '';
    const count = randomNumByMinMax(minCount, maxCount);
    step = randomStep(maxCount);
    const position = randomNumByMax(maxCount);
    const startnum = 0;

    resultArr.push(startnum);

    for (let i = 0; i <= maxCount; i++) {
      resultArr.push(resultArr[i] + step);
    }

    const answer = resultArr[position];
    resultArr[position] = '..';

    resultStr = resultArr.join(' ');

    return {
      progress: resultStr,
      answer,
    };
  }
};

export { progGame };
