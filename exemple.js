console.log('Je suis le module principal');

for (let i = 0; i < 5; i++) {
    console.log(`C'est la pause`);
}

// La méthode require permet de charger le code d'un module
// Ici le . est les chemin absolu du dossier dans lequel se trouve ce module
console.log('-- Exécution du Premier Require :');
const sortieDeRequire = module.require('./exemple-module-secondaire.js');

console.log('sortie de require dans le module principal :', sortieDeRequire);
// Le code au sein du module secondaire n'est exécuté qu'une seule fois (même
// si on le requiert 2 fois)
console.log('-- Exécution du Second Require :');
const sortieDu2emeRequire = module.require('./exemple-module-secondaire.js');

console.log('sortie du 2ème require dans le module principal :', sortieDu2emeRequire);

console.log(sortieDeRequire.leMessageDuModuleSecondaire);

sortieDeRequire.tagadaTsouinTsouin();
sortieDeRequire.tagadaTsouinTsouin();
sortieDeRequire.tagadaTsouinTsouin();
sortieDeRequire.tagadaTsouinTsouin();
sortieDeRequire.tagadaTsouinTsouin();
sortieDeRequire.tagadaTsouinTsouin();


const sortieDuRequirePourLeFichierJSON = module.require('./exemple-module-format-json.json');

console.log('Sortie de require pour le format json', sortieDuRequirePourLeFichierJSON);

sortieDuRequirePourLeFichierJSON.unNombre;
sortieDuRequirePourLeFichierJSON['unNombre']; // identique à la notation au dessus
sortieDuRequirePourLeFichierJSON['autre message']; // seule notation autorisée à cause de l'espace

// Si le module est dans le dossier "magique" node_modules, le nom de fichier
// (sans l'extension) suffit
module.require('exemple-module-tertiaire');
// Si le module est dans un sous-dossier du dossier "magique" node_modules et
// que ce sous-dossier contient un fichier index.js, le nom du sous-dossier
// suffit.
require('exemple-module-quaternaire');

// On peut utiliser des module natif de de node
// Par exemple le module filesystem :
const laValeurExportéeDuModuleFileSystem = module.require('fs');

// console.log(laValeurExportéeDuModuleFileSystem);
console.log('Lancement de la création d\'un fichier :');
// Exécution d'une méthode Asynchrone
laValeurExportéeDuModuleFileSystem.writeFile('./test.txt', 'Ceci est un test', function(unArgumentPourErreur) {
    // Cette fonction est exécuté dans le futur quand le fichier est enfin créé sur le disque.
    console.log('Ce callback est exécuté parceque le fichier test.txt est créé');
});
// Node n'attend pas de savoir si le fichier à été créé pour exécuter la ligne suivante.
console.log('Après le lancement !');

/**
 * Buffer : tableau d'octets
 * Type de données utilisé pour
 * - stocker/lire des données du système de fichier
 * - lire des données en provenance du réseau ou en écrire sur le réseau.
 */
const texteEnOctets = Buffer.from('Ceci est un texte');

console.log('Texte en UTF-8 converti en octets :', texteEnOctets);

console.log('Texte en octets converti en texte en UTF-8 :', texteEnOctets.toString());

laValeurExportéeDuModuleFileSystem.writeFile('./autre-test.txt', texteEnOctets, function(unArgumentPourErreur) {
    // Cette fonction est exécuté dans le futur quand le fichier est enfin créé sur le disque.
    console.log('Ce callback est exécuté parceque le fichier autre-test.txt est créé');
});