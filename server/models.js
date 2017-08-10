'use strict';

const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');

const userSchema = new mongoose.Schema({
  userName: {type: String, required: true},
  password: {type: String, required: true},
  hashPassword: {type: String},
  email: {type: String, required: true},
  userEntries: []
  //my quotes will be an array of ids that match the id of the quotes
  // myQuotes: [{type: mongoose.Schema.Types.ObjectId, ref: 'Quote'}]
});

const userEntriesSchema = new mongoose.Schema({
  userName: {type: String, required: true},
  // password: {type: String, required: true},
  emotion: {type: String/*, required: true*/},
  comment: {type: String},
  timeOfEvent: {type: Date, default: Date.now }
});

userEntriesSchema.methods.apiRepr = function() {
  return {
    id: this.id,
    userName: this.userName,
    emotion: this.emotion,
    comment: this.comment,
    timeOfEvent: this.timeOfEvent,
  };
};

const UserEntries = mongoose.model('UserEntry', userEntriesSchema);
module.exports.UserEntries = UserEntries;
