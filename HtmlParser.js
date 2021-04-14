const ejs = require("ejs");

class HtmlParser{
    static Parse(table){
        var rHtml = "";
        ejs.renderFile("./table.ejs", {header: table.header, rows: table.rows}, (err, ret) =>{
            if(!err){ rHtml = ret; }
        });
        return rHtml;
    };
};

module.exports = HtmlParser;
