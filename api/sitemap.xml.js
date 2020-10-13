module.exports = (req, res) => {
  const https = require('https')
  var url = 'https://xn--e28h.my.id/blog.json';

  https.get(url, function(resp){
      var body = '';
  
      resp.on('data', function(chunk){
          body += chunk;
      });
  
      resp.on('end', function(){
          var fbResponse = JSON.parse(body);
          res.send(fbResponse);
          console.log("Got a response: ", fbResponse.picture);
      });
  }).on('error', function(e){
    res.send(e)
        console.log("Got an error: ", e);
  });
// res.setHeader('Content-Type', 'application/xml')
}