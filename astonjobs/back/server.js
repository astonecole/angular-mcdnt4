const express = require('express');
const bodyParser = require('body-parser');
const uuidv4 = require('uuid/v4');

let db = [];
let app = express();
app.use(bodyParser.json());

const api = express.Router();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

// req.params == /:id
// req.body   == {message: 'data'}
// req.query  == ?name=aston
api.post('/jobs', (req, res) => {
    if (req.body) {
        const job = req.body;
        job.id = uuidv4();
        db.push(job);

        res.status(201).json(job);
    } else {
        res.status(500).json({message: 'Internal Server Error'});
    }
});

api.get('/jobs', (req, res) => {
    res.json(db);
});

app.use('/api', api);
app.listen(3000);
