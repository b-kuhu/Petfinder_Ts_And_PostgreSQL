import express,{Request,Response} from "express";

const app = express();



app.get('/',(req:Request,res:Response)=>{
    return res.send('hello world');
})
app.listen(3000,()=>{
    console.log(` application listening at htttps://localhost:3000`);
})