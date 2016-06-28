'use strict';

const app = require('../app.js');
const characterListingTemplate = require('../templates/character-listing.handlebars');


const listCharacters = (characters) => {
  // console.log(characters);
  if (characters) {
      $('#character-list').append(characterListingTemplate(characters));
    }
};

const clearCharacterList = () => {
  $('#character-list').html('')
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

const success = (data) => {
  console.log(data);
};

module.exports = {
  listCharacters,
  clearCharacterList,
  update,
  failure,
  success,
  newCharacterSuccess,
};
