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
  let obj = {
    "character_id": app.character.id,
    "stat_value": event.target.value,
    "stat_id": event.target.name
  }
  let data = {};
  data['character'] = obj;
  return data;
};

const skillData = (event) => {
  let info = {};
  info["character_id"] = app.character.id;
  info["skill_value"] = event.target.value;
  info["skill_id"] = event.target.name;
  let data = {};
  data['character'] = info;
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
