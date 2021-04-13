const fs = require("fs");

fs.readFile("./txt/usuario.json", {encoding: "utf-8"}, (err, data) =>{
    if(err){
        console.log("Erro: " + err);
    } else {
        var conteudo = JSON.parse(data);
        console.log(conteudo);
        console.log(conteudo[0].nome);
        conteudo[0].nome = "Zé Mané";
        fs.writeFile("./txt/usuario.json",JSON.stringify(conteudo), {encoding: "utf-8"},(err) =>{
            if(err){ console.log(err); };    
        });
    }
});