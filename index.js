const fs = require('fs');
const referencesLinks = /\[([^\]]*)\]\(([^)]*)\)/g;

const path = require("path");
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




