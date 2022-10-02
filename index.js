require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql')
const { userInfo } = require('os')
const app = express()
const port = process.env.APP_PORT

app.use(bodyParser.json())

const connection = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    port: process.env.DATABASE_PORT,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME
  });

const users = [
    {
        id: 1,
        firstname: "Qudus",
        othername: "Adedokun",
        occupation: "Jobless",
        age: 18
    },
    
    {
        id: 2,
        firstname: "Qudus",
        othername: "Zubair",
        occupation: "Retired",
        age: 22
    },
    {
        id: 3,
        firstname: "Adedeji",
        othername: "Aminah",
        occupation: "Doctor",
        age: 5
    }
]


app.get("/profile", (req,res) =>{
    const firstname = "Tawa"
    const lastname = "Temi"
    const email = "Tawa@gmail.com"
    const phone = 01236457
    if(!email){
        res.status(404).send({
            message: 'credentials not found'
        })
    }
    else{
        res.status(200).send({
            message: 'credentials display'
        })
    }
})  

    
app.post("/create/new", (res, req) =>{
const firstname = req.bodyPaser.firstname
const lastname = req.bodyParser.lastname
const email = req.bodyParser.email
const phone = req.bodyPaser.phone
const age = req.bodyPaser.age

if(!firstname  || !lastname  || !email  || !phone){
    res.status(400).send({
        message: 'All fields are require'
    })
}
else if(age<18){
   message: 'User not qualify to register'
}
else{
   const newUser = {
    id = newUser.length + 1,
    firstname: fname,
    lastname: lname,
    email: email,
    phone: phone,

    users.push(newUser),

    res.status(201).send({
        message: 'user created successfully';
        data: newUsers
    })    
},

}

})






app.listen(port, () =>{

    console.log(`smallchops api is listening on port ${port}`)

})
