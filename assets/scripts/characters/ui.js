'use strict';

// const app = require('../app.js');
const characterListingTemplate = require('../templates/character-listing.handlebars');

const listCharacters = (characters) => {
  console.log(characters);
  if (characters) {
      $('#character-list').append(characterListingTemplate(characters));
    }
};

const update = () => {
  alert('character updated');
};

const failure = (error) => {
  console.error(error);
};

module.exports = {
  listCharacters,
  update,
  failure,
};
