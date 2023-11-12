import {client} from "../config/dbconfig.js";

export const addDepartment = async (name,management)=> {
    var result ;
    await client.query(`INSERT INTO moon.department (name,management) VALUES ($1,$2)`,[name,management])
        .then((response)=> {
            result = true ;
        }).catch((err)=> {
            console.log(err.message) ;
            result = false ;
        }) ;
    return result ;
}
export const getAllInfoDepartment = async () => {
    var result = await client.query(`SELECT * FROM moon.department`) ;
    return result.rows ;
}
export const getDepartmentInfoByManagementID = async (id) => {
        var result = await client.query(`SELECT * FROM moon.department WHERE management = $1`
            ,[id]) ;

    var row = [];
    var i = 0 ;
    console.log(result.rows.length) ;
    while (i < result.rows.length){
        console.log(result.rows[i]);
        row.push({seq:i,
            id:result.rows[i].id,
            name:result.rows[i].name,
            management:result.rows[i].management
        });
        i++ ;
    }
    return row ;
}
export const deleteItem = async (id) => {
    var result ;
    await client.query(`DELETE FROM moon.department WHERE id = $1`,[id]).
        then((response)=> {
            result = true ;
    }).catch((err)=> {
        result = false ;
        console.log(err.message) ;
    });
     return result ;
}