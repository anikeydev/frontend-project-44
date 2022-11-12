#!/usr/bin/env node
/* eslint-disable linebreak-style */

import { cli } from '../src/cli.js';
import { evenGame } from '../src/games/even-game.js';
import { game } from '../src/index.js';

game.welcomeInGame();
const name = cli.getName();
game.greetingByName(name);
evenGame(name);
