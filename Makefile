install:
	npm ci

publish:
	npm publish --dry-run

lint:
	npx eslint

brain-games:
	node bin/brain-games.js

prog-log:
	node ./src/games/prgression-game.js