const path = require('path');
const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');

module.exports = {
  app: function () {
    const app = express();
    const indexPath = path.join(__dirname, 'index.html');
    const publicPath = express.static(path.join(__dirname, '/dist'));
    const postReqOptions = {
      url: 'https://api.tinify.com/shrink',
      method: 'POST',
      headers: {
        'Authorization': 'Basic YXBpOkI3ODVqTHpHekQ1cjF0QlpJLW9sdjFQR3VHX1dBYVIw',
        'Content-type': 'text/plain'
      }
    }
    // const getReqOptions = {
    //   url: 'https://api.tinify.com/output',
    //   method: 'GET',
    //   headers: {
    //     'Authorization': 'Basic YXBpOkI3ODVqTHpHekQ1cjF0QlpJLW9sdjFQR3VHX1dBYVIw',
    //     'Content-type': 'text/plain'
    //   }
    // }

    app.use(bodyParser.raw({limit: '50mb', type: 'application/octet-stream'}));
    app.post('/post', function(req, resp) {
      console.log("REQUEST BODY: ", req.body);

      function callback(error, response, body) {
        console.log("BODY: ", body);
        //console.log("ERROR: ", error);
        //console.log("RESPONSE: ", response);
        //console.log("RESPONSE: ", response.statusCode);
        if(!error && response.statusCode >= 200 && response.statusCode <= 300) {
          var info = JSON.parse(body);
          resp.status(200).send(info);
        }
      }

      request.post({
        url: postReqOptions.url,
        headers: postReqOptions.headers, 
        body: req.body 
      }, callback); 
    });

    // app.get('/download', function(req, resp) {
    //   //console.log(req);
    //   //console.log(resp);
    //   //console.log("GET REQUEST QUERY STRING: ", req.query.imageUrl);

    //   function callback(error, response, body) {
    //     //console.log("BODY: ", body);
    //     //console.log("BODY INPUT: ", req.url);
    //     //console.log("ERROR: ", error);
    //     //console.log("RESPONSE: ", response.headers);
    //     if(!error && response.statusCode >= 200 && response.statusCode <= 300) {
    //       const info = req.query.imageUrl;
    //       console.log(info);
    //       // const binary = new Buffer.from(body, 'binary');
    //       // console.log(binary);
    //       // const type = response.headers['content-type'],
    //       //       prefix = `data:${type};base64,`,
    //       //       base64 = binary.toString('base64'),
    //       //       data = `${prefix}${base64}`,
    //       //       obj = {
    //       //         "src": req.query.imageUrl,
    //       //         "type": type,
    //       //         "data": data
    //       //       };
    //       resp.status(200).send(info);
    //     }
    //   }

    //   request.get({
    //     url: req.query.imageUrl,
    //     //headers: getReqOptions.headers, 
    //   }, callback); 

    // });

    app.use('/dist', publicPath);
    app.get('*', function (request, response){
      response.sendFile(path.resolve(__dirname, 'index.html'))
    });

    return app;
  }
};