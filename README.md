# Testing Express Application Using Mocha
Testing a simple express application using Mocha framework
<hr>

### devDependencies

```
npm install supertest --save-dev
```

```
npm install expect@1.20.2 --save-dev
```

### Running tests 

In the project directory, run the following command

```
npm test
```

#### GET /users
<img src="https://github.com/patilankita79/TestingExpressApplicationUsingMocha/blob/master/Screenshots/1.png" />

#### Test case to assert my name exists in users array (Passing case)
<img src="https://github.com/patilankita79/TestingExpressApplicationUsingMocha/blob/master/Screenshots/2.png" />

#### GET /users, I have changed the name from Ankita to AnkitaPatil
<img src="https://github.com/patilankita79/TestingExpressApplicationUsingMocha/blob/master/Screenshots/3.png" />

#### Test case to assert my name exists in users array (Failing case)
<img src="https://github.com/patilankita79/TestingExpressApplicationUsingMocha/blob/master/Screenshots/4.png" />
