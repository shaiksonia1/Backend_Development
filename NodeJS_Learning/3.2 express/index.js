import express from "express";
 const app  = express();
 const port = 3000;

 app.get("/", (req,res)=>{
res.send("<h1>hello world!</h1>");
 });
 app.get("/homePage", (req,res)=>{
res.send("<h1>homePage!</h1>");
 });
 app.get("/contact", (req,res)=>{
res.send("<h1>Contact</h1>");
 });

 app.get("/about", (req,res)=>{
res.send("<h1>About me!</h1>");
 });

 app.listen(port, ()=>{
    console.log(`server is running on ${port}`)
 });
