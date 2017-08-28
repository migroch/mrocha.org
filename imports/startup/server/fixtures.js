// fixtures.js
// Insert syllabus objects 
import { Meteor } from 'meteor/meteor';
import { Syllabi } from '../../api/syllabi/syllabi.js';
import Phys1Syllabus from '../../objects/syllabi/Phys1Syllabus.js';
import RopCSSyllabus from '../../objects/syllabi/RopCSSyllabus.js';

Meteor.startup(() => {
    const syllabi = [Phys1Syllabus, RopCSSyllabus];
    syllabi.forEach((syll) =>{
	console.log("Inserting "+syll.ShortName+" syllabus into "+"Syllabi collection.");
	Syllabi.upsert({name: syll.ShortName},
		       {name: syll.ShortName,syllabus: syll},
		       {upsert: true}
		      );
    });		     
});

