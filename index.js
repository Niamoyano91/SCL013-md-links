
//console.log(process.argv);
//console.log(process.argv[1]);



//let route = process.argv[2];

const fs = require('fs');
const referencesLinks = /\[.*(http[^)]+)\)/g;
const colors = require('colors');
const path = require("path");
const chalk = require('chalk')
//console.log(path.resolve(route));


//funcion que valida lo que ingresa usuario en la terminal//
const validateInput = () => {
  if ((process.argv[2] === undefined)) {
    let route = __dirname;
 
    console.log(chalk.keyword('orange')('No igresaste nada, pero nuestra librería se ejecutó por defecto'))//BORRAR
     
    console.log(chalk.keyword('red')("   /////////////\\\\ "));
    console.log(chalk.keyword('red')("  (((((((((((((( \\\\"));
    console.log(chalk.keyword('red')(" ))) ~~      ~~  ((("));
    console.log(chalk.keyword('red')(" ((( (*)     (*) )))"));
    console.log(chalk.keyword('red')(" )))     <       ((("));
    console.log(chalk.keyword('red')(" ((( '\______/`   )))"));
    console.log(chalk.keyword('red')(" )))\___________/ ((("));
    console.log(chalk.keyword('red')("        _) (_       "));
    console.log(chalk.keyword('red')("       / \_/ \      "));
    console.log(chalk.keyword('red')("      /(     )\     "));
    console.log(chalk.keyword('red')("     // )___( \\    "));
    console.log(chalk.keyword('red')("     \\(     )//    "));
    console.log(chalk.keyword('red')("      (       )     "));
    console.log(chalk.keyword('red')("       |  |  |      "));
    console.log(chalk.keyword('red')("        | | |       "));
    console.log(chalk.keyword('red')("        | | |       "));
    console.log(chalk.keyword('red')("       _|_|_|_      "));
    
    return route;
  } if ((process.argv[2] === './')) {
    let route = __dirname;
    console.log('No ingresaste una ruta específica, pero nuestra librería asume que quisiste entrar a la carpeta actual')//BORRAR
    return route;
  } if (path.extname(process.argv[2]) === '.md') {
    let route = process.argv[2]
    console.log('es un archivo extension .md');//BORRAR
    return route;
  } else {
    console.log('Ingresa ruta de un directorio o archivo valido'.rainbow)
  }
}
validateInput();


//funcion que entra en la carpeta//
const enterFolder = (route) => {
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
    archivos.forEach((file) => {
      if (path.extname(file) === '.md') {
        readSaveLinks(file)
      }
    })
  })
}
searchMd();


//Funcion que extrae links//
const linksArchive = []
const readSaveLinks = (e) => {
  return new Promise((resolve, reject) => {
    fs.readFile(e, 'utf-8', (err, data) => {
      const allLinks = data.match(referencesLinks)
      console.log(allLinks)
      allLinks.forEach(obj => {
        linksArchive.push({
          href: obj.replace(/^'\[(.*?)\]/g),
          text: obj.replace(/(?:https):\/\/(?:[^\/\r\n]+)(\/[^\r\n]*)?/g)
        }
        )
      })
      console.log(linksArchive);
    })
  })
}





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

