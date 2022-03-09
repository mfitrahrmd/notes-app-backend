const { addNoteValidation, editNoteValidation } = require("../validations/validation");
const { getAllNotesHandler, getNoteByIdHandler, addNoteHandler, editNoteByIdHandler, deleteNoteByIdHandler } = require("../controllers/notes");

const routes = [
  {
    path: "/notes",
    method: "GET",
    handler: getAllNotesHandler,
  },
  {
    path: "/notes/{id}",
    method: "GET",
    handler: getNoteByIdHandler,
  },
  {
    path: "/notes",
    method: "POST",
    options: {
      validate: {
        payload: addNoteValidation(),
      },
    },
    handler: addNoteHandler,
  },
  {
    path: "/notes/{id}",
    method: "PUT",
    handler: editNoteByIdHandler,
    options: {
      validate: {
        payload: editNoteValidation(),
      },
    },
  },
  {
    path: "/notes/{id}",
    method: "DELETE",
    handler: deleteNoteByIdHandler,
  },
];

module.exports = routes;
