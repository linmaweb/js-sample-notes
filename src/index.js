import { createNote } from "./notes";
import { setFilters } from "./filters";
import { renderNotes } from "./views";
import {createNoteElement, searchTextElement,  filterByElement} from './variables.js';


renderNotes();

createNoteElement.addEventListener("click", (e) => {
  const id = createNote();
  location.assign(`/edit.html#${id}`);
});

searchTextElement.addEventListener("input", (e) => {
  setFilters({
    searchText: e.target.value,
  });
  renderNotes();
});

filterByElement.addEventListener("change", (e) => {
  setFilters({
    sortBy: e.target.value,
  });
  renderNotes();
});

window.addEventListener("storage", (e) => {
  if (e.key === "notes") {
    renderNotes();
  }
});
