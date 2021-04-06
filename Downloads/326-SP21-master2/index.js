
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const { Pool } = require('pg');
const body_parser = require("body-parser")

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

const router = require('./routes');

const app = express();
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended: true}))
app.use(body_parser.json())
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use('/', router);
app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
