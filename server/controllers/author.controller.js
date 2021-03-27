const Author = require('../models/author.model');

module.exports={
    helloworld:(req,res)=>{
        return res.json("Hello world Devi!");
    },
    getAll:(req,res) =>{
        Author.find({})
        .then((allAuthor) => {
            console.log(allAuthor)
            res.json(allAuthor)
        })
        .catch((err) => res.json(err));
    },
    
    details:(req,res) =>{
        Author.findById({_id:req.params.id})
        .then((details) => {
            console.log(details)
            res.json(details)
        })
        .catch((err) => res.json(err));
    },
  
    create: (req, res) => {
        console.log(req.body);
    
        Author.create(req.body)
          .then((newObj) => {
            console.log(newObj);
            // res.json is the equivalent of a return from the function
            res.json(newObj);
          })
          .catch((err) => {
            console.log("in author create");
            console.log(err);
            // res.json is the equivalent of a return from the function
            // res.json( {
            //   theErrObject: err,
            //   message: "There was an error"
            // } );
            res.json(err);
        });
    },
    update: (req, res) => {
      console.log(req.body);
      Author.findByIdAndUpdate(req.params.id,req.body)
        .then((updated) => {
          console.log(updated);
          // res.json is the equivalent of a return from the function
          res.json(updated);
        })
        .catch((err) => {
          console.log("in  update");
          console.log(err);
          // res.json is the equivalent of a return from the function
          res.json( {
            theErrObject: err,
            message: "There was an error"
          } );
      });
  },
  delete: (req, res) => {
    console.log(req.body);
    Author.findByIdAndDelete(req.params.id)
      .then((deleted) => {
        console.log(deleted);
        // res.json is the equivalent of a return from the function
        res.json(deleted);
      })
      .catch((err) => {
        console.log("in Product delete");
        console.log(err);
        // res.json is the equivalent of a return from the function
        res.json( {
          theErrObject: err,
          message: "There was an error"
        } );
    });
},
}