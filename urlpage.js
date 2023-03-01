const express = require('express');
const path = require('path');

const app=express();
const publicPath=path.join(__dirname,'public')

app.get('',(req,resp)=>{
    resp.sendFile(`${publicPath}/htmlpage.html`)
})
app.get('/about',(req,resp)=>{
    resp.sendFile(`${publicPath}/about.html`)
})
app.get('*',(req,resp)=>{
    resp.sendFile(`${publicPath}/url.html`)
})
app.listen(5000);