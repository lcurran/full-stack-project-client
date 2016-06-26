'use strict';
// const getFormFields = require('../../../lib/get-form-fields');
const characterData = require('./character-update-data');

const api = require('./api');
const ui = require('./ui');

const onListCharacters = () => {
  event.preventDefault();
  api.listCharacters()
  .done(ui.listCharacters)
  .fail(ui.failure);
};

const onUpdateCharacter = (event) => {
  event.preventDefault();
  let data = characterData(event.target);
  console.log(data);
  api.updateCharacter(data)
  .done(ui.update)
  .fail(ui.failure);
};

const onNewCharacter = () => {
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


const addHandlers = () => {
  // $("#list-characters").on('click', onListCharacters);
  $("#update-character").on('submit', onUpdateCharacter);
};

module.exports = {
  addHandlers,
  onListCharacters,
  onNewCharacter,
};
