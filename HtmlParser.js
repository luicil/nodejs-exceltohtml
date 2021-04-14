const ejs = require("ejs");

class HtmlParser{
    static Parse(table){
        return ejs.renderFile("./table.ejs", {header: table.header, rows: table.rows});
    };
};

module.exports = HtmlParser;