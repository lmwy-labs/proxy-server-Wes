const request = require('request');

let getReviewsbyID = (id, callback) => {
  let options = {
    url: `http://52.8.6.53:3001/restaurants/${id}`
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

let getReservationsbyID = (id, callback) => {
    const r_id = id.substring(1);
    let options = {
      url: `http://54.215.234.24:3003/restaurants/${r_id}`
    };
  
    request.get(options, function(err, reservationsObj) {
      if (err) {
        console.error(err, null);
      } else {
        console.log(null, reservationsObj.body);
        callback(reservationsObj);
      }
    });
  }

  let getPhotosbyID = (id, callback) => {
    let options = {
      url: `http://54.193.42.82:3002/restaurants/${id}`
    };
    request.get(options, function(err, photosObj) {
      if (err) {
        console.error(err, null);
      } else {
        console.log(null, photosObj.body);
        callback(photosObj);
      }
    });
  }

module.exports = { getReviewsbyID, getReservationsbyID, getPhotosbyID };