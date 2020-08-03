
//console.log(process.argv);
//console.log(process.argv[1]);



//let route = process.argv[2];

const fs = require('fs');
const referencesLinks = /\[([^\]]*)\]\(([^)]*)\)/g;
const colors = require('colors');
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
    archivos.forEach((archivo) => {
      if (path.extname(archivo) === '.md') {
        readSaveLinks(archivo)
      }
    })
  })
}
searchMd();

/*const linkUrl = (url) => {
  return new Promise((resolve, reject) => {
    fetchUrl(url, (err, meta, body) => {
      if (err) {
        reject(err)
      } else {
        resolve(meta)
      }
    })
  })
};*/



//Funcion que extrae links//
const linksArchive = []
const readSaveLinks = (e) => {
  return new Promise((resolve, reject) => {
    fs.readFile(e, 'utf-8', (err, data) => {
      const allLinks = data.match(referencesLinks);
      allLinks.forEach(obj => {
        linksArchive.push({
          href: obj.split('](')[1].slice(0, -1),
          text: obj.split('](')[0].slice(1),
          file: e
        })
      })
      console.log(validate(linksArchive))
     
      /*linksArchive.map(actualLink => {
        console.log(actualLink.href)
        fetch(actualLink.href)
          .then(response => {
            if( response.status === 200){
              console.log( actualLink.href + ' ' + response.statusText + ' ' + response.status)
            }else{
              console.log( actualLink.href + ' ' + response.statusText + ' ' + response.status)

            }


          })
      })*/
    })
  })
}

const validate = (links) =>{
  links.map(actualLink => {
    console.log(actualLink.href)
    fetch(actualLink.href)
      .then(response => {
        if( response.status === 200){
          console.log( 'Link: '+actualLink.href + ' ' +'Estado: '+ response.statusText + ' ' + response.status)
        }else{
          console.log( 'Link: '+actualLink.href + ' ' +'Estado: '+ response.statusText + ' ' + response.status)

        }


      })
  })
}





/* const nameFile = data
 .match(referencesLinks)
 .map((obj) => console.log(obj.split('](')[0].slice(1)));
 const link = data
 .match(referencesLinks)
 .map((obj) => console.log(obj.split('](')[1].slice(0, -1)));
 link.forEach((linkk, j) =>
 arrayInfo.push({
   href: linkk,
   text: nameFile[j],
   file: e
 })
 )
 console.log(arrayInfo)*/



/*allLinks.forEach(links => {
  linksArchive.push(links.replace(/[\[\(\)\]]/g, ''))
  })
  console.log(linksArchive);
  linksArchive
  linksArchive.map(url => {
    linkUrl(url)
  .then(checkedStatus => {
    if(checkedStatus.status === 200){
      console.log(url.split(0, 51), ' OK ', checkedStatus.status)
    }else{
      console.log(url.split(0, 51), ' FAIL ', checkedStatus.status)

    }
  })
}) */








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

