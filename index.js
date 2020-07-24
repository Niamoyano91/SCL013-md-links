module.exports = () => {
  // ...
};
console.log('hola')

let fs = require('fs')
let referencesLinks = /\((http[^)]+)\)/g

fs.readFile('README.md','utf-8',(err,data)=>{
  if(err){
    console.log('error: ', err);
  }else{
    console.log(data)
    let linksArchive = []
    const allLinks = data.match(referencesLinks)
    console.log(allLinks);
  }
});





/*const readline = require("readline"),
    fs = require("fs"),
    NOMBRE_ARCHIVO = "README.md";

let lector = readline.createInterface({
    input: fs.createReadStream(NOMBRE_ARCHIVO)
});

lector.on("line", linea => {


    console.log("Tenemos una línea:", linea);
});*/