'use strict';
const api = require('./api');
const ui = require('./ui');
const formUi = require('./form-handlebars-ui');
const charUi = require('./character-list-handlebars-ui')

const onListCharacters = () => {
  event.preventDefault();
  api.listCharacters()
  .done(charUi.listCharacters)
  .fail(ui.failure);
};

const onNewCharacterForm = () => {
  event.preventDefault();
  api.getStats()
  .done(formUi.statsForm)
  .fail(ui.failure);
  api.getSkills()
  .done(formUi.skillsForm)
  .fail(ui.failure);
  api.getSpells()
  .done(formUi.spellsForm)
  .fail(ui.failure);
};


const addHandlers = () => {
};

module.exports = {
  addHandlers,
  onListCharacters,
  onNewCharacterForm,
};
