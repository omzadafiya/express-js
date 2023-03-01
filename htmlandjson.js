const express = require('express');
const app = express();

app.get('', (req, resp) => {
    resp.send('<h1>Hello,This is Home Page</h1><a href="/about">go to about page</a>"');

})
app.get('/about', (req, resp) => {
    resp.send(`
        <input type="text" placeholder="user name"/>
        <button>Cleck me!</button>
        <a href="/" >go to home page</a>
    `);

})
app.get('/manu', (req, resp) => {
    resp.send([
        
        {
        name:'om zadafiya',
        email:'omzadafiya@gmail.com',
        xender:'male'
        },
        {
            name:'prahar',
            email:'prahar@gmail.com',
            xender:'male'
            
        }
]);

})
app.listen(5500);
