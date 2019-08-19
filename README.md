# Financial Software engineering Exam Repo

This repo contains all practical and theoretical solutions for the FSE exam 2019. The theory solutions can be found here [here](./FCC_exam_theory_answers.pdf). An online version of the website can be found [here](https://sneakysneakers.now.sh)

## Shoe Registry Application
**Sneaky Sneaker Registry** was created to track and store your sneaker collection in a intuitive and simple way. The application was built using `Vuejs`, `yarn`, `material UI`, serverless functions to make an API and now.sh with zeit.co for CI pipeline for front end and serverless deployment deployment.

### Application Design and Architecture
The application has been designed with two distinct layers: 
1) **Front end application** which displays information and takes user inputs when adding new shoes. This impementation can be found in the `src` directory.
2) **Backend serverless API** that handles retreiving requests for listing sneakers as well as publishing new sneakers to the database. This backend uses `node.js ` in a serverless environment that writes and reads over a restful endpoint to www.jsonstore.io in order to meet the brief of building a database from the json file. This implementation can be found in the `api` directory.

### Local Testing Environment:
To run the application locally you need to have installed two main things installed: `yarn` & `now.sh`

First you need to install the required packages. This is done through: 

```
yarn install
```

Next, you need to set a `DB_URL` as an environment variable to enable now.sh to know where to point the serverless restful api to communicate with jsonstore.io. For this you can generate your own at jsonstore.io or use one that already has a bunch of sneakers added. Type the following in your consol to set the enviroment variable:

```
DB_URL=769f264f189e79181538362a5ca0f3842bd065299f0814960424828004326b38
```

Last step is to start now.sh in local development mode. This will spin up the front end vue application and start a local version of the serverless functions. 

```
now dev
```

### Production Deployment to zeit.co
To push to a production zeit.co environmnet you first need to set a zeit secret for the environmnet variable. 
```
now secret add DB_URL 769f264f189e79181538362a5ca0f3842bd065299f0814960424828004326b38
```
And last step is to push to zeit.co using:
```
now
```

### Porting Sneakers to production environment
A node porting script was created to migrate test data to the restful endpoint. This is used to reset the database to a starting point that contains all information provided in the exam source resources. See the script `portSneakers.js` for this implementation. To run the porting script execute:
```
node portSneakers.js
```

