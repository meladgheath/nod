import db from 'pg' ;


export const client = new db.Pool({
    host: 'localhost',
    // user: 'support',
    port: 5432,
    // database: 'supportdb'
    database: 'storge',
});

