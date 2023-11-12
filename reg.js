import {client} from "./config/dbconfig.js";



export const addemp = async (id,name,phone,account,jobTitle,department,management,img)=> {

    var result ;

        await client.query(`INSERT INTO moon.emp (id , name ,phone,account,jt,department,management,img) VALUES ($1,$2,$3,$4,$5,$6,$7,$8)`
            , [id, name, phone,account,jobTitle,department,management,img]).then((response) => {
            result = true ;
        }).catch((err) => {
            // console.log(err.message);
            console.log(err);
            result = false;
        });

        return result ;
    }



export const allInfoEmp = async ()=> {

    var result = await client.query(`SELECT * FROM moon.emp `) ;

    return result.rows ;
}

export const getInfoAboutManagement = async (managementID) => {
    var result = await client.query(`SELECT id,name,phone,account,(SELECT name from moon.management WHERE id = management) as management 
FROM moon.emp WHERE management = $1`,[managementID]) ;
    return result.rows ;
}
