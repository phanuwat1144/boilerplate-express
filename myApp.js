require('dotenv').config();
let express = require('express');
let app = express();

// ✅ Root-level logger middleware
app.use(function(req, res, next) {
  console.log(req.method + " " + req.path + " - " + req.ip);
  next(); // อย่าลืม ไม่งั้น server จะค้าง
});

// ให้ Express เสิร์ฟไฟล์ static จากโฟลเดอร์ "public"
app.use("/public", express.static(__dirname + "/public"));

// ส่งหน้า index.html กลับเมื่อ GET "/"
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

// ส่ง JSON เมื่อ GET "/json"
app.get("/now", 
  function(req, res, next) {
    req.time = new Date().toString();
    next();
  }, 
  function(req, res) {
    res.json({ time: req.time });
  }
);

module.exports = app;