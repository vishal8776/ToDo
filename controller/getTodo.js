//import the model

const Todo = require("../models/Todo");

//define route handler

exports.getTodo = async(req,res) => {
    try {
        //fetch all ToDo item from DataBase
        const todos = await Todo.find({});

        //response
        res.status(200)
        .json ({
            success:true,
            data:todos,
            message:"Entire Todo Data fatched"

        })
    }
    catch(err){
        console.error(err);
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:"Server Error"
        })
    }
}



exports.getTodoById = async(req, res) => {
    try {
       //extrect todo items basis on id
       const id = req.params.id;
       const todo = await Todo.findById({_id:id})

       //Error occers in Error/ id is not found
       if(!todo) {
        return res.status(404).json({
            success:false,
            message:"No Data Found whith Given Id",
        })
       }
       //Data for given id Found
       res.status(200).json({
        success:true,
        data:todo,
        message: `Todo ${id} data successfully fetched`,
       })
    
    }
    catch(err){
        console.error(err);
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:"Server Error"
        })
    }
}
