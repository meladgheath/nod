import {addElement, deleteElement, getAllElement} from "./reg.js";

export const post_brn = async (req,res) => {
let {name,ref} = req.body ;

    let result = await addElement(name,ref);
    if (result)
        res.send({id:200});
    else
        res.send({id:400});
    res.end();
}
export const get_brn = async (req,res) => {

    let rows = await getAllElement() ;
    res.send(rows);
    res.end();
}
export const delete_brn = async (req,res) => {
    let id = req.params.id ;
    let result = await deleteElement(id) ;


    if (result)
    res.send({id:200});
    else
        res.send({id:400});
    res.end();
}