const express= require("express")
const app=express()
const cors=require("cors")
const port=3001

const mysql = require('mysql2')
const db = mysql.createConnection({
    user:"sania",
    host:"127.0.0.1",
    password:"sania",
    port:3306,
    database:"empl"
})
app.use(express.urlencoded({
    extended:true
}))
app.use(cors())
app.use(express.json())

app.listen(port,() => {
    console.log('App running')
})

app.post("/login",(req,res) =>{

    const email=req.body.email
    const pass= req.body.pass
    
    const sql="select email,pass from admin where email=? and pass=?";
    db.query(sql,[email,pass],(err,result)=>{
       if(err){
         res.send({err:err})
       }
       if(result.length>0){
        const sql="select * from emp";
        db.query(sql,(err,result)=>{
           if(err){
               res.send({err:err})
           }
           if(result.length>0){
               console.log(result)
               res.status(201).send(result)
           }
        })
           }
       else{
           res.status(200).send("Access denied")
       }
    })
    }
)

app.post("/insert",(req,res) =>{

    const id=req.body.id
    const name= req.body.name
    
    const sql="insert into emp(id,name) values(?,?)";
    db.query(sql,[id,name],(err,result)=>{
       if(err){
           res.send({err:err})
       }
       else{
           res.send(result)
       }
    })
    }
)

app.get("/view",(req,res) =>{

           const sql="select * from emp";
           db.query(sql,(err,result)=>{
              if(err){
                  res.send({err:err})
              }
              if(result.length>0){
                  console.log(result)
                  res.send(result)
              }
           })
      
    })

    app.post("/edit",(req,res) =>{

        const id=req.body.id
        const name= req.body.name
        
        const sql="update emp set name=? where id=? ";
        db.query(sql,[name,id],(err,result)=>{
           if(err){
               res.send({err:err})
           }
           else{
               res.send(result)
           }
        })
        }
    )  
    
   
    app.post("/delete",(req,res) =>{

        const id=req.body.id
        
        const sql="delete from emp where id=? ";
        db.query(sql,[id],(err,result)=>{
           if(err){
               res.send({err:err})
           }
           else{
               res.send(result)
           }
        })
        }
    )   