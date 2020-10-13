module.exports = (req, res) => {
  var url = 'http://graph.facebook.com/517267866/?fields=picture';

  http.get(url, function(res){
      var body = '';
  
      res.on('data', function(chunk){
          body += chunk;
      });
  
      res.on('end', function(){
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