import {addElement, deleteElement, getAllElement} from "./reg.js";

export const post_jobTitle = async (req,res) => {
    let name = req.body.name ;

    let result = await addElement(name) ;

    if (result)
        res.send({id:200,state:'successfuly'});
    else
        res.send({id:400,state:'faild'}) ;

    res.end() ;
}

export const get_jobTitle = async (req,res) => {
    let result = await getAllElement() ;
    res.send(result) ;
    res.end();
}

export const delete_jobtitle = async (req,res) => {
    let id = req.params.id ;
    let result = await deleteElement(id);
    if (result)
        res.send({id:200}) ;
    else
        res.send({id:400}) ;
    res.end() ;
}