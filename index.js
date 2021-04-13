const fs = require("fs");

// fs.readFile("./txt/arquivo.txt",{encoding: "utf-8"},(err, data) =>{
//     if(!err){
//         console.log(data);
//     } else {
//         console.log("Erro: " + err);
//     }
    
// });

fs.writeFile("./txt/teste.txt","Teste de gravação !",{encoding: "utf8"},(err) =>{
    if(err){
        console.log("Erro: " + err);
    } else {
        console.log("Arquivo salvo com sucesso !");
    }
});
