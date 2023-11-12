import {addElement, getElement, getElementByID} from "./reg.js";

export const post_refMessage = async (req,res) => {
    let {refID , imgMessage} = req.body ;

    let result = await addElement(refID,imgMessage) ;
    if (result)
        res.send({id:200});
    else
        res.send({id:400}) ;
    res.end();
}
export const get_refMessage = async (req,res)=> {
    let result = await getElement();
    res.send(result);
    res.end();
}
export const get_refMessage_id = async (req,res)=> {
    let id = req.params.id ;
    let rows = await getElementByID(id);
    res.send(rows);
    res.end();
}