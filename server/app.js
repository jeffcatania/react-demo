const http = require('http');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

const db = require('./datastore.js');

const app = express();

app.set('port', process.env.PORT || 3333);
app.use(express.static('public', { index: false }));
app.use(morgan(process.env.NODE_ENV === 'development' ? 'dev' : 'combined'));
app.use(bodyParser.json());
app.use(cors());

/* **************************************************************************
 * API
 * *************************************************************************/

app.get('/reports', (req, res) => {
  res.send(db.fetchAll());
});

app.get('/reports/:id', (req, res) => {
  res.send(db.fetch(req.params.id));
});

app.post('/reports', (req, res) => {
  res.send(db.save(req.body));
});

app.put('/reports/:id', (req, res) => {
  res.send(db.update(req.params.id, req.body));
});

app.delete('/reports/:id', (req, res) => {
  res.send(db.remove(req.params.id));
});

// 404
app.use((req, res, next) => {
  res.status(404).send({
    message: `Yay! The API is running but there is nothing at ${req.url}`,
  });
});

// 5xx
app.use((err, req, res, next) => {
  res.status(500).send({ message: 'Server Error. Check our console logs.' });
});

const server = http.createServer(app);

server.listen(app.get('port'), () => {
  console.log(`Server listening at localhost:${app.get('port')}...`);
});
