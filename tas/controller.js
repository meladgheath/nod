import {getElement, getSideElement} from "./reg.js";

export const post_tas = async (req,res) => {

    let where ;
    let {g_date,g_info,g_payment,side,brn} = req.body ;

    let result ;
    result =  await getElement(g_date,g_info,g_payment,side,brn) ;
    res.send(result);
    res.end();
}

export const get_side = async (req,res) => {

    let rows =  await getSideElement() ;
    res.send(rows);
    res.end() ;
}