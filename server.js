const express = require('express');
var app = express();

app.set('port', process.env.PORT || 9000);
app.use(express.static(__dirname + '/dist'));

app.listen(app.get('port'), function () {
  console.log('App is running at localhost:' + app.get('port'));
})
