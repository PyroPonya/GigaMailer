const app = require('express')();
const { v4 } = require('uuid');
app.use(express.json());

app.get('/api', (req, res) => {
  const path = `/api/item/${v4()}`;
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  res.end(`Hello! Go to item: <a href="${path}">${path}</a>`);
});

app.get('/api/item/:slug', (req, res) => {
  const { slug } = req.params;
  res.end(`Item: ${slug}`);
});

app.post('/api', (req, res) => {
  // const { a, b, c } = JSON.parse(req.body);
  // const body = req.body;
  const { body } = req;
  const data = {
    a: 1,
    b: 2, 
    c: 3,
  };
  const resp = JSON.stringify({
    data: data,
    body: body,
  });
  res.json({requestBody: req.body})
  res.send('======API RESPONSE======');
  // res.end(body);
})

module.exports = app;
