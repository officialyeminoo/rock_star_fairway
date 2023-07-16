const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get("/users", (req,res) =>{
    const data = [
        {id : 1, name : 'Alice'},
        {id : 2, name : 'Alice 1'},
        {id : 3, name : 'Alice 2'},
        {id : 4, name : 'Alice 3'},
    ];
    res.json(data);
});

app.get("/user/:id", (req, res)=>{
    const {id} = req.params;
    res.json({id});

});
app.listen(8000,()=> {
    console.log("server listen at 8000");
});