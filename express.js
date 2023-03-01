const express = require('express');
const app = express();
app.get('', (req, resp) => {
    resp.send('Hello,This is Home Page');

})

app.get('/about', (req, resp) => {
    resp.send('Hello,This is About Page');

})
app.get('/main', (req, resp) => {
    resp.send('Hello,This is main Page');

})
app.listen(4500);
