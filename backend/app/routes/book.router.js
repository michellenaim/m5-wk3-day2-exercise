module.exports = function (app) {
  var books = require("../controllers/book.controller.js");

  app.post("/api/posts", books.createBook);
  app.get("/api/posts/:id", books.getBook);
  app.get("/api/posts", books.books);
  app.put("/api/posts", books.updateBook);
  app.delete("/api/posts/:id", books.deleteBook);
};
