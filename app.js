const fs = require("fs");

const Reader = require("./Reader");
const Processor = require("./Processor");
const Table = require("./Table");
const HtmlParser = require("./HtmlParser");
const Writer = require("./Writer");
const PDFWriter = require("./PDFWriter");


async function main(){
    var leitor = new Reader();
    var ret = await leitor.Read("./txt/planilha.csv");
    var rHtml = cProc(ret);
    var escritor = new Writer();
    ret = escritor.Write("./txt/" + Date.now() + ".html", rHtml);
    if(ret){
        console.log("Gravação ok !");
        PDFWriter.Write("./txt/" + Date.now() + ".pdf", rHtml);
    } else {
        console.log("Falha de gravação !");
    };
};

function mainSync(){
    var leitor = new Reader();
    var ret = leitor.ReadSync("./txt/planilha.csv");
    //console.log(ret);
    var rHtml = cProc(ret);
    var escritor = new Writer();
    ret = escritor.WriteSync("./txt/" + Date.now() + ".html", rHtml);    
    if(ret){
        console.log("Gravação ok !");
        PDFWriter.Write("./txt/" + Date.now() + ".pdf", rHtml);
    } else {
        console.log("Falha de gravação !");
    };
};

function cProc(data){
    var rows = Processor.Process(data);
    //console.log(rows);
    var table = new Table(rows);
    //console.log(table);
    var rHtml = HtmlParser.Parse(table);
    return rHtml;
};

//console.log("Sync");
console.log("=============================");
//mainSync();
main();
