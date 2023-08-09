import express from 'express';
import { createPool } from 'mysql2/promise';

const app = express();
const pool = createPool({
    host:'192.168.100.10',
    port:3306,
    user: 'Ferwan',
    password: 'mypassword'
})
app.get('/', (req, res) => {
    res.json("hello from DOCKER VM")
});

app.get('/ping', async(req, res) => {
    const [rows] = await pool.query("SELECT NOW() AS 'DATE'");
    res.json(rows)
});

app.listen(4000,()=>{
    console.log('http://localhost:4000');
})