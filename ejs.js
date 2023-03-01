const express = require('express');
const app = express();
const path =require('path');

const publicPath = path.join(__dirname,'views')

app.set('view engine','ejs');


app.get('', (req, resp) => {
    resp.sendFile(`${publicPath}/htmlpage.html`);
})

app.get('/profile',(req, resp) => {
    const user = {
        name:'zadafiya om',
        email:'om@gmail.com',
        city:'surat'
    }
    resp.render('profile',{user});

})
app.listen(5400);