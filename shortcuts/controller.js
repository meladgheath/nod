import {add, getShortcutByName} from "./reg.js";

export  const post_shortcut = async (req,res)=> {
        var {name,path} = req.body ;
        var result = await add(name , path) ;

        if (result)
        res.send({id:200,state:'Succefluy'});
        else
                res.send({id:400,state:'Faild'}) ;

        res.end();
}
export const get_shortcut_id = async (req,res)=> {
        var name = req.params.name ;

        console.log(name);

        var row = await getShortcutByName(name) ;
        res.send(row) ;
        res.end();
}