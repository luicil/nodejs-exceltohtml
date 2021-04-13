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

        

        // fs.readFile(filePath, {encoding: "utf-8"}, (err, data) =>{
        //     if(err){
        //         console.log(err);
        //         return null;
        //     } else {
        //         return data;
        //     }
        // });

        //return fs.readFileSync(filePath,{encoding: "utf-8"});

    };
};

module.exports = Reader;