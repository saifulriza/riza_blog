module.exports = (req, res) => {
  const http = require('https')
  var url = 'http://graph.facebook.com/517267866/?fields=picture';

  http.get(url, function(resp){
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