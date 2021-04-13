const fs = require("fs");

const Reader = require("./Reader");
const Processor = require("./Processor");


async function main(){
    var leitor = new Reader();
    var ret = await leitor.Read("./txt/planilha.csv");
    console.log(ret);
};

function mainSync(){
    var leitor = new Reader();
    var ret = leitor.ReadSync("./txt/planilha.csv");
    var rows = Processor.Process(ret);

    //console.log(ret);
}
console.log("Sync");
mainSync();
// console.log("========================");
// console.log("Async/Await");
// main();


