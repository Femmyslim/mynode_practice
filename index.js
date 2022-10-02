// The above iss the command code of the npm package install such as express the npm framework,the bodyParser required by http post METHODS, mysql database linked, the npm dotenv package to hide our port and sql databse, the npm uuid package to generate the customer id,
require('dotenv').config() 
const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql')
const {uuid} = require('uuidv4')
const { METHODS } = require('http')
const { connect } = require('http2')
const app = express()
const port = process.env.APP_PORT

// this below its a command linking the npm express framework to the bodyParser for http post method use
app.use(bodyParser.json())


// This below shows how to hide sql database table and port link to this dom
const connection = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    port: process.env.DATABASE_PORT,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME
  });

//   this is how to query a databse link to dom via sql to confirm if its is error, result and need to insert new field
  connection.query(
    `SELECT * FROM mynode_practice WHERE email = '${email}' AND phone = '${phone}'`,
    (err, results, fields) => {
        if(err){ //checking of error
            console.log('error:', err)
            throw new error ('Please check back, this is on us.')// results contains rror returned by server
        }
        if (results.length > 0){ //checking for result
      console.log('results'); // results contains rows returned by server not compulsory to use console.log
      throw new error ('The phone and email exist.', 400)
        }

    // to create a new user if result.length are <0
    let customer_id = uuidv4()
    connection.query(
        `insert into customers (customer_id,firstname, lastname, email, phone)
        values ('${customer_id}', '${firstname}', '${othernames}', '${phone}', '${email}')`,
        (err, results, fields) => {
            if (err) {
                // console.log("error: ", err.sqlMessage)
                throw new Error("This is on us, pleae try later")
            }

            res.status(201).json({
                message: "Account succesfully created",
                data: {
                    customer_id,
                    firstname,
                    othername,
                    phone,
                    email
                }
            })
        }    
);



// using try and catch module to keep eror detect from sql query
try{
    connection.query(
        `SELECT * FROM mynode_practice WHERE email = '${email}' AND phone = '${phone}'`,
        (err, results, fields) => {
            if(err){ //checking of error
                console.log('error:', err)
                throw new error ('Please check back, this is on us.')// results contains rror returned by server
            }
            if (results.length > 0){ //checking for result
          console.log('results'); // results contains rows returned by server not compulsory to use console.log
          throw new error ('The phone and email exist.', 400)
            }
        }    
    )    

}catch(e) {

    res.status(400).json({
        message: e.message
    })

}






// testing of how to input details using object and array to link http get and post method
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

// the http get method
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

// the http post method
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
   }

    users.push(newUser),

    res.status(201).send({
        message: 'user created successfully',
        data: newUsers
    })    
}

})



app.listen(port, () =>{

    console.log(`smallchops api is listening on port ${port}`)

})
