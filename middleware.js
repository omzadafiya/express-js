const { response, request } = require('express');
const express = require('express');
const app = express();


//middlewear function//
const reqFilter = (request, response, next) => {
    if (!request.query.age) {
        response.send("place enter your age")
    }
    else if (request.query.age < 18) {
        response.send("you age is not valid")
    }
    else {
        next();
    }

}
app.use(reqFilter);

app.get('/', (request, response) => {
    response.send('Hello om zadafiya!')
})
app.get('/user', (request, response) => {
    response.send('Hello User')
})

app.listen(3500)