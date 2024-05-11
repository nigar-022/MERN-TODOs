const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes/ToDo");

const app = express();
app.use(cors());
const PORT = process.env.PORT || 5000;

app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/todos")
  .then(() => console.log(`Connected to MongoDB database....`))
  .catch((error) => console.log(error));

app.use(routes);

app.listen(PORT, () => console.log("Listening on server"));
