'use strict';

// const log = require('../templates/die-roll.handlebars');


const displayRoll = (roll) => {
  $('#roll-log').prepend("<p>You rolled a " + roll + ".</p>");
};

module.exports = {
  displayRoll,
}
