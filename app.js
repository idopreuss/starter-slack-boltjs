const express = require('express');
const app = express();

app.get('/ido', function(req, res) {
  res.send('Hello Wo rld!');
});

app.listen(process.env.PORT || 3000, function() {
  console.log('Web service listening on port 8080');
});

