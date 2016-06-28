'use strict';

const api = require('./api');
const ui = require('./ui')

const onDeleteCharacter = (event) => {
  event.preventDefault();
  let id = event.target.name;
  api.deleteCharacter(id)
  .done(ui.success)
  .fail(ui.failure);
};

const onViewCharacter = (event) => {
  event.preventDefault();
  let id = event.target.name;
  api.viewCharacter(id)
  .done(ui.viewCharacterSuccess)
  .fail(ui.failure);
};

const listHandlers = () => {
  $(".delete").on('click', onDeleteCharacter);
  $(".view").on('click', onViewCharacter);
};

module.exports = {
  listHandlers
};
