'use strict';

const app = require('../app.js');
const characterListingTemplate = require('../templates/character-listing.handlebars');
const skillRow = require('../templates/skills-form.handlebars');
const statRow = require('../templates/stats-form.handlebars');
const spellForm = require('../templates/spells-form.handlebars');

const listCharacters = (characters) => {
  // console.log(characters);
  if (characters) {
      $('#character-list').append(characterListingTemplate(characters));
    }
};

const clearCharacterList = () => {
  $('#character-list').html('')
};

const skillsForm = (skills) => {
  // console.log(skills);
  $('.skills').append(skillRow(skills));
};

const statsForm = (stats) => {
  // console.log(stats);
  $('.stats').append(statRow(stats));
};

const spellsForm = (spells) => {
  // console.log(spells);
  $('.spells').append(spellForm(spells));
};

const newCharacterSuccess = (data) => {
  // console.log(data)
  app.character = data.character
};

const update = () => {
  alert('character updated');
};

const failure = (error) => {
  console.error(error);
};

module.exports = {
  listCharacters,
  clearCharacterList,
  update,
  failure,
  skillsForm,
  statsForm,
  spellsForm,
  newCharacterSuccess,
};
