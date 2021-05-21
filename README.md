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

### Project Pattern
In this Project, it was implemented the MVC (Model-View-Controller).
To know more about this pattern, you can click [here](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwilqcL15dbwAhVur5UCHXRsBNsQFjAAegQIBRAD&url=https%3A%2F%2Fpt.wikipedia.org%2Fwiki%2FMVC&usg=AOvVaw0FPLUmFL68pqAh8xUbam29)
