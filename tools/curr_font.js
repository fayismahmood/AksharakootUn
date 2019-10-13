var fs=require("fs");

var fontfile;
fontfile=fs.readFile("./public/tool/Fonts/fonts.css","utf8",function(er,data){
    fontfile=data.match(/font-family: ?(.*);/g); 
    var ss=new Array;
    fontfile.forEach(e=>{
        ss.push(e.replace(/font-family:/g,"").replace(";","").replace(/[", ]/g,""))  
    })
    exports.fontfind=ss;
    
})


