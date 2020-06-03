const express = require('express');
const exphbs = require('express-handlebars')
var app = express();
var PORT = process.env.PORT || 8000;

// var db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(express.static("public"));

require("./routes/html-routes.js")(app);
require('./routes/api-routes.js')(app)
// db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
//   });