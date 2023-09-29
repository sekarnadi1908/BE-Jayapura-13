const express = require("express");
const port = process.env.PORT || 3002

const index = express();

//Praktik RevoU
index.use(express.json());
index.use(express.urlencoded());
index.use(express.static('Praktik RevoU'));

index.get('/', (req,res) => {
    res.sendFile('Praktik RevoU/index.html');
})

index.listen(port, () => {
    console.log('Server running on localhost:${port}');
})