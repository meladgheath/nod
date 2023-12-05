import oracledb from "oracledb";

const config = {
    user: "wahcprd",
    password: "wahcprd",
    connectString: "WAHDADB"
}
oracledb.getConnection(config,(err,connection)=> {
        if (err){
            console.log(err.message);
            return  ;
        }
        console.log('successfully') ;
    }
) ;
export const db = oracledb ;