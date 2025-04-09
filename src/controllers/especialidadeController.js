const { executeSQL } = require("../services")

async function buscarEspecialidades() {
    return await executeSQL("SELECT * FROM especialidades");
} 

module.exports = {
    buscarEspecialidades
}

