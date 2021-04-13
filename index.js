const fs = require("fs");

fs.readFile("./txt/arquivo.txt",{encoding: "utf-8"},(err, data) =>{
    if(!err){
        console.log(data);
    } else {
        console.log("Erro: " + err);
    }
    
});