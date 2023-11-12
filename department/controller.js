import {addDepartment, deleteItem, getAllInfoDepartment, getDepartmentInfoByManagementID} from "./reg.js";

export const post_department = async (req,res)=> {
    var {name , management} = req.body ;

    console.log(req.body) ;
    var result = await addDepartment(name,management);

    if (result)
        res.send({id:200,state:'Successfully'});
    else
        res.send({id:400,state:'Faild'}) ;
    res.end();
}
export const get_department = async (req,res)=> {
    var row = await getAllInfoDepartment();
    res.send(row);
    res.end();
}
export  const get_department_management = async (req,res) => {

    var id = req.params.management ;
        var row = await getDepartmentInfoByManagementID(id);
        res.send(row);
        res.end();
}
export const delete_department_id = async (req,res)=> {

    var id = req.params.id ;
    var result = await deleteItem(id) ;

    if (result)
        res.send({id:200,state:'successfuly'});
    else
        res.send({id:400,state:'faild'});
    res.end();
}