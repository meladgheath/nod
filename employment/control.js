import {updateElement} from "./reg.js";

export const put_emp = async (req,res)=> {

    let {id,jobTitle,management,department} = req.body ;

    var result = await updateElement(id,jobTitle,management,department);

    if (result)
        res.send({id:200,state:"successfully"});
    else
        res.send({id:400,state:"faild"}) ;
    res.end();
}