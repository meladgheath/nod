
import {client} from "../config/dbconfig.js";

export const addElement = async (reference_id,image)=> {

    let result ;
    await client.query(`INSERT INTO wahdabank."refMessage" (reference_id,image) VALUES ($1,$2)`,
        [reference_id,image])
        .then((response)=> result = true )
        .catch((err)=> {
            console.log(err.message) ;
            result = false ;
        });

    return result
}
export const getElement = async () => {
    let result = await client.query(`SELECT * FROM wahdabank."refMessage"`);
    return result.rows ;
}
export const getElementByID = async (id) => {
    let result = await client.query(`SELECT * FROM wahdabank."refMessage" WHERE reference_id = $1`,[id]);
    return result.rows ;
}