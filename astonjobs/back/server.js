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

// req.params.id    == /:id
// req.body.message == {message: 'data'}
// req.query.name   == ?name=aston
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

api.get('/jobs/:id', (req, res) => {
    job = db.filter(item => item.id === req.params.id);

    res.json(job);
    console.log(job);
});

app.use('/api', api);
app.listen(3000);
