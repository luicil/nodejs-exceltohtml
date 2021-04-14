const fs = require("fs");
const util = require("util");

class Writer{
    constructor(){
        this.writer = util.promisify(fs.writeFile);
    };

    async Write(filename, data){
        var ret = false;
        try{
            await this.writer(filename, data);
            ret = true;
        }catch(error){
            ret = false;
        };
        return ret;
    };

    WriteSync(filename, data){
        var ret = false;
        try{
            fs.writeFileSync(filename, data);
            ret = true;
        } catch(err){
            ret=false
        }
        return ret;
    }
};

module.exports = Writer;