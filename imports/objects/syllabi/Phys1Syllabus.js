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
    Room: "Phys Sci 102",
    Time: "",
    OfficeHour: "TR 5:30-6:30 pm",
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
	"week 1":["Chapters: 1", "<a href='http://slides.com/migroch/deck-2-4/fullscreen' target='_blank'>What is Physics? What is Science? and Scientific Measurements</a>"],
	"week 2":["Chapters: 2, 3, 4, 5", "Lecture Slides: <a  href='http://slides.com/migroch/deck-1-3-5/fullscreen' target='_blank'>Newton's Laws of Motion</a>","Assignments due Thursday: <a class='' href='Phys1-Lab1.pdf' target='_blank'>Lab 1</a> and <a class='' href='Phys1-Hw1.pdf' target='_blank'>HW 1</a>"],
	"week 3":["Chapters: 6, 7", "<a  href='http://slides.com/migroch/deck-1-3-7/fullscreen' target='_blank'>Momentum and Energy</a>"],
	"week 4":["Chapters: 8, 9, 10", "<a  href='https://slides.com/migroch/deck-2-4-9/fullscreen' target='_blank'>Rotational Motion</a>, <a href='https://slides.com/migroch/deck-1-3-7-11/fullscreen' target='_blank'>Gravity and Projectile Motion</a>","Assignments due Thursday: <a   class='disabled' href='Phys1-Hw2.pdf' target='_blank'>HW 2</a>, <a href='Phys1-Lab2.pdf' target='_blank'>Lab 2</a> and <a  href='Phys1-Lab3.pdf' target='_blank'>Lab 3</a>" ],
	"week 5":[ "<a class='disabled' href='Phys1-Midterm1.pdf' target='_blank'>Mid Term (Ch 1-10)</a> on Thursday","<a  href='https://slides.com/migroch/deck-2-4-9-12/fullscreen' target='_blank'>Midterm 1 Study Guide</a>","Assignments due Tuesday: <a class='disabled' href='Phys1-Hw3' target='_blank'>HW 3</a>, <a href='Phys1-Lab4.pdf' target='_blank'>Lab 4: Conservation of Momentum</a> and <a href='Phys1-Lab5.pdf' target='_blank'>Lab 5: Conservation of Energy</a>", "Assignments due Friday: <a class='disabled' href='Phys1-Hw4' target='_blank'>HW 4</a>, <a href='Phys1-Lab6.pdf' target='_blank'>Lab 6: Rotational Inertia</a>"],
	"week 6":["Chapters: 11", "<a href='http://slides.com/migroch/deck-1-3-7-11-13/fullscreen' target='_blank'>Properties of Matter</a>", "<a  href='https://www.youtube.com/watch?v=yfS1lr8FW1A' target='_blank'>The Standard Model Through History</a>"],
	"week 7":["Chapters: 12-15", "<a href='http://slides.com/migroch/deck-1-3-7-11-13/fullscreen' target='_blank'>Properties of Matter</a>,<a href='http://slides.com/migroch/deck-2-4-9-12-16/fullscreen' target='_blank'>Temprature, Heat and Heat Transfer</a>", "<a  href='https://www.youtube.com/watch?v=yfS1lr8FW1A' target='_blank'>The Standard Model Through History</a> assignment due Thursday"],

	    // <a class='disabled' href='http://slides.com/migroch/deck-1-3-7-11-17' target='_blank'>Change of Phase and Thermodynamics</a>","<a class='disabled' href='https://ilearn.gavilan.edu/courses/2425/assignments/20667' target='_blank'>HW 5</a
	
	"week 8":["Chapters: 16-18", "<a href='http://slides.com/migroch/deck-2-4-9-12-16/fullscreen' target='_blank'>Heat Transfer</a>, <a href='http://slides.com/migroch/deck-1-3-7-11-17' target='_blank'>Change of Phase and Thermodynamics</a> ","<a href='Phys1-Lab8.pdf' target='_blank'>Lab 8: Hooke's Law</a> and <a href='Phys1-Lab9.pdf' target='_blank'>Lab 9: Temperature Mix</a> due Thursday"],

	
	"week 9":["Chapters: 19-21", "<a href='http://slides.com/migroch/deck-2-4-9-12-18/fullscreen' target='_blank'>Waves and Sound</a>",  " HW5, <a href='Phys1-Lab10.pdf' target='_blank'>Lab 10: Heat Transfer by Radiation</a> and <a  href='Phys1-Lab11.pdf' target='_blank'>Lab 11: Dry Ice Fun!</a> due Thursday"],

