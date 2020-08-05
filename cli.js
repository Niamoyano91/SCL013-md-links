const mdLinks = require('./index');
let validate = require('./index');
let stats = require('./index');
const path = require("path");
const colors = require('colors');



//funcion que valida lo que ingresa usuario en la terminal//
const flags = () => {
  if (process.argv.includes('--h') || process.argv.includes('--help')) {
    help = true;
    validate = false;
    stats = false;
    return
  } if ((process.argv.includes('--validate') && process.argv.includes('--status')) ||
    ((process.argv.includes('--v') && process.argv.includes('--s')))) {
    validate = true;
    stats = true;
    help = false;
    mdLinks.mdLinks(validate, stats).then(A=> console.log(A))
    console.log('ENTRO EL FLAGS --S & --V')
    return
  } if (process.argv.includes('--stats') || process.argv.includes('--s')) {
    stats = true;
    validate = false;
    help = false;
    mdLinks.mdLinks(validate, stats).then(A=> console.log(A))
    console.log(validate, stats, help)
    console.log('ENTRO EL FLAGS --S')
    return
  } else if (process.argv.includes('--validate') || process.argv.includes('--v')) {
    validate = true;
    stats = false;
    help = false;
    console.log(validate)
    mdLinks.mdLinks(validate, stats).then(A=> console.log(A))
    console.log(validate, stats, help)
    console.log('ENTRO EL FLAGS --V')
    return
  } else if ((process.argv[2] === './') || (process.argv[2] === undefined)) {
    validate = false;
    stats= false;
    let route = __dirname;
    process.argv[2] = './'
    mdLinks.mdLinks(validate, stats).then(A=> console.log(A))
    console.log('ENTRO2');//CHARLIE//
    return
  } else if (path.extname(process.argv[2]) === '.md') {
    validate= true
    let route = process.argv[2];
    mdLinks.mdLinks(validate).then(A=> console.log(A))
    console.log('es un archivo extension .md');//CHARLIE//
    return
  } else {
    console.log('Ingresa ruta de un directorio o archivo valido'.rainbow);
    return
  }
}
flags()
