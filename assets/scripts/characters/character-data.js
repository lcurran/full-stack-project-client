'use strict';

const app = require('../app.js');
const getFormFields = require('../../../lib/get-form-fields');

const charactersData = (form) => {
  let userObj = {
      "user_id": app.user.id
    };
    let formObj = getFormFields(form);
    let data = {};
    data['characters'] = Object.assign(userObj, formObj);
    return data;
};

const characterData = (form) => {
  let userObj = {
      "user_id": app.user.id
    };
    let formObj = getFormFields(form);
    let data = {};
    data['character'] = Object.assign(userObj, formObj);
    return data;
};

const statData = (event) => {
  let character = {};
  character["character_id"] = app.character.id;
  character["stat_value"] = event.target.value;
  character["stat_id"] = event.target.name;
  let data = {};
  data['character'] = character;
  return data;
};

const skillData = (event) => {
  let character = {};
  character["character_id"] = app.character.id;
  character["skill_value"] = event.target.value;
  character["skill_id"] = event.target.id;
  let data = {};
  data['character'] = character;
  return data;
};

const spellData = (form) => {
  let userObj = {
    "character_id": app.character.id,
  };
  let formObj = getFormFields(form);
  let data = {};
  data['character'] = Object.assign(userObj, formObj);
  return data;
};

module.exports = {
  charactersData,
  characterData,
  statData,
  skillData,
  spellData,
};
