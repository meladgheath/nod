import {client} from "../config/dbconfig.js";

export const addElement = async (name)=> {
    let result ;
    await client.query(`INSERT INTO moon.job (name) VALUES ($1)`,[name])
        .then((response)=> result = true)
        .catch((err)=> {
            console.log(err.message);
            result = false ;
        });
    return result ;
}
export const getAllElement = async ()=> {
    let result ;
     result = await client.query(`SELECT * FROM moon.job`) ;
      return result.rows ;
}
export const deleteElement = async (id) => {
    let result ;
    await client.query(`DELETE FROM moon.job WHERE id = $1`,[id])
        .then((respone)=> result = true )
        .catch((err)=> {
            result = false ;
            console.log(err.message);
        }) ;
    return result ;
}