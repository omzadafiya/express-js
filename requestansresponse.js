const express = require('express');
const app = express();
app.get('', (req, resp) => {
    console.log("data sent by browser ==>",req.query.name);
    resp.send('welcom to home page mr.'+ req.query.name);

})
app.listen(4500);

