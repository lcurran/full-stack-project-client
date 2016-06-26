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

module.exports = {
  charactersData,
  characterData,
}
