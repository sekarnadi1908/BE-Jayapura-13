const express = require("express")
const cors = require('cors');
const path = require('path');
const connection = require('./app/model/index')
// init express server and router
const app = express();
const mainRouter = require('./app/routes');
require('dotenv').config()

//Praktik RevoU
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('Praktik RevoU'));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//http router
app.use("/", mainRouter);

app.get('/', (req,res) => {
    res.sendFile('Praktik RevoU/index.html');
})

const port = 3000
app.listen(port, function(){
    console.log("server start on", port)
    connection.authenticate()
    .then(function(){
        console.log("Database terhubung")
    })
    .catch(function(err){
        console.log("Error saat koneksi ke database", err)
        process.exit()
    })
})



// //simple
// const express = require("express");
// const port = process.env.PORT || 3003

// const index = express();

// //Praktik RevoU
// index.use(express.json());
// index.use(express.urlencoded());
// index.use(express.static('Praktik RevoU'));

// index.get('/', (req,res) => {
//     res.sendFile('Praktik RevoU/index.html');
// })

// index.listen(port, () => {
//     console.log('Server running on localhost:${port}');
// })