const express = require("express");
const server = express();

const port = 8080;

server.get("/", (req, res) => {
    res.status(200).send("This is home page");
})

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})