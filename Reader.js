const fs = require("fs");
const util = require("util");

class Reader{

    constructor(){
        this.reader = util.promisify(fs.readFile);
    };

    async Read(filePath){
        try{
            return await this.reader(filePath,"utf-8");
        }catch{
            return undefined;
        }
    };

    ReadSync(filePath){
        //Novo modo que simplifica a leitura(não precisa de async/await):
        return fs.readFileSync(filePath,{encoding: "utf-8"});
    };
};

module.exports = Reader;