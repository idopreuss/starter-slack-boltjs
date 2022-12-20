const express = require('express');
const app = express();

app.post('/room', function(req, res) {
  console.log(req.body);
  res.send('Will be coming soon!!!');
});

app.get('/ido', function(req, res) {
  res.send('Hello World!');
});
app.listen(process.env.PORT || 3000, function() {
  console.log('Web service listening on port 3000');
});

