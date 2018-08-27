// fixtures.js
// Insert startup data from ../../objects 
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Syllabi } from '../../api/syllabi/syllabi.js';
import Phys1Syllabus from '../../objects/syllabi/Phys1Syllabus.js';
import Astro1Syllabus from '../../objects/syllabi/Astro1Syllabus.js';
import RopCSSyllabus from '../../objects/syllabi/RopCSSyllabus.js';
import GameDevSyllabus from '../../objects/syllabi/GameDevSyllabus.js';
import RopCSStudents from '../../objects/students/RopCSStudents.js';

Meteor.startup(() => {
    // Upsert syllabi data to Syllabi collection
    const syllabi = [Phys1Syllabus, RopCSSyllabus, GameDevSyllabus, Astro1Syllabus];
    syllabi.forEach((syll) =>{
	console.log("Upserting "+syll.ShortName+" syllabus into "+"Syllabi collection.");
	Syllabi.upsert({name: syll.ShortName},
		       {name: syll.ShortName,syllabus: syll},
		       {upsert: true}
		      );
    });
    
    // Add the robux Balance field to any newly created users
    Accounts.onCreateUser((options, user) => {
	user.robuxBalance = 0; 
	// We still want the default hook's 'profile' behavior.
	if (options.profile) {
	    user.profile = options.profile;
	}
	// Don't forget to return the new user object at the end!
	return user;
    });
    	
    // Create users from the RopCS list of students
    RopCSStudents.students.forEach((student) =>{
	let username = student.First+student.Last[0];
	let user = Accounts.findUserByUsername(username);
	if (!user){
	    console.log("Creating user "+ username);
	    Accounts.createUser({username: username,
				 email: student.email,
				 password:"funRobux",
				 profile:{First:student.First, Last:student.Last, Robux:student.Robux}
				});
	} else if (user.profile.Robux != student.Robux){
	    console.log("updating Robux balance for user " + username);
	    Meteor.users.update(user._id, {$set:{ "profile.Robux": student.Robux}} );
	}
    });
});

