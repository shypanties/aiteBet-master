const express = require("express");
const app = express();
const path = require('path');
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();
// app.use(express.urlencoded());
app.use(cors());

const port = process.env.PORT || 5000;
const scoreRoutes = require("./backend/routes/scoresRoutes");

// Middleware
app.use(express.json());

app.use("/", scoreRoutes);

if(process.env.NODE_ENV === 'production'){
    app.use("/", express.static("build"));
}
app.get('*',(req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

//Connect to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("DB connected");
  }
);
app.listen(port, () => console.log(`Running on port:: ${port}`));
