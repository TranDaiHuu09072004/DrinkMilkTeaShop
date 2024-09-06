var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
var mongoose = require("mongoose");
var userRouter = require("./routes/userRoutes");
var categoryRouter = require("./routes/categoryRoutes");
var productRouter = require("./routes/productRoutes");

var app = express();
app.use(cors());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/user", userRouter);
app.use("/category", categoryRouter);
app.use("/product", productRouter);
app.use("/product/getpopular", productRouter);
// kết nối mongoose
mongoose
  .connect("mongodb://localhost:27017/drink_milk_tea")
  .then(() => console.log("Kết nối thành công"))
  .catch((err) => console.log("Kết nối thất bại" + err));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app; // Export app để sử dụng ở file www.js
