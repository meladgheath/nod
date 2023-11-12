import {

    addemp,
    allInfoEmp,
       getInfoAboutManagement
} from "./reg.js";

export const post_employment = async (req,res)=> {

    var {id,name,phone,account,jobTitle,department,management,img} = req.body;
    const result = await addemp(id,name,phone,account,jobTitle,department ,management,img) ;
    console.log(result);
    if (result)
        res.send({id:200,state: 'Success'});
    else
        res.send({id:400,state: 'Faild'}) ;
    res.end() ;
}
export const get_employment = async (req,res) => {
    var row = await allInfoEmp();
    console.log(row);
    res.send(row);
    res.end();
}


export const get_emp_report_id = async (req,res) => {
    var id = req.params.id
    var rows = await getInfoAboutManagement(id) ;
    res.send(rows);
    res.end();
}
