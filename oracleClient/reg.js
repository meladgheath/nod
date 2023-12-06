import oracledb from "oracledb";

const config = {
    user: "wahcprd",
    password: "wahcprd",
    connectString: "WAHDADB"
}

export const db = oracledb.getConnection(config,(err,connection)=> {
        if (err){
            console.log(err.message);
            return ;
        }
        db = connection ;
        console.log('successfully') ;
    }
) ;

// export const db = oracledb ;
// export const db = dbOra ;