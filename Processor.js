class Processor{

    static Process(data){
        var aRows = data.split("\r\n");
        var rows=[];
        aRows.forEach((row) =>{
            var cols = row.split(";");
            rows.push(cols)
        });
        return rows;
    };
};

module.exports = Processor;
