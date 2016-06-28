'use strict';
const skillRow = require('../templates/skills-form.handlebars');
const statRow = require('../templates/stats-form.handlebars');
const spellForm = require('../templates/spells-form.handlebars');
const events = require('./form-save-events');

const skillsForm = (skills) => {
  $('.skills').append(skillRow(skills));
  events.skillHandler();
};

const statsForm = (stats) => {
  $('.stats').append(statRow(stats));
  events.statHandler();
};

const spellsForm = (spells) => {
  $('.spells').append(spellForm(spells));
  events.spellHandler();
};

module.exports = {
  skillsForm,
  statsForm,
  spellsForm,
}
