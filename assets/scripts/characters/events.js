'use strict';
const getFormFields = require('../../../lib/get-form-fields');
const form = require('./character-data');

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

const onCharacterListRefresh = () => {
  event.preventDefault();
  ui.clearCharacterList();
  api.listCharacters()
  .done(ui.listCharacters)
  .fail(ui.failure);
};

const onUpdateCharacter = (event) => {
  event.preventDefault();
  let data = form.charactersData(event.target);
  api.updateCharacter(data)
  .done(ui.update)
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
  $('#update-character').on('submit', onUpdateCharacter);
  $('#list-characters').on('click', onCharacterListRefresh);
};

// $('#user_name').on('focusout', function() {
//     $("#formEditUsername").trigger('submit');
// });

module.exports = {
  addHandlers,
  onListCharacters,
  onNewCharacterForm,
};
