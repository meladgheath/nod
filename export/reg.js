import {client} from "../config/dbconfig.js";

export const addElement = async (item,brn,transDate,refID,num)=> {
let result ;
await client.query(`INSERT INTO wahdabank.transactions (item,bank,"date","refID",number) VALUES ($1,$2,$3,$4,$5)`
, [item,brn,transDate,refID,num]).then((response)=>   result = true)
    .catch((err)=> {
        result = false ;
        console.log(err.message) ;
    });
return result ;
}
export const getAllElement = async () => {
    let result = await client.query(`SELECT * FROM wahdabank.transactions`) ;
    return result.rows ;
}