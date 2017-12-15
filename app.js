const express = require('express');
const bodyparser = require('body-parser');
const app = express();

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.listen(process.env.PORT || 5024, () => {
    console.log('Server Start 5024');
});