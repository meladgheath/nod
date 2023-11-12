import {addElement, getAllElement} from "./reg.js";

export const post_export = async (req,res) => {
    let {item,brn,transDate,refID,num} = req.body ;
    let reuslt = await addElement(item,brn,transDate,refID,num);
    if (reuslt)
        res.send({id:200});
    else
        res.send({id:400});
    res.end();
}
export const get_export = async (req,res) => {
    let result = await getAllElement() ;
    res.send(result);
    res.end();
}