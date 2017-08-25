// publications.js
// Publish syllabi collection
import { Meteor } from 'meteor/meteor';
import { Syllabi } from '../syllabi.js';

Meteor.publish("syllabi", function(){
    return Syllabi.find();
});

