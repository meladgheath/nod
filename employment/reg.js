import {client} from "../config/dbconfig.js";

export const updateElement = async (id ,jobTitle, management, department)=> {
    let result ;
     await client.query(`UPDATE moon.emp SET jt=$1, management=$2, department = $3
    WHERE id=$4`, [jobTitle,management, department, id]).
     then((response) => result = true)
        .catch((err) =>{
            result = false ;
            console.log(err.message);
            }
        );
     return result ;
}