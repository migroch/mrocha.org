// Phys1Syllabus.js
// Export  initial Physics 1 syllabus object

export default  Phys1Syllabus ={
    ShortName: "Phys1",
    SchoolName: "Gavilan College",
    CourseName: "Physics 1: Intro to Physics",
    CourseLink: "https://mrocha.org/phys1",
    SectionCode: "",
    SectionLink: "",
    Term: "",
    Units: "4",
    Room: "PS 102",
    Time: "",
    OfficeHour: "Tu 1-2:15pm (MA 102), Th 5-6:30pm (PS 103)",
    InstructorName: "Miguel E. Rocha",
    InstructorEmail: "mrocha@gavilan.edu",
    RequiredText: "Conceptual Physics 12th Edition by Paul G. Hewitt",
    CourseDescription: "This course is an introduction to the fundamental physical principles that control the world around us. Students will explore the fundamental principles of physics, their historical development, their application to everyday phenomena, and their impact upon political, social, and environmental issues. Laboratory exercises will explore the everyday world. ADVISORY: Mathematics 430. ",
    CourseMotive: {mrocha:"Physics is all about trying to understand the mysteries of the universe, and after each discovery realize how much more there is to know.", heisenberg:"Not only is the Universe stranger than we think, it is stranger than we can think."},    
    LearningObjectives: [
	"Identify, describe, compare and contrast the various units of numbers and their significance.",
	"Identify, describe, compare and contrast random and systematic errors.",
	"Describe the Scientific Method.",
	"Identify, describe, compare and contrast distance, displacement, speed, velocity and acceleration.",
	"Identify, describe, compare and contrast forces, Newton's laws, conservation of momentum, conservation of energy, power, and work.",
	"Describe the structure of an atom.",
	"Identify, describe, compare and contrast the structure of and differences between various states of matter.",
	"Describe, compare and contrast temperature, heat energy, heat transfer, and the first and second laws of thermodynamics.",
	"Describe, identify, compare and contrast longitudinal, transverse, sound, and light waves",
	"Describe, compare and contrast electric and magnetic fields, resistance, current, and voltage."	
    ],
    CourseSchedule:{
	"Week 1: Intro to Physics and Scientific Measurements":["Chapters: 1", "<a href='http://slides.com/migroch/deck-2-4/fullscreen' target='_blank'>What is Physics, What is Science and Scientific Measurements</a>", "<a href='Phys1-Lab1.pdf' target='_blank'>Lab 1: Measuring the Diameter of the Sun</a>"],

	"Week 2: Inertia and Newton's Laws of Motion":["Chapters: 2, 3, 4, 5", "<a  href='http://slides.com/migroch/deck-1-3-5/fullscreen' target='_blank'>Newton's Laws of Motion</a>","Assignments due Friday: <a href='Phys1-Lab1.pdf' target='_blank'>Lab 1: Measuring the diameter of the Sun</a> and <a href='Phys1-Hw1.pdf' target='_blank'>HW 1: Unit Conversion Practice</a>"],

	"Week 3: Momentum and Energy":["Chapters: 6, 7", "<a href='http://slides.com/migroch/deck-1-3-7/fullscreen' target='_blank'>Momentum and Energy</a>", "Assignments due Friday: <a href='https://ilearn.gavilan.edu/courses/7263/quizzes/18271' target='_blank'>HW 2</a>, <a  href='Phys1-Lab2.pdf' target='_blank'>Lab 2: Equilibrium on an Inclined Plane</a> and <a  href='Phys1-Lab3.pdf' target='_blank'>Lab 3: Constant Acceleration</a>"],

	"Week 4: Rotational and Projectile Motion":["Chapters: 8, 9, 10", "<a  href='https://slides.com/migroch/deck-2-4-9/fullscreen' target='_blank'>Rotational Motion</a>, <a  href='https://slides.com/migroch/deck-1-3-7-11/fullscreen' target='_blank'>Gravity and Projectile Motion</a>","Assignments due Friday: <a href='https://ilearn.gavilan.edu/courses/7263/quizzes/18284'>HW 3</a>, <a  href='Phys1-Lab4.pdf' target='_blank'>Lab 4: Conservation of Momentum</a> and <a href='Phys1-Lab5.pdf' target='_blank'>Lab 5: Conservation of Energy</a>" ],
	
	"Week 5: Midterm 1":[ "<a  href='Phys1-Midterm1.pdf' target='_blank' >Midterm 1 (Ch 1-10)</a> on Thursday Sept 26th","<a  href='https://slides.com/migroch/deck-2-4-9-12/fullscreen' target='_blank'>Midterm 1 Study Guide</a>", "Assignments due Friday: <a href='https://ilearn.gavilan.edu/courses/7263/quizzes/18282' target='_blank'>HW 4</a>, <a href='Phys1-Lab6.pdf' target='_blank'>Lab 6: Rotational Inertia</a>, <a href='https://ilearn.gavilan.edu/courses/7263/quizzes/18270?module_item_id=214624' target='_blank'>Midterm 1 Practice Quiz</a>"],

	"Week 6: Composition of The Universe and Properties of Matter":["Chapters: 11-15", "<a href='http://slides.com/migroch/deck-1-3-7-11-13/fullscreen' target='_blank'>Composition of The Universe and Properties of Matter</a>", ""],
	
	"Week 7":["Chapters: 15-18", "<a class='disabled' href='http://slides.com/migroch/deck-2-4-9-12-16/fullscreen' target='_blank'>Temprature, Heat and Heat Transfer</a>, <a class='disabled' href='http://slides.com/migroch/deck-1-3-7-11-17' target='_blank'>Change of Phase and Thermodynamics</a> ", "Assignments due Friday: <a  href='https://www.youtube.com/watch?v=yfS1lr8FW1A' target='_blank'>Lab 7: The Standard Model Through History</a> and <a  href='Phys1-Lab8.pdf' target='_blank'>Lab 8: Hooke's Law</a> "],

	    // <a class = 'disabled' class='disabled' class='disabled' href='http://slides.com/migroch/deck-1-3-7-11-17' target='_blank'>Change of Phase and Thermodynamics</a>","<a class = 'disabled' class='disabled' href='https://ilearn.gavilan.edu/courses/2425/assignments/20667' target='_blank'>HW 5</a
	
	"Week 8":["Chapters: 19-21", "<a  class='disabled'  href='http://slides.com/migroch/deck-2-4-9-12-18/fullscreen' target='_blank'>Waves and Sound</a>"," Assigments due Friday: <a class='disabled' href='https://ilearn.gavilan.edu' target='_blank'>HW 5</a>, <a class='disabled' href='Phys1-Lab9.pdf' target='_blank'>Lab 9: Temperature Mix</a> and <a  class='disabled' href='Phys1-Lab11.pdf' target='_blank'>Lab 11: Dry Ice Fun!</a> "],
	//<a class = 'disabled' href='Phys1-Lab10.pdf' target='_blank'>Lab 10: Heat Transfer by Radiation</a>
	
	// , "<a class = 'disabled' class='disabled' class='disabled' href='Phys1-Midterm2_answers.pdf' target='_blank'></a>"	
	"Week 9":[ "Chapters: 22-23", "<a class='disabled' href='http://slides.com/migroch/deck-1-3-7-11-17-20/fullscreen' target='_blank'>Electricity</a>, <a  class='disabled' href='https://slides.com/migroch/deck-1-3-7-11-17-20/fullscreen#/22' target='_blank'>Electric Current</a>","Assigments due Friday: <a class='disabled' href='Phys1-Lab12.pdf' target='_blank'>Lab 12: Water Waves Simulation</a> and <a  class='disabled' href='Phys1-Lab13.pdf' target='_blank'>Lab 13: Sound and Music</a>" ],

	"Week 10":["<a class='disabled' href='Phys1-Midterm2_S2019.pdf'  target='_blank'> Mid Term 2 (Ch 11-21)</a> on Thursday Oct 31st", "<a  class='disabled' href='https://slides.com/migroch/deck-1-3-7-11-34/fullscreen#/' target='_blank'>Midterm 2 Study Guide</a>", "Assigments due Friday:<a class='disabled' href='https://ilearn.gavilan.edu' target='_blank'>HW 5</a>,  <a class='disabled' href='https://ilearn.gavilan.edu' target='_blank'>HW 6 (Midterm 2 Practice Quiz)</a>"],
	
	"Week 11":["Chapters: 23-26", "<a  class='disabled' href='http://slides.com/migroch/deck-2-4-9-12-18-22/fullscreen' target='_blank'>Magnetism and Electromagnetic Induction</a>","<a  class='disabled' href='Phys1-Lab14.pdf' target='_blank'>Lab 14: Basic Circuits</a> due Friday"],
	
	"Week 12":["Chapters: 27-29", "<a  class='disabled' href='http://slides.com/migroch/deck-1-3-7-11-17-20-23/fullscreen' target='_blank'>Electromagnetic Waves, Light and Color</a> <br />  <a class='disabled' href='http://slides.com/migroch/deck-2-4-9-12-18-22-26/fullscreen'>Properties of Light Waves</a>", "<a class='disabled' href='https://ilearn.gavilan.edu' target='_blank'>HW7</a> , <a  class='disabled' href='Phys1-Lab15.pdf' target='_blank'>Lab 15: Magnetic Field Lines</a> and <a  class='disabled' href='Phys1-Lab15-2.pdf' target='_blank'>Lab 15.2: Electromagnetic Induction</a> due Friday"],
	
	"Week 13":["Chapters: 28-29", "<a  class='disabled' href='http://slides.com/migroch/deck-2-4-9-12-18-22-26/fullscreen'>Properties of Light Waves</a>, <a class='disabled' href='https://slides.com/migroch/deck-1-3-7-11-17-20-23-27/fullscreen' target='_blank'>Light Emission and Light Quanta (Photons)</a>,", "<a  class='disabled' href='Phys1-Lab16.pdf' target='_blank'>Lab 16: Light Dispersion</a> and <a class='disabled' href='Phys1-Lab17.pdf' target='_blank'>Lab 17: Convex Lens Magnification</a>  due Friday"],
	
	"Week 14":["Chapters: 30-31",  "<a class='disabled' href='https://slides.com/migroch/deck-2-4-9-12-18-22-26-28/fullscreen' target='_blank'>Quantum Physics</a>, <a  class='disabled' href='https://slides.com/migroch/deck-1-3-7-11-17-20-23-27-29/fullscreen' target='_blank'>The Atomic Nucleus and Radioactivity</a>",  " <a  class='disabled' href='Phys1-Lab18.pdf' target='_blank'>Lab 18: Laser Diffraction with a Ruler</a> and <a  class='disabled' href='Phys1-Lab19.pdf' target='_blank'>Lab 19: Emission Spectra</a> due Friday"],
	
	"Week 15":["Chapters: 32-34", "<a class='disabled' href='https://slides.com/migroch/deck-1-3-7-11-17-20-23-27-29/fullscreen' target='_blank'>The Atomic Nucleus and Radioactivity</a>, <a  class='disabled' href='https://slides.com/migroch/deck-2-4-9-12-36/fullscreen' target='_blank'>Midterm 3 Study Guide</a>", "HW8 due Friday"],

	"Week 16":[ "Final/Midterm 3 (Ch 22-34) on Tuesday, Dec 10th", "<a  class='disabled' href='https://slides.com/migroch/deck-2-4-9-12-36/fullscreen' target='_blank'>Midterm 3 Study Guide</a>", "All assigments due Friday, May 24th"]

//HW8, HW9 and <a class='disabled' href='Phys1-Lab19.pdf' target='_blank'>Lab 19: Emission Spectra</a> due Friday
	
// <a class='disabled' href='Phys1-Lab20.pdf' target='_blank'>Lab 20: Radioactive Half-Life</a> due Friday"]
    },
    Homework:"Your homeworks and lab reports are due Fridays",
    Labs:"You must get your data on the designated lab hours, NO MAKEUP LABS!",
    Projects:"None",
    Grading:{"Homework":"20%", "Lab Reports":"20%", "Exams":"20% each, 60% Total"},
    GradeScale:"https://i0.wp.com/greatcollegeadvice.com/wp-content/uploads/2008/11/slide15.jpg",
    ExtraCredit:"There will be extra credit oportunities within your homeworks, labs and lectures",
    SuccessTip:"READ the text book, do not memorize, UNDERSTAND!",
    LateWork:"I reserve the right of not grading late assignments.",
    Honesty:"Students are expected to exercise academic honesty and integrity. Violations such as cheating and plagiarism will result in disciplinary action which may include recommendation for dismissal.",
    AttendancePolicy:"Students missing one more class hour than the unit value for particular course, without making prior arrangements may, at the instructor’s option, be dropped without possibility of credit.",
    ADA:"Students requiring special services or arrangements because of hearing, visual, or other disability should contact their instructor, counselor, or the Accesible Education Center.",
    OV:"Occupational/Vocational students—Limited English language skills will not be a barrier to admittance to and participation in Vocational Education Programs."
};
