var express=require("express");
var app=express();
engine = require('ejs-locals');
var curr_font=require("./tools/curr_font.js")

app.use(express.static('public'))


var tempEngin=require("ejs");


app.engine("ejs",engine)
app.set("view engine","ejs")



app.get("/",function (q,s) {
    s.render("index",{
        aa:curr_font.fontfind
    })
})



app.listen(80)