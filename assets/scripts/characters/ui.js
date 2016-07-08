'use strict';

const app = require('../app.js');
const characterInfoTemplate = require('../templates/character-info-view.handlebars');
const characterEditTemplate = require('../templates/character-edit-info.handlebars');
const characterListingTemplate = require('../templates/character-listing.handlebars');
const skillRow = require('../templates/skills-form.handlebars');
const statRow = require('../templates/stats-form.handlebars');
const spellForm = require('../templates/spells-form.handlebars');

const listCharacters = (characters) => {
  if (characters) {
      $('#character-list').append(characterListingTemplate(characters));

    }
};

const newCharacterSuccess = (data) => {
  // console.log(data);
  app.character = data.character;
  $('#collapseAttr').collapse('show');
  $('#collapseSpell').collapse('show');
};

const viewCharacterSuccess = (data) => {
  console.log(data.character);
  $('#view-character').append(characterInfoTemplate(data.character));
};

const loadEditCharacter = (data) => {
  app.character = data.character;
  $('#edit-info').prepend(characterEditTemplate(data.character));
  $('#name').val(data.character.name);
  $('#race').val(data.character.race);
  $('#gender').val(data.character.gender);
  $('#age').val(data.character.age);
  $('#alignment').val(data.character.alignment);
  $('#deity').val(data.character.deity);
};

const statsForm = (stats) => {
  $('.stats').append(statRow(stats));

};

const skillsForm = (skills) => {
  $('.skills').append(skillRow(skills));
};

const spellsForm = (spells) => {
  $('.spells').append(spellForm(spells));
};

const spellSaveSuccess = (data) => {
  console.log(data);
  $('#spell-list').append('<p>' + data.character_spell.spell.name + '</p>');
};

const blurSave = (data) => {
  // console.log(data);
};

const failure = (error) => {
  // console.error(error);
};

const success = (data) => {
  // console.log(data);
};

module.exports = {
  failure,
  success,
  viewCharacterSuccess,
  loadEditCharacter,
  listCharacters,
  statsForm,
  skillsForm,
  spellsForm,
  newCharacterSuccess,
  spellSaveSuccess,
  blurSave,
};
