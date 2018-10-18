const express = require('express');
const bodyParser = require('body-parser');

let db = [];
let app = express();
app.use(bodyParser.json());

const api = express.Router();

// req.params == /:id
// req.body   == {message: 'data'}
// req.query  == ?name=aston
api.post('/jobs', (req, res) => {
    console.log(req.body);

    res.json({message: 'Hello'});
})

app.use('/api', api);
app.listen(3000);
