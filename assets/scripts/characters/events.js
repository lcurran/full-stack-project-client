'use strict';
const getFormFields = require('../../../lib/get-form-fields');
const form = require('./character-data');

const api = require('./api');
const ui = require('./ui');

const onListCharacters = () => {
  event.preventDefault();
  api.listCharacters()
  .done(ui.listCharacters)
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
  .done(ui.statsForm)
  .fail(ui.failure);
  api.getSkills()
  .done(ui.skillsForm)
  .fail(ui.failure);
  api.getSpells()
  .done(ui.spellsForm)
  .fail(ui.failure);
};

const onSaveNewCharacter = (event) => {
  event.preventDefault();
  let data = form.characterData(event.target);
  console.log(data);
  api.newCharacter(data)
  .done(ui.success)
  .fail(ui.failure);
};


const addHandlers = () => {
  $('#update-character').on('submit', onUpdateCharacter);
  $('#new-info').on('submit', onSaveNewCharacter);
  $('#list-characters').on('click', onCharacterListRefresh);
};

module.exports = {
  addHandlers,
  onListCharacters,
  onNewCharacterForm,
};
