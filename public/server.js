const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(morgan('dev'));
app.use('/restaurants/:id', express.static('./public/lib'));

app.listen(port, () => console.log(`Proxy Server listening on port ${port}!`));
