const express = require("express");
const bodyParser = require("body-parser");

const app = express();

let newListItems = ['Buy food', 'Cook food', 'Eat food'];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

const options = { weekday: 'long', month: 'long', day: 'numeric' };
const today  = new Date();

let day = today.toLocaleDateString("en-US", options)

app.get("/", function(req, res){
  res.render('list', {day: day, newListItems: newListItems});
});

app.post('/', function(req, res) {
  let newListItem = req.body.newItem;
  newListItems.push(newListItem);
  res.redirect('/');
});

app.listen(process.env.PORT || 3000, function(){
  console.log("Server started on port 3000.");
});