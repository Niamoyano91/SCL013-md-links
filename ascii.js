const colors = require('colors');
const { rainbow } = require('cli-color/beep');

const mona = [
    "         ____",
    "        o8%8888,",
    "      o88%8888888.",
    "     8'-    -:8888b",
    "    8'         8888",
    "   d8.-=. ,==-.:888b",
    "   >8 `~` :`~' d8888",
    "   88         ,88888",
    "   88b. `-~  ':88888",
    "   888b ~==~ .:88888",
    "   88888o--:':::8888",
    "   `88888| :::' 8888b",
    "   8888^^'       8888b",
    "  d888           ,%888b.",
    " d88%            %%%8--'-.",
    "/88:.__ ,       _%-' ---  -",
    "    '''::===..-'   =  --.  `",
    ]
    console.log(mona)

    const buda = [
      "                _ooOoo_",
      "               o8888888o",
      "               88\" . \"88",
      "               (| -_- |)",
      "               O\\  =  /O",
      "            ____/`---'\\____",
      "          .'  \\\\|     |//  `.",
      "         /  \\\\|||  :  |||//  \\",
      "        /  _||||| -:- |||||_  \\",
      "        |   | \\\\\\  -  /'| |   |",
      "        | \\_|  `\\`---'//  |_/ |",
      "        \\  .-\\__ `-. -'__/-.  /",
      "      ___`. .'  /--.--\\  `. .'___",
      "   .\"\" '<  `.___\\_<|>_/___.' _> \\\"\".",
      "  | | :  `- \\`. ;`. _/; .'/ /  .' ; |",
      "  \\  \\ `-.   \\_\\_`. _.'_/_/  -' _.' /",
      "===`-.`___`-.__\\ \\___  /__.-'_.'_.-'===",
      "                `=--=-'    "
      ]

    console.log(buda,"Welcome Dev".rainbow);
    console.log(".oOo.oOo.oOo.oOo.oOo.oOo.oOo.oOo.oOo.oOo.oOo.oOo.oOo.oOo.oOo.".rainbow)

    const fractal = [ 
    "  |   \      ____        / |",
    "  __    |    \    /\   |      /  ;",
    " /\  \  |     \  /  \  |     /  ;",
    "/,'\  \ |      \/  : \ |    /   ;",
    "~  ;   \|      /   :  \|   /   ;",
    "   |    \     /   :'  |   /    ;",
    "   |     \   /    :   |  /    ;",
    "   |      \ /    :'   | /     ;",
    "   |       /     :    |/     ;",
    "   |      /     :'    |      ;",
    "    \    /      :     |     ;",
    "     \  /      :'     |     ;",
    "      \       :'      |    ;",
    "       \______:_______|___;",
    ]
    
console.log(fractal)

const asciify = require('asciify-image');

const options = {
  fit:    'box',
  width:  30,
  height: 30,
  align: 'center'
}

asciify('https://raw.githubusercontent.com/Carlareneedc/SCL013-burger-queen/master/src/assets/images/logo.png', options, function (err, asciified) {
  if (err) throw err;

  // Print to console
  console.log(asciified);
});
    