const express = require('express');
const app = express();

const api = require('./routes');

app.use(express.static(`${__dirname}/public`));
app.use('/', api);

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500);
  res.json({ ...err });
});

const port = 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
