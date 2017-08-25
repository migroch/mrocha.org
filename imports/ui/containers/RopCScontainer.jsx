// RopCScontainer.jsx
// Container component for the RopCS page
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Syllabi } from '../../api/syllabi/syllabi.js';
import RopCS  from '../pages/RopCS.jsx';

export default RopCScontainer = createContainer(() => {
  const syllabusHandle = Meteor.subscribe('syllabi');
  const loading = !syllabusHandle.ready();
  const syllabus = Syllabi.findOne();
  const syllExists = !loading && !!syllabus;
  return {
    loading,
    syllExists,
    syllabus: syllExists ? syllabus.fetch() : {}
  };
}, RopCS);

