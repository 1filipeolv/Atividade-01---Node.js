import { Sequelize } from "sequelize";
import connection from "../config/sequelize-config.js";


const Proprietarios = connection.define('Proprietarios', {
     
     nome: {
        
        type: Sequelize.STRING,
       
        allowNull: false
     },
     cpf: {
        type : Sequelize.STRING,
        allowNull: false
     },
     endereco: {
        type: Sequelize.STRING,
        allow: false,
     },
});

Proprietarios.sync({force: false})
export default Proprietarios;