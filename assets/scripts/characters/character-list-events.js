'use strict';

const api = require('./api');
const ui = require('./ui');
const refresh = require('./character-list-refresh');

const onDeleteCharacter = (event) => {
  event.preventDefault();
  let id = event.target.name;
  api.deleteCharacter(id)
  .done(refresh.characterListRefresh)
  .fail(ui.failure);
};

const onViewCharacter = (event) => {
  event.preventDefault();
  let id = event.target.name;
  api.viewCharacter(id)
  .done(ui.viewCharacterSuccess)
  .fail(ui.failure);
};

const onEditLoad = (event) => {
  event.preventDefault();
  let id = event.target.name;
  api.viewCharacter(id)
  .done(ui.loadEditCharacter)
  .fail(ui.failure);
};

const onEditCharacter = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.editCharacter(data)
  .done(refresh.characterListRefresh)
  .fail(ui.failure);
};

const listHandlers = () => {
  $(".delete").on('click', onDeleteCharacter);
  $(".view").on('click', onViewCharacter);
  $(".edit").on('click', onEditLoad);
  $("#edit-info").on('submit', onEditCharacter);
};

module.exports = {
  listHandlers
};
