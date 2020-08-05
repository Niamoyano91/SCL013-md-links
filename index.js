const fs = require('fs');
const referencesLinks = /\[([^\]]*)\]\(([^)]*)\)/g;
const path = require("path");
const fetch = require("node-fetch");
let stats = false;
let validate = false;
let help = false;


//Funcion Integradora que busca el archivo extension .md//
/*const searchMd = () => {
enterFolder(path.resolve()).then(files => {
files.forEach((file) => {
if (path.extname(file) === '.md') {
(readSaveLinks(file))
}
})
})
};*/


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
};


//Funcion que extrae links//

/*const readSaveLinks = (e) => {
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
};*/

const mdLinks = (validate,stats) => {
  //return Promise.resolve('AQUI')
  return new Promise((resolve, reject) => {
  enterFolder(path.resolve()).then(files => {
    files.forEach((file) => {
      if (path.extname(file) === '.md') {
        
          fs.readFile(file, 'utf-8', (err, data) => {
            if (err) {
              return reject(err);
            }
            const linksArchive = []
            const allLinks = data.match(referencesLinks);
            allLinks.forEach(obj => {
              linksArchive.push({
                href: obj.split('](')[1].slice(0, -1),
                text: obj.split('](')[0].slice(1),
                file: file
              })
            })
           if (validate === true && stats === true) {
            statusLinksBroken(linksArchive)
            statusLinks(linksArchive)
            console.log('STATS')
            return
           }else if (validate === false && stats === false) {
              console.log(validate)
              resolve(linksArchive);
              return 
            } else if (validate === true && stats === false) {
              console.log('else if', validate)
              validateLinks(linksArchive).then(a=>console.log(a))
              return
            } else if (stats === true && validate === false) {
              statusLinks(linksArchive)
              console.log('STATS')
              return
            } 

          })
      }
    })
  })
})
}


//valida el estado de los links//
const validateLinks = (links) => {
  return new Promise((resolve, reject) => {
    links.map(actualLink => {
      //console.log(actualLink.href)
      fetch(actualLink.href)
        .then(response => {
          console.log(response.url)
          if (response.status) {
            resolve('Link: ' + actualLink.href + ' ' + 'Estado: ' + response.statusText + ' ' + response.status + '  ' + actualLink.text)//CHARLIE//
          } else {
            reject(err)
          }
        })
    })
  })
}


const statusLinks = (links) => {
  let numOfLinks = [];
  links.forEach(element => {
    numOfLinks.push(element.href);
  });
  let uniqueLinks = new Set(numOfLinks);
  console.log(
    ' Total: ' + numOfLinks.length,
    '\n', 'Unique: ' + uniqueLinks.size
  );
}

const statusLinksBroken = (links) => {
  return new Promise ((resolve, reject)=> {
    let allLinks = [];
    let countBroken = 0;
    links.forEach((link)=> {allLinks.push(fetch(link.href)
      .then(response => {
        return {
        ...link,
        status: response.status
        }
      })
      .catch((err)=> {
        return {
          ...link,
          status: `Fail 404, ${err.message}`
        }
      }))
    })
    resolve(Promise.all(allLinks))
  })
  .then(resolve => {
    const countBroken= resolve.filter(link =>link.status!= 200)
    const linksBroken= [];
    linksBroken.push(countBroken.length)
    console.log(' Broken: ',countBroken.length)
  })
  };




module.exports = {
  mdLinks: mdLinks,
  stats: stats,
  validate: validate,
  validateLinks: validateLinks
}