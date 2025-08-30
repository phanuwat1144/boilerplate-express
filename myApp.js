let express = require('express');
let app = express();

// ให้ Express เสิร์ฟไฟล์ static จากโฟลเดอร์ "public"
app.use("/public", express.static(__dirname + "/public"));

// ส่งหน้า index.html กลับเมื่อ GET "/"
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

module.exports = app;