let express = require('express');
let app = express();

// ตัวอย่าง route แรก
app.get("/", (req, res) => {
  res.send("Hello Express");
});

// เริ่ม server บน port 3000
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});




































 module.exports = app;
