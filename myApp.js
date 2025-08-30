let express = require('express');
let app = express();

// เพิ่ม route ที่ root "/"
app.get("/", function(req, res) {
  res.send("Hello Express");
});

module.exports = app;