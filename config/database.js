

const mongoose = require("mongoose");

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(() => console.log("DB ka connection successfully"))
    .catch( (error) => {
        console.log("Issue in connection DB");
        console.error(error.message);

        //what is this means
        process.exit(1);
    });
}

module.exports = dbConnect;