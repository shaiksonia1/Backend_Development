import express from "express";

const app = express();
const port = 3000;

app.get("/",(req,res)=>{


    const today = new Date();
    const day = today.getDay();
    // console.log(day)

let type = dayType;
    res.render("index.ejs",{
        dayType:type,
        advice:"Its time to work hard !"
    })
})


app.listen(port,()=>{
console.log(`server running on ${port}.` );
});