const express = require("express");
const app = express();
const { MONGO_URL } = require("./config");
const mongoose = require("mongoose");
const userRoute = require("./routes/user");
mongoose
  .connect(MONGO_URL)
  .then(() => console.log("db connection successful"))
  .catch((err) => console.log(err));
  
app.use(express.json())
app.use("/api", userRoute);
app.listen(5000, () => {
  console.log("backend server is running");
});
