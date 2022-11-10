#!/usr/bin/env node
import { cli } from '../src/cli.js'
import { game } from '../src/index.js'

game.welcomeInGame()
const name = cli.getName()
game.greetingByName(name)