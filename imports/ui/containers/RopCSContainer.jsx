// RopCScontainer.jsx
// Container component for the RopCS site
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Syllabi } from '../../api/syllabi/syllabi.js';
import RopCS  from '../pages/RopCS.jsx';

export default RopCSContainer = withTracker(() => {
  const user = Meteor.user();
  const syllabusHandle = Meteor.subscribe('syllabi');
  const loading = !syllabusHandle.ready();
  const syllabus = Syllabi.findOne({name:"RopCS"});
  const syllExists = !loading && !!syllabus;
  //console.log(syllabus);
  return {
    user,
    loading,
    syllExists,
    syllabus: syllExists ? syllabus.syllabus : {}
  };
})(RopCS);

