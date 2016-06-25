'use strict';

const app = require('../app.js');
const getFormFields = require('../../../lib/get-form-fields');

const characterData = (form) => {
  let userObj = {
      "user_id": app.user.id
    };
    let formObj = getFormFields(form);
    let data = {};
    data['characters'] = Object.assign(userObj, formObj);
    return data;
};

module.exports = characterData;
