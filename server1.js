const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('DevOps Docker Application');
});

app.listen(3001, () => {
    console.log('Application running on 3001');
});