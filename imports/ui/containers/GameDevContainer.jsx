// RopCScontainer.jsx
// Container component for the RopCS site
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Syllabi } from '../../api/syllabi/syllabi.js';
import GameDev  from '../pages/GameDev.jsx';

export default RopCSContainer = withTracker(() => {
  const user = Meteor.user();
  const syllabusHandle = Meteor.subscribe('syllabi');
  const loading = !syllabusHandle.ready();
  const syllabus = Syllabi.findOne({name:"GameDev"});
  const syllExists = !loading && !!syllabus;
  //console.log(syllabus);
  return {
    user,
    loading,
    syllExists,
    syllabus: syllExists ? syllabus.syllabus : {}
  };
})(GameDev);

