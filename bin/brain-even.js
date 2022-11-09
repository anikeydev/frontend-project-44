#!/usr/bin/env node

import { cli } from '../src/cli.js'
import { evenGame } from '../src/even-game.js'

cli.hello()
const name = cli.greetingByName()
evenGame(name)