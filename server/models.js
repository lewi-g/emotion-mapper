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

const userEntrySchema = new mongoose.Schema({
  userName: {type: String, required: true},
  // password: {type: String, required: true},
  emotion: {type: String, 
    required: true},
  event: {type: String},
  timeOfEvent: {type: Date, default: Date.now }

});

const UserEntry = mongoose.model('UserEntry', userEntrySchema);
module.exports.UserEntry = UserEntry;