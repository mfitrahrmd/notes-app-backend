const { readNotes, writeNotes } = require("../data/notesDriver");
const { uid } = require("uid");

const getAllNotesService = function () {
  const notes = readNotes();

  return new Promise((resolve, reject) => {
    resolve(notes);
  });
};

const getNoteByIdService = function (id) {
  const notes = readNotes();

  return new Promise((resolve, reject) => {
    const note = notes.filter((val) => val.id == id);
    return note.length ? resolve(note) : reject();
  });
};

const addNoteService = function (data) {
  const notes = readNotes();
  const createDate = new Date().toISOString();
  const createId = uid(16);

  return new Promise((resolve, reject) => {
    data = { id: createId, ...data, createdAt: createDate, updatedAt: createDate };
    notes.push(data);

    const isSuccess = writeNotes(notes);

    isSuccess ? resolve({ id: createId }) : reject();
  });
};

const editNoteByIdService = function (id, data) {
  const notes = readNotes();
  const createDate = new Date().toISOString();

  return new Promise((resolve, reject) => {
    const isNoteExist = notes.find((val) => val.id == id);

    if (!isNoteExist) reject();

    data = Object.fromEntries(Object.entries(data).filter((val) => val[1])); // remove object properties with no value

    const updatedNotes = notes.map((val) => (val.id == id ? { ...val, ...data, updatedAt: createDate } : val));
    const isSuccess = writeNotes(updatedNotes);

    isSuccess ? resolve() : reject();
  });
};

const deleteNoteByIdService = function (id) {
  const notes = readNotes();

  return new Promise((resolve, reject) => {
    const isNoteExist = notes.find((val) => val.id == id);

    if (!isNoteExist) reject();

    const deletedNotes = notes.filter((val) => val.id != id);
    const isSuccess = writeNotes(deletedNotes);

    isSuccess ? resolve() : reject();
  });
};

module.exports = {
  getAllNotesService,
  getNoteByIdService,
  addNoteService,
  editNoteByIdService,
  deleteNoteByIdService,
};
