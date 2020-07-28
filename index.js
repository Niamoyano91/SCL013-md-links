console.log(process.argv);
console.log(process.argv[2]);

//module.exports = () => {
// ...
//}
/*const colors = require('colors')
const fs = require('fs');
fs.readFile('./README.md',function(err, data){
  if (err){
    console.log(err);
  }
    console.log(data.toString().rainbow);
  });


 
console.log('hola Nia'.green); // outputs green text
console.log('i like cake and pies'.underline.red) // outputs red underlined text
console.log('inverse the color'.inverse); // inverses the color
console.log('OMG Rainbows!'.rainbow); // rainbow
console.log('Run the trap'.trap);

const name = 'Marak';
console.log(colors.green('Hello %s'), name);

//const colors = require('colors/safe');
 
console.log(colors.green('hello')); // outputs green text
console.log(colors.red.underline('i like cake and pies')) // outputs red underlined text
console.log(colors.inverse('inverse the color')); // inverses the color
console.log(colors.rainbow('OMG Rainbows!')); // rainbow
console.log(colors.trap('Run the trap')); // Drops the bass


 
colors.setTheme({
  silly: 'rainbow',
  input: 'grey',
  verbose: 'cyan',
  prompt: 'grey',
  info: 'green',
  data: 'grey',
  help: 'cyan',
  warn: 'yellow',
  debug: 'blue',
  error: 'red'
});
 
// outputs red text
console.log("this is an error".error);
 
// outputs yellow text
console.log("this is a warning".warn);

const chalk = require('chalk');
 
console.log(chalk.blue('Hello world!'));

//const chalk = require('chalk');
const log = console.log;
 
// Combine styled and normal strings
log(chalk.blue('Hello') + ' World' + chalk.red('!'));
 
// Compose multiple styles using the chainable API
log(chalk.blue.bgRed.bold('Hello world!'));
 
// Pass in multiple arguments
log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));
 
// Nest styles
log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));
 
// Nest styles of the same type even (color, underline, background)
log(chalk.green(
    'I am a green line ' +
    chalk.blue.underline.bold('with a blue substring') +
    ' that becomes green again!'
));
 
// ES2015 template literal
log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);
  
// Use RGB colors in terminal emulators that support it.
log(chalk.keyword('orange')('Yay for orange colored text!'));
log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'));
log(chalk.hex('#DEADED').bold('Bold gray!'));
 


var clc = require("cli-color");
var error = clc.red.bold;
var warn = clc.yellow;
var notice = clc.blue;
 
console.log(error("Error!"));
console.log(warn("Warning"));
console.log(notice("Notice"));
var msg = clc.xterm(202).bgXterm(236);
console.log(msg("Orange text on dark gray background"));*/

//console.log(process.argv);
//console.log(process.argv[1]);



let route = process.argv[2];

const fs = require('fs');
//const referencesLinks = /\((http[^)]+)\)/g;
const colors = require('colors');
const path = require("path");
//console.log(path.resolve(route));


//FUNCION VALIDAR LO QUE INGRESA EL USUARIO EN LA TERMINAL//
const validateInput = () =>{
  console.log('1');
  if((process.argv[2] === undefined)){
    let route = __dirname;
    console.log('ENTRO')//BORRAR
    return route;
  }if((process.argv[2] === './')){
    let route = __dirname;
    console.log('ENTRO2')//BORRAR
    return route;
  }if (path.extname(process.argv[2]) === '.md'){
  console.log('es un archivo extension .md')//BORRAR
  }else{
    console.log('Ingresa un directorio o archivo valido'.rainbow)
  }
}
validateInput();

//funcion que entra en la carpeta//
/*const enterFolder = (route) => {
  return new Promise((resolve, reject) => {
    fs.readdir(route, (err, files) => {
      if (err) {
        reject(err)
      } else {
        resolve(files)
      }
    })
  });
}

//Funcion que busca el archivo extension .md//
const searchMd = () => {
  enterFolder(path.resolve()).then(archivos => {
    console.log(archivos);
    archivos.forEach((archivo)=> {
    if(path.extname(archivo) === '.md'){
      console.log(archivo)
    }else {
      console.log('El directorio no contiene archivos extension .md')
    }
  })
  })
}
  searchMd();*/







/*const readSaveLinks = () => {
  //console.log('hola')
return new Promise((resolve,reject) => {
fs.readFile(path,'utf-8',(err,data) => {
  if(err){
    console.log(err)
  }else{
    //console.log(data)
    //console.log(path)
    let linksArchive = []
    const allLinks = data.match(referencesLinks)
    allLinks.forEach(obj=>{
      linksArchive.push(obj.replace(/[\[\(\)\]]/g, ''))
    })
    console.log(linksArchive);
  }
})
})
}
readSaveLinks()*/



/*const colors = require('colors');
const fs = require('fs');


const read = (path) => {
  fs.readFile('./README.md', 'utf-8', (err, data) => {
    if (err) {
      console.log(err)
    }
    console.log('Archivo leído'.rainbow);
    console.log(data.toString());
    return data;
  })
}

read('hola')*/

