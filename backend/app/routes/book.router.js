module.exports = function (app) {
  var books = require("../controllers/book.controller.js");

  app.post("/api/post", books.createBook);
  app.get("/api/post/:id", books.getBook);
  app.get("/api/posts", books.books);
  app.put("/api/post/:id", books.updateBook);
  app.delete("/api/post/:id", books.deleteBook);
};
