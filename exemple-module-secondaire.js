console.log('*** Début du code du module secondaire ***');
console.log('Je suis le module secondaire !');

let message = 'Message créé au sein du module secondaire';

module.exports.toto = 'tonton';

console.log('module.exports dans le module secondaire :', module.exports);

module.exports.leMessageDuModuleSecondaire = message;

module.exports.tagadaTsouinTsouin = function(){
  console.log('Tagada Tsouin Tsouin');
}

console.log('*** Fin du code du module secondaire ***');

exports.autreValeur = 'test';