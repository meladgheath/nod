import {client} from "../config/dbconfig.js";

export const addManagement = async (name)=> {
    var result ;
    await client.query(`INSERT INTO MOON.management (name) VALUES ($1)`,[name])
        .then((response)=> {
            result = true ;
        }).catch((err)=>{
            console.log(err.message);
            result = false ;
        })
    return result ;
};
export const allInfoManagement = async ()=> {
    var result = await client.query(`SELECT * FROM moon.management `) ;

   /* var i = 0 ;
    var row = [];
    while (i < result.rows.length){
        row.push({
            seq:i ,
            id:result.rows[i].id,
            name:result.rows[i].name
        });
        i++ ;
    }

    return row ;*/
    return result.rows ;
}
export const deleteItem = async (id) => {
    var result ;
        await client.query(`DELETE FROM moon.management WHERE id = $1`,[id]).
            then((response)=> {
                result = true ;
        }).catch((err)=> {
            console.log(err.message) ;
            result = false ;
        }) ;
        return result ;
}