const dotenv = require('dotenv')
dotenv.config()

const dbConfigs = {
    development: {
        client: 'mssql',
        connection: {
            host: 'localhost',
            user: 'sa',
            password: 'sa',
            database: 'TP2'     
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
    env: process.env.DB_ENV || 'development',
    mode: process.env.MODE || 'offline'
}

module.exports = {
    dbConfig: dbConfigs[srvConfigs.env],
    port: srvConfigs.port,
    mode: srvConfigs.mode
}