let express = require('express');
let app = express();

// ส่งไฟล์ HTML กลับเมื่อมีการ GET มาที่ root "/"
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

module.exports = app;