
import {
    addManagement,
    allInfoManagement,
    deleteItem} from "./reg.js";

export const post_management=  async (req,res)=> {
    let name = req.body.name ;

    let result = await addManagement(name) ;

    if (result)
        res.send({id:200,state:'Success'});
    else

        res.send({id:400,state:'faild'});

    res.end();

}

export const get_management = async (req,res) => {
    var rows = await allInfoManagement() ;

    res.send(rows);
    res.end() ;
}
export const del_management_id = async (req,res) => {

        var id = req.params.id ;

        var result = await deleteItem(id) ;

        if (result)
            res.send({id:200, state: 'Successfuly'}) ;
        else
            res.send({id:400, state: 'Faild'}) ;

        res.end();
}