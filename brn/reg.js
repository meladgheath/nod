import {client} from "../config/dbconfig.js";

export const addElement = async (name,ref)=> {
    let result ;
    await client.query(`INSERT INTO wahdabank.management (name,ref) VALUES ($1,$2)`,[name,ref])
        .then((response)=>result = true )
        .catch((err)=> {
            result = false ;
            console.log(err.message) ;
    });
    return result ;
}

export const getAllElement = async () => {

    let result = await client.query(`SELECT * FROM wahdabank.management`)
        .catch((err)=> console.log(err.message));
    return result.rows ;
}

export const deleteElement = async (id) => {
    let result ;
      await client.query(`DELETE FROM wahdabank.management WHERE id = $1`,[id])
        .then((response)=> result = true)
          .catch((err)=> {
            result = false ;
            console.log(err.message) ;
        });
    return result ;
}