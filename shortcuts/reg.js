import {client} from "../config/dbconfig.js";


export  const add = async (name , path) => {
let result ;
        await client.query(`INSERT INTO moon.shortcut (name,path) VALUES ($1,$2)`,[name,path]).
        then((response)=> {
            result = true ;
        }).catch((err)=>{
            result = false ;
            console.log(err.message) ;
        });
        return result ;
}

export const getShortcutByName = async (name) => {
    var result = await client.query(`SELECT * FROM moon.shortcut WHERE name = $1`,[name]);
    return result.rows[0] ;
}