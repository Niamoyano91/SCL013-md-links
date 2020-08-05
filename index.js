const fs = require('fs');
const referencesLinks = /\[([^\]]*)\]\(([^)]*)\)/g;
const path = require("path");
const chalk = require('chalk');
const fetch = require("node-fetch");
const asciify = require('asciify-image');
const figlet = require ('figlet');
const { height } = require('cli-color/window-size');
let stats = false;
let validate = false;
let help = false;


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
  const filteredLinks = links.filter(link => link.href.includes('http'));
  filteredLinks.map(actualLink => {
    console.log(actualLink.href)
    fetch(actualLink.href)
      .then(response => {
        if (response.status === 200) {
          console.log(chalk.rgb(251, 153, 7).bgBlack('Link: ' + actualLink.href)); 
          console.log(chalk.rgb(195, 39, 67).bgBlack('Estado: ' + response.statusText));
          console.log(chalk.rgb(251, 86, 7).bgBlack(response.status));//CHARLIE//
        } else {
          //console.log('Link: ' + actualLink.href + ' ' + 'Estado: ' + response.statusText + ' ' + response.status)//CHARLIE//

        }


      })
      .catch(error => console.log(error))
  })
}

const commandHelp = () => {
  
  const options = {
    fit:   'box',
    width:  20,
    height: 20,
    align: 'center'
  }
  asciify('./img/logomdlinks.png', options, function (err, asciified) {
    if (err) throw err;
    
    console.log(asciified);
  });
  setTimeout(() => {
    figlet('Bienvenido \n \n \n \n Dev',{
  
  
  },(err,result)=>{
      console.log(err || result)
  });
   }, 1000);
  
  setTimeout(() => { 
    console.log(`  ${chalk.rgb(242, 130, 26).bgBlack('Para comenzar, por favor especifica una ruta')}\n`);
    console.log(`  ${chalk.rgb(242, 182, 26)('cn-mdlinks')} ${chalk.rgb(77, 147, 211)('<ruta>')}\n`);
    console.log(`  ${chalk.rgb(242, 130, 26).bgBlack('🡲 Por ejemplo:')}\n`);
    console.log(`  ${chalk.rgb(77, 203, 211)('cn-mdlinks')}\n`);
    console.log(`  ${chalk.rgb(77, 203, 211)('p-mdlinks')} ${chalk.rgb(121, 26, 242)('./')}\n`);
    console.log(`  ${chalk.rgb(77, 203, 211)('p-mdlinks')} ${chalk.rgb(121, 26, 242)('./README.md')}\n`);
    
    console.log(`  ${chalk.rgb(41, 188, 38)('Usa --v para: ')}${chalk.rgb(167, 188, 38)('mostrar el estado de los links')}\n`);
    console.log(`  ${chalk.rgb(41, 188, 38)('Usa --s para: ')}${chalk.rgb(167, 188, 38)('ver estadísticas')}\n`);
  }, 2000);
 
}
commandHelp()




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