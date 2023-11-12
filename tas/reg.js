import {client} from "../config/dbconfig.js";

export const getElement = async (g_date,g_info,g_payment,side,brn) => {

    let sql = "SELECT * FROM wahdabank.ggg WHERE ";
    if (g_date != null)
        sql = sql + "g_date LIKE '%"+g_date+"%'" ;
    else
        sql = sql +"g_date LIKE '%%'" ;

    if (g_info != null)
        sql = sql + "AND g_info LIKE '%"+g_info+"%'" ;
    else
        sql = sql +" AND g_info LIKE '%%' " ;
    if (g_payment != null)
        sql = sql +" AND g_payment LIKE '%"+g_payment+"%'";
    else
        sql = sql +" AND g_payment LIKE '%%'" ;
    if (side != null)
        sql = sql + " AND side = "+side+"" ;
    if (brn != null)
        sql = sql + " AND brn LIKE '%"+brn+"%'" ;
    else
        sql = sql + " AND brn LIKE '%%' ";

    let result = await client.query(sql);
    return result.rows ;
}

export const getSideElement = async () =>  {
    let result = await client.query(`SELECT * FROM wahdabank.side`) ;
    return result.rows ;
}