.PHONY: test

install:
	npm install

migrate-up:
	node_modules/.bin/sequelize db:migrate

migrate-down:
	node_modules/.bin/sequelize db:migrate:undo

migration-create:
	node_modules/.bin/sequelize migration:create --name=$(name)

jscs:
	node_modules/.bin/jscs ./src ./test

start:
	node src/app.js