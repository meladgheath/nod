import {dbs} from "./reg.js";

export const getHere = (req,res) => {
    let result ;
    db.execute('select * from tab',(err,res)=> {
        if (err)
            result = err ;

        result = res ;
    }) ;
    return result ;
}