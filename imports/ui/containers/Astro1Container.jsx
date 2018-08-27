// ROPCScontainer.jsx
// Container component for the Phys1 site
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Syllabi } from '../../api/syllabi/syllabi.js';
import Astro1  from '../pages/Astro1.jsx';

export default Astro1Container = withTracker(() => {
  const syllabusHandle = Meteor.subscribe('syllabi');
  const loading = !syllabusHandle.ready();
  const syllabus = Syllabi.findOne({name:"Astro1"});
  const syllExists = !loading && !!syllabus;
  //console.log(syllabus);
  return {
    loading,
    syllExists,
    syllabus: syllExists ? syllabus.syllabus : {}
  };
})(Astro1);
