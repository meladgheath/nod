import {client} from "../config/dbconfig.js";


export const addElement = async (name,code) => {

    let result ;
   await client.query(`INSERT INTO wahdabank.item (name,code) VALUES ($1,$2)`,[name,code])
        .then((response)=> {
            result = true  ;
        }).catch((err)=> {
            result = false ;
            console.log(err.message) ;
    });

   return result ;
}
export const getAllElement = async () => {
    let result = await client.query(`SELECT * FROM wahdabank.item`) ;
    return result.rows ;
}