const { Sequelize } = require('sequelize')
const sequelize = new Sequelize('back_teste', 'root', 'senai', {
    host: 'localhost',
    dialect: 'mysql'
})

// sequelize.authenticate().then(()=>{
//     console.log('Conexão deu certo rapazes!')
// }).catch((error)=>{
//     console.error('Deu b.o aí!')
// })

module.exports = sequelize 