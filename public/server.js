require('newrelic');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helpers = require('./helpers.js')

const app = express();
const port = 3000;

app.use(cors());
app.use(morgan('dev'));
app.use('/restaurants/:id', express.static('./public/lib'));

app.get('/api/restaurants/:id/reviews', function (req, res) {
    helpers.getReviewbyID(req.body.data, function(reviewObj) {
      console.log(reviewObj)
    });
    console.log('req data', req.body);
  
    res.end('got here');
  });
app.listen(port, () => console.log(`Proxy Server listening on port ${port}!`));
