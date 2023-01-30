const express = require("express");
const exphbs = require("express-handlebars");
const app = express();

/// view engine setup
app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

//body parser middleware
app.use(express.json());

app.use("/api", require("./routes/index"));

app.listen(5000, () => {
  console.log("server is running");
});
