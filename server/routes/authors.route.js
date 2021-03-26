const authorController = require('../controllers/author.controller')

module.exports = (app) => {
    app.get("/",authorController.helloworld);
    app.get("/api/author", authorController.getAll);
    app.get("/api/author/:id", authorController.details);
    app.post("/api/author", authorController.create);
    app.put("/api/author/:id", authorController.update);
    app.delete("/api/author/:id", authorController.delete);
}