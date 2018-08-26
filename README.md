# Node.js, Express.js, Sequelize.js and PostgreSQL RESTful API

This source code is part of [Node.js, Express.js, Sequelize.js and PostgreSQL RESTful API](https://www.djamware.com/post/5b56a6cc80aca707dd4f65a9/nodejs-expressjs-sequelizejs-and-postgresql-restful-api) tutorial.

To run locally:

* Make sure you have install and run PostgreSQL server
* Create database with the name same as in config file
* Run `docker run --name posttest -d -p 5432:5432 -e POSTGRES_PASSWORD=fred postgres:alpine`
* Run `npm install` or `yarn install`
* Run `sequelize db:migrate`
* Run `nodemon` or `npm start`
