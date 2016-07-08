'use strict';
const api = require('./api');
const ui = require('./ui');
const getFormFields = require('../../../lib/get-form-fields');
const form = require('./character-data');

const characterListRefresh = () => {
  event.preventDefault();
  $('#character-list').html('');
  api.listCharacters()
  .done(ui.listCharacters, listHandlers)
  .fail();
};

const onListCharacters = () => {
  event.preventDefault();
  api.listCharacters()
  .done(ui.listCharacters, listHandlers)
  .fail(ui.failure);
};

const onViewCharacter = (event) => {
  event.preventDefault();
  $('#view-character').html('');
  let id = event.target.name;
  api.viewCharacter(id)
  .done(ui.viewCharacterSuccess)
  .fail(ui.failure);
};

const onDeleteCharacter = (event) => {
  event.preventDefault();
  let id = event.target.name;
  api.deleteCharacter(id)
  .done(characterListRefresh)
  .fail(ui.failure);
};

const onEditCharacter = (event) => {
  event.preventDefault();
  $('#edit-form').html('');
  let id = event.target.name;
  api.viewCharacter(id)
  .done(ui.loadEditCharacter, editHandler)
  .fail(ui.failure);
};

const onSaveEditCharacter = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.editCharacter(data)
  .done(characterListRefresh)
  .fail(ui.failure);
};

const onNewCharacterForm = () => {
  event.preventDefault();
  api.getStats()
  .done(ui.statsForm, statHandler)
  .fail(ui.failure);
  api.getSkills()
  .done(ui.skillsForm, skillHandler)
  .fail(ui.failure);
  api.getSpells()
  .done(ui.spellsForm, spellHandler)
  .fail(ui.failure);
};

const onSaveNewCharacter = (event) => {
  event.preventDefault();
  let data = form.characterData(event.target);
  api.newCharacter(data)
  .done(ui.newCharacterSuccess, characterListRefresh)
  .fail(ui.failure);
};

const onStatSave = (event) => {
  let data = form.statData(event);
  if (data.character.stat_value) {
    api.newStat(data)
    .done(ui.blurSave)
    .fail(ui.failure);
  }
};

const onSkillSave = (event) => {
  let data = form.skillData(event);
  console.log(data);
  if (data.character.skill_value) {
    api.newSkill(data)
    .done(ui.success)
    .fail(ui.failure);
  }
};

const onAddSpell = (event) => {
  event.preventDefault();
  let data = form.spellData(event.target);
  api.addSpell(data)
  .done(ui.spellSaveSuccess)
  .fail(ui.failure);
};

//page ready handlers
const addHandlers = () => {
  $('#new-info').on('submit', onSaveNewCharacter);
};

//character list handlers

const listHandlers = () => {
  $(".view").on('click', onViewCharacter);
  $(".delete").on('click', onDeleteCharacter);
  $(".edit").on('click', onEditCharacter);
};

//edit character handler

const editHandler = () => {
  $("#edit-info").on('submit', onSaveEditCharacter);
};

// form handlers
const skillHandler = () => {
  $('.skillInput').blur(onSkillSave);
};

const spellHandler = () => {
  $('#add-spell').on('submit', onAddSpell);
};

const statHandler = () => {
  $('.statInput').blur(onStatSave);
};

module.exports = {
  addHandlers,
  onListCharacters,
  onNewCharacterForm,
  onDeleteCharacter,
  onViewCharacter,
  onEditCharacter,
  onSaveEditCharacter,
};
