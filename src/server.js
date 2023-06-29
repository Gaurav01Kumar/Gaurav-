const express=require("express");
const app=express();
const bodyParser=require("body-parser")
const port = process.env.PORT || 3000;

app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"));
app.set("view engine","ejs")
// get route for home page 
app.get("/",(req,res)=>{
    res.render("index")
})

// get route for contact page
app.get("/Contact",(req,res)=>{
  res.render("Contact")
})
  
// get route for about page
app.get("/about",(req,res)=>{
  res.render("about")
})  
// get route for Resume page
app.get("/resume",(req,res)=>{
  res.render("Resume")
})  
// get route for Portfolio page
app.get("/portfolio",(req,res)=>{
  res.render("portfolio")
}) 
app.listen(port,()=>{
    console.log(`Server is running : ${port}`)
})