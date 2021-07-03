const express = require('express');
const connection = require('./config/db_conn');

const app = express();

app.get('/',(req,response)=>{
    const selectQuery = "select * from user_details;";
    connection.query(selectQuery, (err,res)=>{
        if(err) {
            console.log('server.js - ', err);
            return;
        }
        console.log('server.js - get("/") --> ', res);
        return response.send(res);
    })
});


const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server Started at PORT ${PORT}`)
})