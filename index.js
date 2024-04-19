const express = require('express');
const mongoose = require('mongoose');
const {Expense}= require('./schema');
async function connect(){
  try{
     await mongoose.connect('mongodb+srv://navthikr:<Navthik@123>@cluster0.qpwqesh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    console.log('DB connection established ;');
     const port=1000;
    app.listen(port,function(){
        console.log(`listening on port ${port}`);
        });
    
}
catch(err){
    console.log(err);

}

}
connect();

const app = express();
app.get('/get-expense',async function(request,response){
   const expensesData=await Expense.find();
   response.status().json(expensesData)

}
)
