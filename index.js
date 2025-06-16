const express=require("express");
const mongoose=require('mongoose');
const app=express();
app.use(express.json());
mongoose.connect("mongodb+srv://username:pwd@cluster0.4fdybqa.mongodb.net/Data",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
()=>console.log("Connected to DB")});
//app.get('/gets',(req,res)=>res.json(StudData.find()))
app.post("/newstud",async(req,res)=>{
    const studName=req.body.StudName;
    const studNumber=req.body.studNumber;
    const student=new StudentModel({name:studName,htno:studNumber})
    try{
        await student.save();
        res.send("Inserted Values");}
        catch(err){
            console.log(err);
        }});
        app.get("/display",async(req,res)=>{
            StudentModell.find({},(err,result)=>{
                if(err){
                    res.send(err);
                }    
                res.json(result); 
    });
});
app.listen(8002,()=>console.log("Server Ready."))
