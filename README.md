# NodeAPI_With_ORM


## Introduction
This is a project in Node.js that is built to serve as an API for a language school control system

## Configurations
### Applications Database User
You can configurate, as default on sequelize, your DB user on ./src/config/config.json


## Requirements
### Database
For this project, you will need An SQL database such as a user on it, if you want to deploy it with another database, simply install via NPM another library referring to the Database, for example:
SQL SERVER will need the Tedious Node Module and adapt the code for that specific library.
### Others
You also need:
    - NPM OR YARN
    - Node

## Anotations
### Sequelize tips :)
#### How to Create a new Migration and Model with sequelize?
If you want to add a new table or model the existant Db Schema you can run the command:
`npx sequelize-cli model:create --name People --attributes name:string,active:boolean,email:string,role:string`
#### How to run a new Migration with sequelize?
`npx sequelize-cli db:migrate`
#### How to create a new seed with sequelize?
`npx sequelize-cli seed:generate --name demo-person`
#### How to run a seed with sequelize?
`npx sequelize-cli db:seed:all`