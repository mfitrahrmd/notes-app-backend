const { getAllNotesService, getNoteByIdService, addNoteService, editNoteByIdService, deleteNoteByIdService } = require("../services/notes");

const getAllNotesHandler = async (req, h) => {
  try {
    const notes = await getAllNotesService();
    return h
      .response({
        status: "success",
        data: notes,
      })
      .code(200);
  } catch (error) {
    return h
      .response({
        status: "fail",
        message: "Failed to get notes",
      })
      .code(500);
  }
};

const getNoteByIdHandler = async (req, h) => {
  const { id } = req.params;
  try {
    const note = await getNoteByIdService(id);
    return h
      .response({
        status: "success",
        data: note,
      })
      .code(200);
  } catch (error) {
    return h
      .response({
        status: "fail",
        message: `Note with id ${id} was not found`,
      })
      .code(404);
  }
};

const addNoteHandler = async (req, h) => {
  const { title, body, tags } = req.payload;

  try {
    const note = await addNoteService({ title, body, tags });
    return h
      .response({
        status: "success",
        message: "Successfully add note",
        data: note,
      })
      .code(201);
  } catch (error) {
    return h
      .response({
        status: "fail",
        message: "Failed to add note",
      })
      .code(500);
  }
};

const editNoteByIdHandler = async (req, h) => {
  const { id } = req.params;
  const { title, body, tags } = req.payload;

  try {
    await editNoteByIdService(id, { title, body, tags });
    return h
      .response({
        status: "success",
        message: "Successfully edit note",
      })
      .code(200);
  } catch (error) {
    return h
      .response({
        status: "fail",
        message: `Note with id ${id} was not found`,
      })
      .code(404);
  }
};

const deleteNoteByIdHandler = async (req, h) => {
  const { id } = req.params;

  try {
    await deleteNoteByIdService(id);
    return h
      .response({
        status: "success",
        message: "Successfully delete note",
      })
      .code(200);
  } catch (error) {
    return h
      .response({
        status: "fail",
        message: `Note with id ${id} was not found`,
      })
      .code(404);
  }
};

module.exports = {
  getAllNotesHandler,
  getNoteByIdHandler,
  addNoteHandler,
  editNoteByIdHandler,
  deleteNoteByIdHandler,
};
