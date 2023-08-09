//import the model

const Todo = require("../models/Todo");

//define route handler

exports.createTodo = async(req,res) => {
    try {
        //extrect title and description from request body
        const {title,description} = req.body;
        //create a new Todo obj and insert in DB
        const response = await Todo.create({title,description});
        //send a json responce with a success flag
        res.status(200).json(
            {
                success:true,
                date:response,
                message:"Entry Created Successfully"
            }
        );
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success:false,
            date:"internal server error",
            message:err.message,
        })
    }
}