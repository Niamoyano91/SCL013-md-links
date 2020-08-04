const searchMd = require('./index')
const path = require("path");
const colors = require('colors');

let stats = false;
let validate = false;
let help = false;


//funcion que valida lo que ingresa usuario en la terminal//




const flags = () => {
    if (process.argv.includes('--validate') || process.argv.includes('--v')) {
        validate = true;
        stats = false;
        help = false;
        searchMd
        console.log(validate,stats,help)
        console.log('ENTRO EL FLAGS --V')
    } if (process.argv.includes('--stats') || process.argv.includes('--s')) {
        validate = false;
        stats = true;
        help = false;
        console.log('ENTRO EL FLAGS --S')
    } if ((process.argv.includes('--validate') && process.argv.includes('--status')) || ((process.argv.includes('--v') && process.argv.includes('--s')))) {
        validate = true;
        stats = true;
        help = false;
        console.log('ENTRO EL FLAGS --S & --V')
    } if (process.argv.includes('--h') || process.argv.includes('--help')) {
        help = true;
        validate = false;
        stats = false;
    }    if ((process.argv[2] === './ ')|| (process.argv[2] === undefined)) {
        let route = __dirname;
        process.argv[2]= './'
        searchMd
        console.log('ENTRO2');//CHARLIE//
        return
      } if (path.extname(process.argv[2]) === '.md') {
        let route = process.argv[2];
        searchMd;
        console.log('es un archivo extension .md');//CHARLIE//
        return
      } else {
        console.log('Ingresa ruta de un directorio o archivo valido'.rainbow);
        return
      }
}
flags()


