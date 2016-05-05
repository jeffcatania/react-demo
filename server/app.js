const http = require('http');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

app.set('port', process.env.PORT || 3000);
app.use(express.static('public', { index: false }));
app.use(morgan(process.env.NODE_ENV === 'development' ? 'dev' : 'combined'));
app.use(bodyParser.json());

/* **************************************************************************
 * API
 * *************************************************************************/

app.get('/reports', (req, res) => {
  res.send('GET Get all reports');
});

app.get('/reports/:id', (req, res) => {
  res.send(`GET Get report with id ${req.params.id}`);
});

app.post('/reports', (req, res) => {
  res.send('POST Create Report');
});

app.put('/reports/:id', (req, res) => {
  res.send(`PUT Update report with id ${req.params.id}`);
});

app.delete('/reports/:id', (req, res) => {
  res.send(`DELETE Delete report with id ${req.params.id}`);
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
