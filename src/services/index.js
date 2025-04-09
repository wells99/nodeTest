const mysql = require("mysql2/promise");

async function executeSQL(comandoSQL){
    const conection = await mysql.createConnection({
        host:"localhost",
        port:9000,
        user:"root",
        password:"1234",
        database:"clinica_db"
    })

    const [result] = await conection.query(comandoSQL);
    
    await conection.end();
    return result;
}

module.exports = {
    executeSQL
}
