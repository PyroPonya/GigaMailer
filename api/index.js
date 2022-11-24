const app = require('express')();
const { v4 } = require('uuid');

app.get('/api', (req, res) => {
  const path = `/api/item/${v4()}`;
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  res.end(`Hello! Go to item: <a href="${path}">${path}</a>`);
});

app.get('/api/item/:slug', (req, res) => {
  const { slug } = req.params;
  res.end(`Item: ${slug}`);
});

app.post('/api', (req, res) => {
  // const { a, b, c } = JSON.parse(req.body);
  const body = req.body;
  const data = {
    a: 1,
    b: 2, 
    c: 3,
  }
  res.send(body.json())
  res.send({ data, body });
})

module.exports = app;
