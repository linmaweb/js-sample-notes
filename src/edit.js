import { initializeEditPage, generateLastEdited } from "./views";
import { updateNote, removeNote } from "./notes";
import { titleElement,  bodyElement,  removeElement,  dateElement } from './variables.js';

const noteId = location.hash.substring(1);

initializeEditPage(noteId);

titleElement.addEventListener("input", (e) => {
  const note = updateNote(noteId, {
    title: e.target.value,
  });
  dateElement.textContent = generateLastEdited(note.updatedAt);
});

bodyElement.addEventListener("input", (e) => {
  const note = updateNote(noteId, {
    body: e.target.value,
  });
  dateElement.textContent = generateLastEdited(note.updatedAt);
});

removeElement.addEventListener("click", (e) => {
  removeNote(noteId);
  location.assign("/index.html");
});

window.addEventListener("storage", (e) => {
  if (e.key === "notes") {
    initializeEditPage(noteId);
  }
});
