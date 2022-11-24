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
  const shitload = JSON.parse(req)
  // const data = {
  //   a: a,
  //   b: b, 
  //   c: c,
  // }
  console.log('=============ALLLO===============');
  console.log(req);
  console.log(req.body);
  console.log(res);
  console.log('=============NE_ALLLO============');
  res.send('WHATAHELLDUHD');
})

module.exports = app;
