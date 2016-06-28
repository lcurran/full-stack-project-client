'use strict';
const getFormFields = require('../../../lib/get-form-fields');
const form = require('./character-data');
const api = require('./api');
const ui = require('./ui');

const onSaveNewCharacter = (event) => {
  event.preventDefault();
  let data = form.characterData(event.target);
  console.log(data);
  api.newCharacter(data)
  .done(ui.newCharacterSuccess)
  .fail(ui.failure);
};

const onStatSave = (event) => {
  let data = form.statData(event);
  api.newStat(data)
  .done(ui.success)
  .fail(ui.failure);
};

const onSkillSave = (event) => {
  let data = form.skillData(event);
  api.newSkill(data)
  .done(ui.success)
  .fail(ui.failure);
};

const onAddSpell = (event) => {
  event.preventDefault();
  let data = form.spellData(event.target);
  api.addSpell(data)
  .done(ui.success)
  .fail(ui.failure);
};
// form handlers
const skillHandler = () => {
  for (let i = 1, max = 35; i <= max; i++) {
    $('#' + i).on('blur', onSkillSave);
  };
};

const spellHandler = () => {
  $('#add-spell').on('submit', onAddSpell);
};

const statHandler = () => {
  $('#STR').on('blur', onStatSave);
  $('#DEX').on('blur', onStatSave);
  $('#CON').on('blur', onStatSave);
  $('#INT').on('blur', onStatSave);
  $('#WIS').on('blur', onStatSave);
  $('#CHA').on('blur', onStatSave);
  $('#AC').on('blur', onStatSave);
  $('#HP').on('blur', onStatSave);
  $('#HP').on('blur', onStatSave);
  $('#speed').on('blur', onStatSave);
  $('#initiative').on('blur', onStatSave);
  $('#size').on('blur', onStatSave);
  $('#height').on('blur', onStatSave);
  $('#weight').on('blur', onStatSave);
};

// on page ready handlers
const addHandlers = () => {
  $('#new-info').on('submit', onSaveNewCharacter);
};

module.exports = {
  addHandlers,
  skillHandler,
  spellHandler,
  statHandler,
};