// , "<a class='disabled' href='Phys1-Midterm2_answers.pdf' target='_blank'>Mid Term (Ch 11-21)</a>"	
	"week 10":[ "Enjoy your Spring Break!"],

	"week 11":["Chapters: 22-23", "<a href='http://slides.com/migroch/deck-1-3-7-11-17-20/fullscreen' target='_blank'>Electricity</a>", "Mid Term (Ch 11-21) on Thursday", "HW 6, <a href='Phys1-Lab12.pdf' target='_blank'>Lab 12: Water Waves Simulation</a> and <a  href='Phys1-Lab13.pdf' target='_blank'>Lab 13: Sound and Music</a> due Thursday"],
	
	"week 12":["Chapters: 24-25", "<a class='disabled' href='http://slides.com/migroch/deck-2-4-9-12-18-22/fullscreen' target='_blank'>Magnetism and Electromagnetic Induction</a>",""],
	
	"week 13":["Chapters: 26-27", "<a class='disabled' href='http://slides.com/migroch/deck-1-3-7-11-17-20-23/fullscreen' target='_blank'>Electromagnetic Waves, Light and Color</a>", "HW8, <a class='disabled' href='Phys1-Lab15.pdf' target='_blank'>Lab 15: Seeing Magnetic Fields</a> due Thursday"],
	
	"week 14":["Chapters: 28-29", "<a class='disabled' href='http://slides.com/migroch/deck-2-4-9-12-18-22-26/fullscreen' target='_blank'>Properties of Light Waves</a>", "HW/Lab due Thursday!"],
	
	"week 15":["Chapters: 30-31", "<a class='disabled' href='https://slides.com/migroch/deck-1-3-7-11-17-20-23-27/fullscreen' target='_blank'>Light Emission and Light Quanta (Photons)</a>, <a class='disabled' href='https://slides.com/migroch/deck-2-4-9-12-18-22-26-28/fullscreen' target='_blank'>Quantum Physics</a>", "HW/Lab due Thursday"],
	
	"week 16":["Chapters: 32-34", "<a class='disabled' href='https://slides.com/migroch/deck-1-3-7-11-17-20-23-27-29/fullscreen' target='_blank'>The Atomic Nucleus and Radioactivity</a>", "HW/Lab due Thursday"],
	"week 17":[ "Final (Ch 22-34)"]
    },
    Homework:"Your homeworks and lab reports are due Thursdays at 6:30 pm",
    Labs:"You must get your data on the designated lab hours, NO MAKEUP LABS!",
    Projects:"None",
    Grading:{"Homework":"20%", "Lab Reports":"20%", "Exams":"20% each, 60% Total"},
    GradeScale:"https://i0.wp.com/greatcollegeadvice.com/wp-content/uploads/2008/11/slide15.jpg",
    ExtraCredit:"There will be extra credit oportunities within your homeworks, labs and lectures",
    SuccessTip:"READ the text book, do not memorize, UNDERSTAND!",
    LateWork:"I reserve the right of not grading late assignments.",
    Honesty:"Students are expected to exercise academic honesty and integrity. Violations such as cheating and plagiarism will result in disciplinary action which may include recommendation for dismissal.",
    AttendancePolicy:"Students missing one more class hour than the unit value for particular course, without making prior arrangements may, at the instructor’s option, be dropped without possibility of credit.",
    ADA:"Students requiring special services or arrangements because of hearing, visual, or other disability should contact their instructor, counselor, or the Disability Resource Center.",
    OV:"Occupational/Vocational students—Limited English language skills will not be a barrier to admittance to and participation in Vocational Education Programs."
};
