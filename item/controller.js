import {addElement, getAllElement} from "./reg.js";

export const post_item =  async (req,res) => {

    let {name,code} = req.body ;

    let result = await addElement(name , code );

    if (result)
    res.send({id:200});
    else
        res.send({id:400}) ;
    res.end() ;
}
export const get_item = async (req,res) => {
    let rows = await getAllElement();
    res.send(rows) ;
    res.end();
}