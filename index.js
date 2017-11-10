var kue = require('kue');
var express = require('express');
var kueUiExpress = require('kue-ui-express');
var app = express();

kue.createQueue({
  prefix: process.env.KUE_PREFIX,
  redis: process.env.REDIS_URL || 'redis://redis:6379'
});

kueUiExpress(app, '/kue/', '/api/');

app.use('/api/', kue.app);

app.listen(5000);