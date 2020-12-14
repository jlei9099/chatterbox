const Pool = require("pg").Pool;

const Pool = new Pool({
    user: "postgres",
    password: "password",
    host: "localhost",
    port: 5432,
    database: "Accounts"
});

pool.on('error', (err, client) =>{
    console.error('Error', err);
});

const query = 'SELECT * FROM Accounts';
module.exports = pool;