const request = require('request');

let getReviewsbyID = (id, callback) => {
  let options = {
    url: `http://localhost:3001/restaurants/${id}`
  };

  request.get(options, function(err, reviewsObj) {
    if (err) {
      console.error(err, null);
    } else {
      console.log(null, reviewsObj.body);
      callback(reviewsObj);
    }
  });

}

module.exports.getReviewsbyID = getReviewsbyID;