const fs = require("fs");

const Reader = require("./Reader");
const Processor = require("./Processor");
const Table = require("./Table");


async function main(){
    var leitor = new Reader();
    var ret = await leitor.Read("./txt/planilha.csv");
    cProc(ret);
};

function mainSync(){
    var leitor = new Reader();
    var ret = leitor.ReadSync("./txt/planilha.csv");
    cProc(ret);
}

function cProc(data){
    var rows = Processor.Process(data);
    var usuarios = new Table(rows);
    
}

console.log("Sync");
mainSync();
// console.log("========================");
// console.log("Async/Await");
// main();


