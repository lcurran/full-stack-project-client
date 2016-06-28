'use strict';

const characterListingTemplate = require('../templates/character-listing.handlebars');
const list = require('./character-list-events');

const listCharacters = (characters) => {
  // console.log(characters);
  if (characters) {
      $('#character-list').append(characterListingTemplate(characters));
    };
  list.listHandlers();
};

module.exports = {
  listCharacters,
};
