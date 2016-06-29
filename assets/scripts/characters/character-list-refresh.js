'use strict';

const api = require('./api');
const charUi = require('./character-list-handlebars-ui');

const characterListRefresh = () => {
  event.preventDefault();
  $('#character-list').html('')
  api.listCharacters()
  .done(charUi.listCharacters)
  .fail();
};

module.exports = {
  characterListRefresh,
};
