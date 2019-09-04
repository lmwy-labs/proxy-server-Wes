const express = require('express');
const morgan = require('morgan');

const app = express();
const port = 3000;

app.use(morgan('dev'));
app.use('/restaurants/:id', express.static('./public/lib'));

app.listen(port, () => console.log(`Proxy Server listening on port ${port}!`));
