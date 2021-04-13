class Table{
    constructor(data){
        this.header = data[0];
        // remove a 1a linha do array
        data.shift();
        this.rows = data;
    }
};

module.exports = Table;
