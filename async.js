const { readFile, writeFile } = require('fs');

readFile('./contente/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    const first = result;
    readFile('./contente/text.txt', 'utf8', (

        err, result) => {
        if (err) {
            console.log(err);
            return
        }
        const text = result
        writeFile('./contente/theird.txt', `le nouveau resultat est : ${text},${first}`, (err, result) => {
            if (err) {
                console.log(err);
                return
            }
            console.log(result);
        })
    })
})