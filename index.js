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

console.log(process.argv);

let file = process.argv[2];
const fs = require('fs');
const referencesLinks = /\((http[^)]+)\)/g;
const colors = require('colors');
const path = require("path");


const searchMd = (file, options) => {

if(path.extname(file) === '.md') {//El método path.extname () devuelve la extensión de una ruta de archivo.
route = path.resolve(file)//guardamos la ruta
route = path.normalize(file)
console.log(route);
return route
}else{
  console.log('Tu directorio no contiene archivos MD');
}

}

searchMd(file)

/*fs.readdir(path, (err,archivos) => {
  archivos.forEach(archivo => {
    if(archivo.includes('md') {
      console.log(archivo)
    
    }
  })
}*/















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















