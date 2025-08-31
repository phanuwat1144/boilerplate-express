require('dotenv').config();
let express = require('express');
let app = express();

// ให้ Express เสิร์ฟไฟล์ static จากโฟลเดอร์ "public"
app.use("/public", express.static(__dirname + "/public"));

// ส่งหน้า index.html กลับเมื่อ GET "/"
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

// ส่ง JSON เมื่อ GET "/json"
app.get("/json", function(req, res) {
  let message = "Hello json";

  if (process.env.MESSAGE_STYLE === "uppercase") {
    message = message.toUpperCase();
  }

  res.json({ message: message });
});

module.exports = app;