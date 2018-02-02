require('dotenv').config()

const config = { 
    hostname: process.env.IP,
    port: process.env.PORT,
    db: {
        url: process.env.DBURL
    },
    cors: {
        origin: process.env.ORIGIN || '*',
        credentials: Boolean(process.env.CREDENTIALS)
    }
};

module.exports = config;