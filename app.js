const fs = require("fs");

const Reader = require("./Reader");

async function main(){
    var leitor = new Reader();
    var ret = await leitor.Read("./txt/planilha.csv");
    console.log(ret);
};

main();


