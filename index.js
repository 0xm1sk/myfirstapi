const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/hello", (req, res) => {
  res.json({ message: "Hello, world!" });
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});


