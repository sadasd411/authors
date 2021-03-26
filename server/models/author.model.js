const mongoose = require('mongoose');
// model - is the shape of the json data that we want to put in the collection
const AuthorSchema = new mongoose.Schema(
    
    {
        name:{
            type: String,
            required:[true, "You must enter a name for author"],
            minlength:[3, "Author name must be at least 3 chars long"]
        }
       },
     {
            timestamps:true,
        }
);
const modelName = "Author";
const  Author = mongoose.model(modelName,AuthorSchema);
module.exports= Author;