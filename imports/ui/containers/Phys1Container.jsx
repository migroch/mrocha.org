// ROPCScontainer.jsx
// Container component for the Phys1 site
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Syllabi } from '../../api/syllabi/syllabi.js';
import Phys1  from '../pages/Phys1.jsx';

export default Phys1Container = withTracker(() => {
  const syllabusHandle = Meteor.subscribe('syllabi');
  const loading = !syllabusHandle.ready();
  const syllabus = Syllabi.findOne({name:"Phys1"});
  const syllExists = !loading && !!syllabus;
  //console.log(syllabus);
  return {
    loading,
    syllExists,
    syllabus: syllExists ? syllabus.syllabus : {}
  };
})(Phys1);
