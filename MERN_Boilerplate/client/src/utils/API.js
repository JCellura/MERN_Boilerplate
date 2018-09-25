import axios from "axios";

// This used to be used for Books

export default {
  // Gets all books
  getModels: function() {
    return axios.get("/api/models");
  },
  // Gets the book with the given id
  getModel: function(id) {
    return axios.get("/api/models/" + id);
  },
  // Deletes the book with the given id
  deleteModel: function(id) {
    return axios.delete("/api/models/" + id);
  },
  // Saves a book to the database
  saveModel: function(modelData) {
    return axios.post("/api/models", modelData);
  }
};
