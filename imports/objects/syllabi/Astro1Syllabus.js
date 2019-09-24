// Astro1Syllabus.js
// Export  initial Astronomy 1 syllabus object

export default  Astro1Syllabus ={
    ShortName: "Astro1",
    SchoolName: "Gavilan College",
    CourseName: "Astronomy 1: Intro to General Astronomy",
    CourseLink: "https://mrocha.org/astro1",
    SectionCode: "",
    SectionLink: "",
    Term: "",
    Units: "3",
    Room: "PS 102",
    Time: "T 6-9:10pm",
    OfficeHour: "Tue 1:00-2:15pm (MA 102), Thu 5-6:30 (PS 103)",
    InstructorName: "Miguel E. Rocha",
    InstructorEmail: "mrocha@gavilan.edu",
    RequiredText: ["<a href='https://www.teachastronomy.com/textbook/' target='_blank'>Teaching Astronomy (Free Online Book by Chris Impey) </a>","The Cosmic Perspective (8th Edition) by Bennett, Donahue, Schneider and Voit"],
    CourseDescription: "This course is an introduction to General Astronomy, with enphasis in theory rather than observations. Students will learn about science, scientific measurements, the solar system, planets,  stars, galaxies and the origins, evolution and structure of the Universe as a whole (i.e. Cosmology). We will also cover the basics of telescopes and astronomical observations. ADVISORY: Mathematics 430. ",
    CourseMotive: {mrocha:"Astronomy and Physics are all about trying to understand the mysteries of the universe, and after each discovery realize how much more there is to know.", hawking:"To confine our attention to terrestrial matters would be to limit the human spirit."},    
    LearningObjectives: [
	//"Identify, describe, compare and contrast the various units of numbers and their significance.",
	//"Describe what science is and the Scientific Method.",
	"Describe the basic development of astronomy beginning with astrological foundations of ancient civilizations through modern day theories.",
	"Describe the principle motions of the earth, moon, and other solar system members.",
	"Describe the basic physics of light, and distinguish between various types of telescopes.",
	"Describe the basic composition and construction of the solar system and its origin.",
	"Compare and contrast the principle differences between the Terrestrial and Jovian Planets.",
	"Describe, compare and contrast the differing properties of stars, and describe accurately their evolutionary processes.",
	"Describe the properties of the Milky Way galaxy, and differentiate between other external galaxies.",
	"Describe the evolution of the universe, and contrast various models on the further evolution of the universe"
    ],
    CourseSchedule:{
	"Week 1: Intro to Astronomy":["<a href='https://www.teachastronomy.com/textbook/How-Science-Works/The-Scientific-Method/' target='_blank'>Chapter 1 (Teach Astronomy)</a>, Chapter 1,3 (Cosmic Perspective)", "<a href='https://slides.com/migroch/deck-1-3-41/fullscreen' target='_blank'>What is Astronomy?, What is Science? and The Scientific Method</a>"],

	"Week 2: Math Review and Scientific Measurements":["<a href='https://www.teachastronomy.com/textbook/How-Science-Works/The-Scientific-Method/' target='_blank'>Chapter 1 (Teach Astronomy)</a>", "<a href='https://slides.com/migroch/deck-1-3-41/fullscreen#/20' target='_blank'>Math Review Scientific Measurements - Lecture Slides</a>"],
	
	"Week 3: Our view of The Universe":["Chapter 2 (Cosmic Perspective), <a href='https://www.teachastronomy.com/textbook/Early-Astronomy/The-Night-Sky/' target='_blank'>Chapter 2 (Teach Astronomy)</a>", "<a  href='https://slides.com/migroch/deck-2-4-43/fullscreen' target='_blank'>Our View of The Universe: The Celestial Sphere, Constellations and Seasons", "Assignments due Tuesday: <a href='Phys1-Lab1.pdf' target='_blank'>Lab 1: Measuring the Diameter of the Sun</a> and <a href='Phys1-Hw1.pdf' target='_blank'>HW 1: Units Conversion Practice</a>"],

	"Week 4: The Moon, Eclipses and Tides":["Chapter 2 (Cosmic Perspective), <a  href='https://www.teachastronomy.com/textbook/Early-Astronomy/The-Night-Sky/' target='_blank'>Chapter 2 & 5 (Teach Astronomy)</a>", "<a  href='https://slides.com/migroch/the-solar-system/fullscreen/' target='_blank'>The Moon, Eclipses, Tides and The Solar System</a>", "Assignments due Tuesday: <a  href='SkyView_9-10-19_20hrs.pdf' target='_blank'>Lab 2: Reading a Sky Chart </a>"],
	
	"Week 5: The Solar System":["Chapter 7-13 (Cosmic Perspective), <a href='https://www.teachastronomy.com/textbook/The-Copernican-Revolution' target='_blank'>Chapter 3, 6-9  (Teach Astronomy)</a>", "<a  href='https://slides.com/migroch/the-solar-system/fullscreen/#/32' target='_blank'>The Solar System</a>" , "Assignments due Tuesday: <a  href='craters.pdf' target='_blank'>Lab 3: Impact Craters </a>" ],
	
	"Week 6":["History of Astronomy and the Cosmology of Ancient Civilisations", "Assignments due Tuesday: <a  href='ObservingPlanets.pdf' target='_blank'>Lab 4: Observing Planets</a>" ],
	
	"Week 7":["Chapter 4 (Cosmic Perspective), <a class='disabled' href='https://www.teachastronomy.com/textbook/The-Copernican-Revolution' target='_blank'>Chapter 3  (Teach Astronomy)</a>", "<a class='disabled' href='https://slides.com/migroch/the-solar-system/fullscreen/#/32' target='_blank'>The Solar System</a> and <a  class='disabled' href='https://slides.com/migroch/deck-45/fullscreen' target='_blank'>Kepler's Laws of Planetary Motion</a>", "Assignments due Tuesday: <a  class='disabled' href='https://ilearn.gavilan.edu/courses/5373/quizzes/11968' target='_blank'>Midterm 1</a> "],

	"Week 8":["Chapter 4 (Cosmic Perspective), <a class='disabled' href='https://www.teachastronomy.com/textbook/The-Copernican-Revolution' target='_blank'>Chapter 3  (Teach Astronomy)</a>", "<a  class='disabled' href='https://slides.com/migroch/deck-45/fullscreen' target='_blank'>Gravity, Sattelites and Newtons Laws of Motion</a>","Assignments due Tuesday: <a  class='disabled' href='KeplersLab.pdf' target='_blank'>Lab 5: Kepler's Laws of Planetary Motion </a>"],

	"Week 9":["Intro to Special and General Relativity"],
	
	"Week 10":[ "Chapter 5 and 6 (Cosmic Perspective), <a class='disabled' href='https://www.teachastronomy.com/textbook/Detecting-Radiation-from-Space' target='_blank'>Chapter 10  (Teach Astronomy)</a>","<a  class='disabled' href='https://slides.com/migroch/deck-46/fullscreen' target='_blank'>EM Waves, Light and Telescopes</a>", "Assignments due Tuesday: <a  class='disabled' href='FreeFallLab.pdf' target='_blank'>Lab 6: Measuring g </a>"],
	
	"Week 11":[ "Chapter 5 and 6 (Cosmic Perspective), <a class='disabled' href='https://www.teachastronomy.com/textbook/Detecting-Radiation-from-Space' target='_blank'>Chapter 10  (Teach Astronomy)</a>","<a  class='disabled' href='https://slides.com/migroch/deck-46#/27/fullscreen' target='_blank'>Mirrors, Lenses and Telescopes</a>", "Assignments due Tuesday: <a  class='disabled' href='Astro1-Lab7.pdf' target='_blank'>Lab 7: Emission Spectra </a>"],

	"Week 12":["Chapters 14-17 (Cosmic Perspective), <a class='disabled' href='https://www.teachastronomy.com/textbook/Our-Sun-The-Nearest-Star/The-Sun/' target='_blank'>Chapter 11-13  (Teach Astronomy)</a>", "<a  class='disabled' href='https://slides.com/migroch/deck-47/fullscreen' target='_blank'>Stars, Stellar Evolution and H-R Diagrams </a>", "Assignments due Tuesday: <a  class='disabled' href='Astro1-Lab8.pdf' target='_blank'>Lab 8: Building a Simple Telescope</a>"],
	
	"Week 13":["Chapters 19-23 (Cosmic Perspective), <a https://www.teachastronomy.com/textbook/The-Milky-Way/The-Distribution-of-Stars-in-Space/ target='_blank'>Chapter 14-17  (Teach Astronomy)</a>", "<a   class='disabled' href='https://slides.com/migroch/galaxy/fullscreen#/' target='_blank'>Galaxies, Cosmology and Galaxy Evolution</a>", "Assignments due Tuesday: <a  class='disabled' href='Astro1-Lab9.pdf' target='_blank'>Lab 9: H-R Diagrams </a>"],
	
	"Week 14 & 15":["","TBD"],

	"Week 16":["", "Finals week"],

	// <a class='disabled' href='http://slides.com/migroch/deck-1-3-7-11-17' target='_blank'>Change of Phase and Thermodynamics</a>","<a class='disabled' href='https://ilearn.gavilan.edu/courses/2425/assignments/20667' target='_blank'>HW 5</a
    },
    Homework:"Your will have homework assigned every week and due the next class meeting (Tuesdays).",
    Labs:"There will be labs/activities some days during class time. Lab reports or follow up assignments will be part of your weekly homework.",
    Projects:"The final will be a team project researching any topic that you found the most interesting during the course. You will create a 10 min presentation demonstrating a more in depth understanding of the selected topic.",
    Grading:{"Assignments": "40%", "Quizzes":"30%",  "Final":"30%"},
    GradeScale:"https://i0.wp.com/greatcollegeadvice.com/wp-content/uploads/2008/11/slide15.jpg",
    ExtraCredit:"There will be extra credit oportunities within your homeworks and lectures",
    SuccessTip:"READ, do not memorize, UNDERSTAND!",
    LateWork:"I reserve the right of not grading late assignments.",
    Honesty:"Students are expected to exercise academic honesty and integrity. Violations such as cheating and plagiarism will result in disciplinary action which may include recommendation for dismissal.",
    AttendancePolicy:"Students missing one more class hour than the unit value for particular course, without making prior arrangements may, at the instructor’s option, be dropped without possibility of credit.",
    ADA:"Students requiring special services or arrangements because of hearing, visual, or other disability should contact their instructor, counselor, or the Accesible Education Center.",
    OV:"Occupational/Vocational students—Limited English language skills will not be a barrier to admittance to and participation in Vocational Education Programs."
};
