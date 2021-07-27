/*const amount = 10;
if (amount > 10) {
    console.log("large nomber!")
} else {
    console.log("small number");
}
console.log("hey thi is first programme on node.js");
console.log(__dirname + " this is my name");
console.log(__filename + " this is my real name and fuck you !");
/*setInterval(() => {
    console.log("this is my ass")
}, 1000);*/
// console.log(process);
//console.log(module);
//console.log(require);
//console.log(global);




const names = require('./les-variables');
console.log(names);
const fonctionDeux = require('./les-fonctions');
require('./nouvelleFonction');



//maFonction();

//fonctionUn('farouk');


fonctionDeux(names.d);
fonctionDeux(names.c);



//fonctionTrois();