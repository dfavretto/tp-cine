const dotenv = require('dotenv')
dotenv.config()

const dbConfigs = {
    development: {
        client: 'mssql'   ,
        connection: {
            server: 'localhost\\SQLEXPRESS',
           //server: 'DESKTOP-VFJA0I7\\SQLEXPRESS',
            port: 1433,
            user: 'web',
            password: '1234',
            database: 'Sitios'        
        }
    },
    ort: {
        client: 'mssql',
        connection: {
            server: 'A-SRV-BDINST',
            host: 'A-SRV-BDINST',
            user: 'BD21A01',
            password: 'BD21A01',
            database: 'BD21A01'
        }
    }
};

const srvConfigs = {
    port: process.env.PORT || 8080,
    env: 'development',
    mode: process.env.MODE || 'online'
}

module.exports = {
    dbConfig: dbConfigs[srvConfigs.env],
    port: srvConfigs.port,
    mode: srvConfigs.mode
}