// Uso del paquete Pg
const {Client} = require('pg');
// conexio desde Heroku
const connectionString = 'postgres://vgullytuuvytyz:8801e4f105c7e15e4b71c5fab86145f89e879f8e597aa661bd9b0f9e32d2353f@ec2-52-207-15-147.compute-1.amazonaws.com:5432/dboifi9jihrmdj'
// Configuracion de conexion
const connectionData = {
    connectionString : connectionString,
    ssl:{ rejectUnauthorized: false}
};
const client = new Client(connectionData);
client.connect();
// Querys
//Obtener información
client.query('SELECT * FROM usuario')
        .then(response =>{
            console.log(response.rows)
            client.end()
        })
        .catch(err => {
            client.end()
        });
