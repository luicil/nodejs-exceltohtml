pdf = require("html-pdf")

class PDFWriter{
    static Write(pathFile, html){
        pdf.create(html,{"format": "Letter", "orientation": "portrait"}).toFile(pathFile, (err) =>{});
    };

};

module.exports = PDFWriter;
