const mdLinks = require('./index');
let validate = require('./index');
let stats = require('./index');
const path = require("path");
const colors = require('colors');
const chalk = require('chalk');
const asciify = require('asciify-image');
const figlet = require ('figlet');
const { height } = require('cli-color/window-size');



//funcion que valida lo que ingresa usuario en la terminal//
const flags = () => {
  if (process.argv.includes('--h') || process.argv.includes('--help')) {
    help = true;
    validate = false;
    stats = false;
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
      console.log(`  ${chalk.rgb(77, 203, 211)('cn-mdlinks')} ${chalk.rgb(121, 26, 242)('./')}\n`);
      console.log(`  ${chalk.rgb(77, 203, 211)('cn-mdlinks')} ${chalk.rgb(121, 26, 242)('./README.md')}\n`);
      
      console.log(`  ${chalk.rgb(41, 188, 38)('Usa --v para: ')}${chalk.rgb(167, 188, 38)('mostrar el estado de los links')}\n`);
      console.log(`  ${chalk.rgb(41, 188, 38)('Usa --s para: ')}${chalk.rgb(167, 188, 38)('ver estadísticas')}\n`);
    }, 2000);
    return
  } if ((process.argv.includes('--validate') && process.argv.includes('--status')) ||
    ((process.argv.includes('--v') && process.argv.includes('--s')))) {
    validate = true;
    stats = true;
    help = false;
    mdLinks.mdLinks(validate, stats).then(links=> console.log(links))
    setTimeout(() => {
      const options = {
        fit:   'box',
        width:  60,
        height: 30,
        align: 'center'
      }
      asciify('./img/unicornio3.png', options, function (err, asciified) {
        if (err) throw err;
        console.log(asciified);
      });
    }, 3000);

    return
  } if (process.argv.includes('--stats') || process.argv.includes('--s')) {
    stats = true;
    validate = false;
    help = false;
    mdLinks.mdLinks(validate, stats).then(links=> console.log(links))
    return
  } else if (process.argv.includes('--validate') || process.argv.includes('--v')) {
    validate = true;
    stats = false;
    help = false;
    mdLinks.mdLinks(validate, stats).then(links=> console.log(links))
    return
  } else if ((process.argv[2] === './') || (process.argv[2] === undefined)) {
    validate = false;
    stats= false;
    let route = __dirname;
    process.argv[2] = './'
    mdLinks.mdLinks(validate, stats).then(links=> console.log(links))//CHARLIE//
        console.log (chalk.rgb(154, 246, 108)   ("               ____"));
        console.log (chalk.rgb(140, 246, 109)   ("             o8%8888,"));
        console.log (chalk.rgb(127, 246, 110)   ("           o88%8888888."));
        console.log (chalk.rgb(114, 245, 112)   ("          8'-    -:8888b"));
        console.log (chalk.rgb(88, 245, 114)    ("         8'         8888"));
        console.log (chalk.rgb(0, 204, 102)     ("        d8.-=. ,==-.:888b"));
        console.log (chalk.rgb(24, 182, 102)    ("        >8 `~` :`~' d8888"));
        console.log (chalk.rgb(48, 159, 102)    ("        88         ,88888"));
        console.log (chalk.rgb(72, 137, 103)    ("        88b. `-~  ':88888"));
        console.log (chalk.rgb(96, 115, 103)    ("        888b ~==~ .+:8888"));
        console.log (chalk.rgb(121, 92, 103)    ("        88888o--:':::8888"));
        console.log (chalk.rgb(145, 70, 103)    ("        `88888| :::' 8888b"));
        console.log (chalk.rgb(169, 48, 104)    ("       d888           ,%888b."));
        console.log (chalk.rgb(193, 25, 104)    ("      d88%            %%%8--'-."));
        console.log (chalk.rgb(217, 3, 104)     ("     /88:.__ ,       _%-' ---  -"));
        console.log (chalk.rgb(217, 3, 104)     ("    '''::===..-'   =  --.  `"));
    
        console.log (chalk.rgb(154, 246, 108).underline('No ingresaste nada,'));
        console.log (chalk.rgb(217, 3, 104).bgBlack('pero nuestra librería se ejecutó por defecto'));
    return
  } else if (path.extname(process.argv[2]) === '.md') {
    validate = true;
    stats= false;
    let route = process.argv[2];
    mdLinks.mdLinks(validate,stats).then(links=> console.log(links))
        console.log (chalk.rgb(242, 0, 137)   ("                  ____"));
        console.log (chalk.rgb(229, 0, 164)   ("                o8%8888,                           .-----."));
        console.log (chalk.rgb(219, 0, 182)   ("              o88%8888888.                       .'       `."));
        console.log (chalk.rgb(188, 0, 221)   ("             8'-    -:8888b                     .'..    :. `."));
        console.log (chalk.rgb(177, 0, 232)   ("            8'         8888                    .'           |"));
        console.log (chalk.rgb(161, 0, 242)   ("           d8.-=. ,==-.:888b                   |.-=. ,==-.: |"));
        console.log (chalk.rgb(116, 0, 184)   ("           >8 `~` :`~' d8888                   | `~` :`~'   :"));
        console.log (chalk.rgb(105, 48, 195)  ("           88         ,88888                    `.        , :"));
        console.log (chalk.rgb(94, 96, 206)   ("           88b. `-~  ':88888                     `. `-~  '::|"));
        console.log (chalk.rgb(84, 144, 217)  ("           888b v=v~ .:88888                      `.~==~ .::|"));
        console.log (chalk.rgb(78, 168, 222)  ("           88888o--:':::8888                        `--:'::::"));
        console.log (chalk.rgb(72, 191, 227)  ("           `88888| :::' 8888b                       | :::' `."));
        console.log (chalk.rgb(86, 207, 225)  ("           8888^^'       8888b                 _.-'           "));
        console.log (chalk.rgb(100, 223, 223) ("         d888           ,%888b.            .':                `.."));
        console.log (chalk.rgb(114, 229, 221) ("        d88%            %%%8--'-.         / .'               .--'-."));
        console.log (chalk.rgb(128, 255, 219) ("       /88:.__ ,       _%-' ---  -       /  :.__ ,       _%-' ---  -"));
        console.log (chalk.rgb(140, 255, 222) ("      '''::===..-'   =  --.  `          '''::===..-'   =  --.  `"));
        console.log('                       Es un archivo extension .md'.rainbow);
    return
  } else {
    console.log(chalk.rgb(223, 18, 18)      ("=^..^=   =^..^=   =^..^=    =^..^=    =^..^=    =^..^=    =^..^="));
        console.log(chalk.rgb(251, 86, 7)   ("=^..^=   =^..^=   =^..^=    =^..^=    =^..^=    =^..^=    =^..^="));
        console.log(chalk.rgb(255, 190, 11) ("=^..^=   =^..^=   =^..^=    =^..^=    =^..^=    =^..^=    =^..^="));
        console.log(chalk.rgb(20, 96, 19)   ("          Ingresa ruta de un directorio o archivo valido"));
        console.log(chalk.rgb(26, 157, 186) ("=^..^=   =^..^=   =^..^=    =^..^=    =^..^=    =^..^=    =^..^="));
        console.log(chalk.rgb(28, 53, 187)  ("=^..^=   =^..^=   =^..^=    =^..^=    =^..^=    =^..^=    =^..^="));
        console.log(chalk.rgb(131, 56, 236) ("=^..^=   =^..^=   =^..^=    =^..^=    =^..^=    =^..^=    =^..^="));

    return
  }
}
flags()

