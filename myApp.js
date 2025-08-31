require('dotenv').config();
let express = require('express');
let bodyParser = require('body-parser');
let app = express();

// ✅ Root-level logger middleware
app.use(function(req, res, next) {
  console.log(req.method + " " + req.path + " - " + req.ip);
  next();
});

// ✅ ให้ Express เสิร์ฟไฟล์ static จากโฟลเดอร์ "public"
app.use("/public", express.static(__dirname + "/public"));

// ✅ body-parser สำหรับ POST requests
app.use(bodyParser.urlencoded({ extended: false }));

// ✅ หน้า index
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

// ✅ JSON /json
app.get("/json", (req, res) => {
  res.json({ message: "Hello json" });
});

// ✅ Chain middleware /now
app.get("/now", 
  function(req, res, next) {
    req.time = new Date().toString();
    next();
  }, 
  function(req, res) {
    res.json({ time: req.time });
  }
);

// ✅ Echo server
app.get("/:word/echo", (req, res) => {
  res.json({ echo: req.params.word });
});

// ✅ /name GET และ POST
app.route("/name")
  .get((req, res) => {
    const { first, last } = req.query;
    res.json({ name: `${first} ${last}` });
  })
  .post((req, res) => {
    const { first, last } = req.body;  // อ่านจาก body ของ POST request
    res.json({ name: `${first} ${last}` });
  });

module.exports = app;