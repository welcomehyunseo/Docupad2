const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res, next) => {
    res.send('<h1> Hello new world </h1>');
});

app.listen(port, () => {
    console.log(`Server is running at ${port}`);
});