#!/usr/bin/env node

import { game } from '../src/index.js'
import { cli } from '../src/cli.js'
import { calcGame } from '../src/calc-game.js'

game.welcomeInGame()
const name = cli.getName()
game.greetingByName(name)
calcGame.rules()
calcGame.ask()
