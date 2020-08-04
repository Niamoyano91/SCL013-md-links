const fs = require('fs');
const referencesLinks = /\[([^\]]*)\]\(([^)]*)\)/g;

const path = require("path");
const chalk = require('chalk')
//const fetch = require('fetch');
//const fetchUrl = fetch.fetchUrl;
const fetch = require("node-fetch");

//console.log(path.resolve(route));


//funcion que valida lo que ingresa usuario en la terminal//
const validateInput = () => {
  if ((process.argv[2] === undefined)) {
    let route = __dirname;
 
    console.log (chalk.keyword('magenta')("               ____"));
    console.log (chalk.keyword('magenta')("             o8%8888,"));
    console.log (chalk.keyword('magenta')("           o88%8888888."));
    console.log (chalk.keyword('magenta')("          8'-    -:8888b"));
    console.log (chalk.keyword('magenta')("         8'         8888"));
    console.log (chalk.keyword('magenta')("        d8.-=. ,==-.:888b"));
    console.log (chalk.keyword('magenta')("        >8 `~` :`~' d8888"));
    console.log (chalk.keyword('magenta')("        88         ,88888"));
    console.log (chalk.keyword('magenta')("        88b. `-~  ':88888"));
    console.log (chalk.keyword('magenta')("        888b ~==~ .+:88888"));
    console.log (chalk.keyword('magenta')("        88888o--:':::8888"));
    console.log (chalk.keyword('magenta')("        `88888| :::' 8888b"));
    console.log (chalk.keyword('magenta')("       d888           ,%888b."));
    console.log (chalk.keyword('magenta')("      d88%            %%%8--'-."));
    console.log (chalk.keyword('magenta')("     /88:.__ ,       _%-' ---  -"));
    console.log (chalk.keyword('magenta')("    '''::===..-'   =  --.  `"));

    console.log (chalk.rgb(238, 19, 111).underline('No ingresaste nada,'));
    console.log (chalk.rgb(115, 19, 238).bgBlack('pero nuestra librería se ejecutó por defecto'));
   
  return route;
  } if ((process.argv[2] === './')) {
    let route = __dirname;   
console.log (chalk.keyword('orange')("                    ____"));
console.log (chalk.keyword('orange')("                  o8%8888,                           .-----."));
console.log (chalk.keyword('orange')("                o88%8888888.                       .'       `."));
console.log (chalk.keyword('orange')("              8'-    -:8888b                     .'..    :. `."));
console.log (chalk.keyword('orange')("             8'         8888                    .'           |"));
console.log (chalk.keyword('orange')("            d8.-=. ,==-.:888b                   |.-=. ,==-.: |"));
console.log (chalk.keyword('orange')("            >8 `~` :`~' d8888                   | `~` :`~'   :"));
console.log (chalk.keyword('orange')("            88         ,88888                    `.        , :"));
console.log (chalk.keyword('orange')("            88b. `-~  ':88888                     `. `-~  '::|"));
console.log (chalk.keyword('orange')("            888b v=v~ .:88888                      `.~==~ .::|"));
console.log (chalk.keyword('orange')("            88888o--:':::8888                        `--:'::::"));
console.log (chalk.keyword('orange')("            `88888| :::' 8888b                       | :::' `."));
console.log (chalk.keyword('orange')("            8888^^'       8888b                 _.-'           "));
console.log (chalk.keyword('orange')("           d888           ,%888b.            .':                `.."));
console.log (chalk.keyword('orange')("          d88%            %%%8--'-.         / .'               .--'-."));
console.log (chalk.keyword('orange')("         /88:.__ ,       _%-' ---  -       /  :.__ ,       _%-' ---  -"));
console.log (chalk.keyword('orange')("        '''::===..-'   =  --.  `          '''::===..-'   =  --.  `"));

console.log (chalk.rgb(238, 19, 45).underline('No ingresaste una ruta específica,'));
console.log (chalk.rgb(238, 137, 19).bgBlack('pero nuestra librería asume que quisiste entrar a la carpeta actual'));//BORRAR
    return route;
  } if (path.extname(process.argv[2]) === '.md') {
    let route = process.argv[2]
    console.log('es un archivo extension .md'.rainbow);//BORRAR
    return route;
  } else {
    console.log(msg('Ingresa ruta de un directorio o archivo valido'));
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
const fetch = require("node-fetch");



//Funcion Integradora que busca el archivo extension .md//
const searchMd = () => {
  enterFolder(path.resolve()).then(archivos => {
    archivos.forEach((archivo) => {
      if (path.extname(archivo) === '.md') {
        readSaveLinks(archivo)
      }
    })
  })
}


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


//Funcion que extrae links//

const readSaveLinks = (e) => {
  const linksArchive = []
  return new Promise((resolve, reject) => {
    fs.readFile(e, 'utf-8', (err, data) => {
      if (err) {
        reject(err)
      } else {
        const allLinks = data.match(referencesLinks);
        allLinks.forEach(obj => {
          linksArchive.push({
            href: obj.split('](')[1].slice(0, -1),
            text: obj.split('](')[0].slice(1),
            file: e
          })
        })
        validateLinks(linksArchive)
        resolve(linksArchive)
      }
    })
  })
}
 //valida el estado de los links//
const validateLinks = (links) => {
  links.map(actualLink => {
    //console.log(actualLink.href)
    fetch(actualLink.href)
      .then(response => {
        if (response.status === 200) {
          console.log('Link: ' + actualLink.href + ' ' + 'Estado: ' + response.statusText + ' ' + response.status)//CHARLIE//
        } else {
          console.log('Link: ' + actualLink.href + ' ' + 'Estado: ' + response.statusText + ' ' + response.status)//CHARLIE//

        }


      })
  })
}




module.exports = {
  searchMd: searchMd(),
}




