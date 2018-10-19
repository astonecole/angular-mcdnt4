const express = require('express');
const bodyParser = require('body-parser');
const uuidv4 = require('uuid/v4');

// Fixtures of MOCK DB.
let db = [
    {
        id: uuidv4(),
        title: "Job de tests",
        company: "Aston",
        description: "Description Test",
        city: 'Lille',
        zipcode: '59160',
        contractType: 'CDD',
        startDate: new Date(),
        publishedDate: new Date(),
    }
];

let app = express();
app.use(bodyParser.json());

const api = express.Router();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
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

    if (job[0]) {
        res.json(job[0]);
        return;
    }
    res.status(404).json({message: 'job introuvalble'});
});

api.delete('/jobs/:id', (req, res) => {
    const id = req.params.id;
    const pos = db.findIndex(job => job.id === id);

    if (pos > -1) {
        db.splice(pos, 1);
        res.status(204);
        res.json();
        return;
    }

    res.status(404);
    res.json({message: 'Not Found'});
});

app.use('/api', api);
app.listen(3000);
