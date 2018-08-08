# node-api-template
Template for Node RESTful API with Sequelize, Express, PostgreSQL and other useful libraries

***
<h3>Database:</h3>
<ul>
  <li>Postgres</li>
</ul>

***
<h3>Libraries:</h3>
<ul>
  <li><a href='#express'>Express</a></li>
  <li><a href='#sequelize'>Sequelize</a></li>
  <li><a href='#sequelize-cli'>Sequelize-Cli</a></li>
  <li><a href='#lodash'>lodash</a></li>
  <li><a href='#morgan'>morgan</a></li>
  <li><a href='#bcryptjs'>bcryptjs</a></li>
  <li>body-parser</li>
  <li>nodemon</li>
</ul>

***
<h3 id='expres'>Expres</h3>

[Express](https://expressjs.com/) goes hand in hand with Nodejs. I once read an article of why to use Express. They said 'Try and route within your Node project without Express, then with Express, and you'll understand why.' Enough said.

<h3 id='sequelize'>Sequelize</h3>

[Sequelize](https://docs.sequelizejs.com) is a promise-based ORM for Node.js v4 and up. It supports the dialects PostgreSQL, MySQL, SQLite and MSSQL and features solid transaction support, relations, read replication and more.

<h3 id='sequelize-cli'>Sequelize-Cli</h3>

[Sequelize-CLI](http://docs.sequelizejs.com/manual/tutorial/migrations.html#the-cli) handles database migrations to keep track of changes to the database.

<h3 id='lodash'>lodash</h3>

[lodash](https://lodash.com/) is a modern JavaScript utility library delivering modularity, performance & extras.


<h3 id='morgan'>morgan</h3>

[morgan](https://github.com/expressjs/morgan) is a HTTP request logging system. There are many different options. In this template I've used the 'dev' option. 
example before:
```
Executing (default): SELECT "id", "guid", "user_id", "expired_at", "deleted_at", "created_at", "updated_at" FROM "access_tokens" AS "access_tokens" WHERE (("access_tokens"."deleted_at" > '2018-08-08 18:53:20.740 +00:00' OR "access_tokens"."deleted_at" IS NULL) AND "access_tokens"."guid" = '6d988176-7b72-46e2-ac2c-5c240949e186') LIMIT 1;
TypeError: Errors.LoginRequiredError is not a constructor
    at authenticateUser (/Users/userName/Desktop/applicationFolder/app/middleware/authentication.js:34:22)
```
example after: 
```
GET / 404 4.357 ms - 139
OPTIONS /web/v1/access_tokens 204 0.627 ms - 0
Executing (default): SELECT "id", "guid", "user_id", "expired_at", "deleted_at", "created_at", "updated_at" FROM "access_tokens" AS "access_tokens" WHERE (("access_tokens"."deleted_at" > '2018-08-08 18:53:00.379 +00:00' OR "access_tokens"."deleted_at" IS NULL) AND "access_tokens"."guid" = '6d988176-7b72-46e2-ac2c-5c240949e186') LIMIT 1;
TypeError: Errors.LoginRequiredError is not a constructor
    at authenticateUser (/Users/userName/Desktop/applicationFolder/app/middleware/authentication.js:34:22)
POST /web/v1/access_tokens 500 108.819 ms - 71
```

<h3 id='bcrypt'>bcryptjs</h3>

[bcryptjs](https://www.npmjs.com/package/bcryptjs) aids in server side passwords hashing for security purposes. There is a difference between bcryptjs and the original bcrypt. This version removes all unnessary dependancies.


