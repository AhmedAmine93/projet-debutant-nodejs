/*var tab = [];
var number = 1;

function fizzbazz() {
    for (var i = 1; i <= 99; i++) {
        if (number % 3 === 0 && number % 5 === 0) {
            tab.push("fizzbazz");
        } else if (number % 3 === 0) {
            tab.push("fizz");
        } else if (number % 5 === 0) {
            tab.push("bizz");
        } else { tab.push(number); }

        number++;
    }
    console.log(tab);



}
fizzbazz();
var a = 101;

function maFonction() {

}
/*
var a = document.querySelectorAll(".ProducTCard__price").textContent;
var b = document.querySelectorAll(".ProducTCard__title").textContent;


function makeItHappen(elem, elem2) {
    var el = document.getElementById(elem);
    el.style.backgroundColor = "red";
    var el2 = document.getElementById(elem2);
    el2.style.backgroundColor = "blue";
}

// Autoloading function to add the listeners:
var elem = document.getElementsByClassName("triggerClass");

for (var i = 0; i < elem.length; i += 2) {
    (function() {
        var k = i + 1;
        var boxa = elem[i].parentNode.id;
        var boxb = elem[k].parentNode.id;
        elem[i].addEventListener("click", function() { makeItHappen(boxa, boxb); }, false);
        elem[k].addEventListener("click", function() { makeItHappen(boxb, boxa); }, false);
    }()); // immediate invocation
}*/
var os = require('os');
const user = os.userInfo();
console.log(user);
console.log(`the sustem uptime is ${os.uptime()} seconds`);
const bassasOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
    b: os.cpus(),
    a: os.arch(),
    c: os.version(),
    d: os.userInfo(),
    e: os.hostname(),
    ifaces: os.networkInterfaces(),

}
console.log(bassasOs);
var os = require('os');
var ifaces = os.networkInterfaces();

Object.keys(ifaces).forEach(function(ifname) {
    var alias = 0;

    ifaces[ifname].forEach(function(iface) {
        if ('IPv4' !== iface.family || iface.internal !== false) {
            // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
            return;
        }

        if (alias >= 1) {
            // this single interface has multiple ipv4 addresses
            console.log(ifname + ':' + alias, iface.address);
        } else {
            // this interface has only one ipv4 adress
            console.log(ifname, iface.address);
        }
        ++alias;
    });
});
const path = require('path');
console.log(path.sep);
console.log(path.dirname);
const file = path.join('/contente', 'text.text');
console.log(file);
const base = path.basename(file);
console.log(base);
const absolut = path.resolve(__dirname, 'contente', 'text.text');
console.log(absolut);
const { readFileSync, writeFileSync } = require('fs');
const first = readFileSync('./contente/first.txt', 'utf8');
const seconde = readFileSync('./contente/text.txt', 'utf8');
console.log(first, seconde);
writeFileSync('./contente/theird.txt', `c'est le troisiéme texte: ${first}, ${seconde}`);