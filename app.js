import express from "express";

import bodyParser from "body-parser";
import {
    post_employment,
    get_employment,
    get_emp_report_id,

} from "./control.js";

import {
    del_management_id, get_management,
    post_management
} from "./management/Controller.js";

import {get_shortcut_id, post_shortcut} from "./shortcuts/controller.js";

import {
    delete_department_id,
    get_department,
    get_department_management,
    post_department
} from "./department/controller.js";
import {put_emp} from "./employment/control.js";
import {delete_jobtitle, get_jobTitle, post_jobTitle} from "./JobTitle/controller.js";
import {get_item, post_item} from "./item/controller.js";
import {delete_brn, get_brn, post_brn} from "./brn/controller.js";
import {get_export, post_export} from "./export/controller.js";
import {get_refMessage, get_refMessage_id, post_refMessage} from "./refMessage/controller.js";
import {get_side, post_tas} from "./tas/controller.js";

const app = new express() ;
app.listen(3003, function () {
    console.log("Listening  on port 3003");
});
const allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}
app.use(allowCrossDomain);
app.use(bodyParser.json({limit:'50mb'}));
app.use(express.json());

app.get('/',(req,res)=> {
    let message = '<h1>Welcome to Node Js . . .</h1>' +
        '<h3>/management [get]</h3>' ;
    res.send(message) ;
    res.end() ;
});

app.post('/management',post_management)
app.get('/management',get_management) ;
app.delete('/management/:id',del_management_id) ;
app.get('/emp',get_employment) ;
app.post('/emp',post_employment) ;
app.put('/emp',put_emp) ;
app.get('/emp/report/:id',get_emp_report_id) ;
app.post('/department',post_department);
app.get('/department',get_department);
app.get('/department/:management/',get_department_management) ;
app.delete('/department/:id',delete_department_id) ;
app.post('/shortcut/',post_shortcut);
app.get('/shortcut/:name',get_shortcut_id);
app.post('/jobTitle',post_jobTitle);
app.get('/jobTitle',get_jobTitle);
app.delete('/jobTitle/:id',delete_jobtitle);

app.post('/item',post_item) ;
app.get('/item',get_item);
app.post('/brn',post_brn);
app.get('/brn',get_brn);
app.delete('/brn/:id',delete_brn);
app.post('/export',post_export);
app.get('/export',get_export);
app.post('/refMessage',post_refMessage);
app.get('/refMessage',get_refMessage);
app.get('/refMessage/:id',get_refMessage_id);
app.post('/tas',post_tas);
app.get('/side',get_side) ;
app.get('/mm',(req,res)=> {

    req.send({here:"Welcome"});
    req.end();
})

/*
app.get('/here', async (req,res)=> {

    const filePath = './report/s.pdf';

    fs.readFile(filePath, (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            res.status(500).send('Internal Server Error');
            return;
        }

        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'attachment; filename=file.pdf');
        res.send(data);
    });
});
app.get('/moon',(req,res)=> {
    const doc = new PDFDocument();

    doc.font('./f/Amiri-Regular.ttf');
    // Define table headers
    const headers = ['العنصر الأول', 'العنصر الثاني', 'العنصر الثالث'];

    // Define table rows
    const rows = [
        ['Row 1, Cell 1', 'Row 1, Cell 2', 'Row 1, Cell 3'],
        ['Row 2, Cell 1', 'Row 2, Cell 2', 'Row 2, Cell 3'],
        // Add more rows as needed
    ];

    // Set table properties
    const tableProps = {
        x: 50, // X position of the table
        y: 50, // Y position of the table
        rowHeight: 20, // Height of each table row
        columnWidths: [100, 100, 100], // Width of each table column
        fontSize: 12, // Font size of the table text
        headerBackgroundColor: '#dddddd', // Background color of the header row
        textColor: '#000000', // Text color of the table
    };

    // Draw table headers
    doc.fillColor(tableProps.headerBackgroundColor)
        .fontSize(tableProps.fontSize)
        .font('Helvetica-Bold')
        .text(headers.join('\t'), tableProps.x, tableProps.y,{align:'right'});

    // Draw table rows
    doc.fillColor(tableProps.textColor)
        .fontSize(tableProps.fontSize)
        .font('Helvetica')
        .text(rows.join('\n'), tableProps.x, tableProps.y + tableProps.rowHeight, {
            width: tableProps.columnWidths.reduce((acc, width) => acc + width, 0),
            height: tableProps.rowHeight * rows.length,
            columns: headers.length,
            align: 'left',
            ellipsis: true,
        });
    doc.end();
    res.send({message:'good'});
    res.end();

});*/
