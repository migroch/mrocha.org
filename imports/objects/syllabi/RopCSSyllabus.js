// RopCSSyllabus.js
// Export  initial RopCS syllabus object

export default  RopCSSyllabus ={
    ShortName: "ExploringCS",
    SchoolName: "SVHS",
    CourseName: "Exploring Computer Science",
    CourseLink: "https://mrocha.org/exploringcs",
    SectionCode: "None",
    SectionLink: "None",
    Term: "2018-2019",
    Units: "None",
    Room: "M9",
    Time: "1st Period",
    OfficeHour: "None",
    InstructorName: "Miguel E. Rocha",
    InstructorEmail: "mrocha@scottsvalleyusd.org",
    RequiredText: "None",
    CourseDescription: "This course is an introduction to practical Computer Science. You will learn about some of the basic Computer Science fundamentals, however, we will focus on learning to code and building your first applications",
    CourseMotive: "Computers are the most powerfull tool that humans have created. Programming is the art of telling computers what to do. There is no one unique correct way of writing a program or application, and that its why coding is an art on its own, there is a lot of room for creativity!",    
    LearningObjectives: [
	"Learning to code (JavaScript and Python) and Algorithms",
	"How computers work and history of computing",
	"How the internet works",
	"The Unix terminal and text editors",
	"Using Git repositories and GitHub for version control and collaborative programming",
	"Graphic User Interfaces (GUIs) with web technologies (JavaScript,  HTML and CSS)",
	"From websites to platform independent responsive and reactive standalone applications",
	"Programming guide lines for open source applications",
	"Data analysis and visualization (Pandas, Matplotlib and D3.js)",
	"Machine Learning and Artificial Intellingece",
	"Cyber Security"
    ],
    CourseSchedule:{
	"week 0":{
	    overview: "Introduction and Setting Up",
	    Monday:['<button type="button" className="btn btn-default" data-toggle="modal" data-target="#meetQ">Getting to know each other</button>', "Syllabus", '<button type="button" className="btn btn-default" data-toggle="modal" data-target="#assessQ">Assessment questionnaire</button>', "A bit about ROP classes" ],
	    Tuesday:['Typing games! <a href="http://www.typinggames.zone/" target="_blank">typinggames.zone</a>, <a href="http://games.sense-lang.org/EN.php" target="_blank">sense-lang.org</a>','<a href="http://slides.com/migroch/deck/fullscreen" target="_blank">	What is Computer Science? and What jobs can you get as a Computer Scientist?</a> - <a href="https://slides.com/migroch/deck/live" target="_blank">Live</a>', '<a href="codehs.com/go/AB996" target="_blank">CodeHS AB996</a>'] ,
	    Thursday:["Typing games!", '<a href="http://slides.com/migroch/deck-1/fullscreen" target="_blank">Programming (AKA Coding)</a> - <a href="https://slides.com/migroch/deck-1/live" target="_blank">Live</a>','<a href="codehs.com/go/AB996" target="_blank">CodeHS AB996</a>']
	},
	"week 1":{
	    overview: "How Computers Work & Learning to Code",
	    Monday:[ "Updated Syllabus", "How computers work", '<a href="codehs.com/go/AB996" target="_blank">CodeHS AB996</a>'],
	    Tuesday:['Quiz','Thinking Binary', '<a href="codehs.com/go/AB996" target="_blank">CodeHS AB996</a>'] ,
	    Thursday:["Computer History", '<a href="codehs.com/go/AB996" target="_blank">CodeHS AB996</a>', 'Work of the week due: CodeHS']
	},
	"week 2":{overview: "How the Internet Works & More Coding!"},
	"week 3":{overview: "The Unix Terminal, Code editors and Git/GitHub"},
	"week 4":{overview: "Graphic User Interfaces (GUIs) with web technologies (JavaScript,  HTML and CSS)"},
	"week 5":{overview: "Graphic User Interfaces (GUIs) with web technologies (JavaScript,  HTML and CSS)"},
	"week 6":{overview: "WebApps"},
	"week 7":{overview: "WebApps"},
	"week 8":{overview: "WebApps and Programming Guidelines"},
	"week 9":{overview: "Data analysis and visualization (Matplotlib and D3.js)"},
	"week 10":{overview: "Data analysis and visualization (Matplotlib and D3.js)"},
	"week 11":{overview: "Machine Intelligence and automation - what the heck is AI?"},
	"week 12":{overview: "Machine Intelligence and automation - what the heck is AI?"},
	"week 13":{overview: "Cyber Security"},
	"week 14":{overview: "Projects"},
	"week 15":{overview: "Projects"},
	"week 16":{overview: "Projects"}
    },
    Homework:"Your weekly work is due Thursday of every week. If you are focus during class hours you may not have any homework!",
    Labs:"None",
    Projects:"Your final project is a portfolio of one or more applications you developed during the year. You will have to write a documentation and do a presentation for at least one application. Collaboration is allowed and encoraged but I will be grading based on each individual effort.",
    Grading:{"Weekly Work and Projects":"70%", Quizes:"30%",  ExtraCredit:"20%"},
    GradeScale:"https://i0.wp.com/greatcollegeadvice.com/wp-content/uploads/2008/11/slide15.jpg",
    ExtraCredit:"None",
    SuccessTip:"Do your work during class so you dont have to do work at home.",
    Honesty:"Students are expected to exercise academic honesty and integrity. Violations such as cheating and plagiarism will result in disciplinary action which may include recommendation for dismissal.",
    AttendancePolicy:"None",
    ADA:"None",
    OV:"None",
    Lectures:[
	{name: "What is Computer Science?", link:"http://slides.com/migroch/deck/fullscreen"},
	{name: "Programming (A.K.A Coding)", link:"http://slides.com/migroch/deck-1/fullscreen"},
	{name:"Algorithms", link:"https://slides.com/migroch/deck-42"},
	{name: "How Computers Work", link:"http://slides.com/migroch/deck-2/fullscreen"},
	{name: "Thinking Binary", link:"http://slides.com/migroch/deck-1-3/fullscreen"},
	{name: "Programming Languages", link:"http://slides.com/migroch/deck-2-6/fullscreen"},
	{name: "Intro to Web Development", link:"http://slides.com/migroch/deck-1-3-8/fullscreen"},
	{name: "The Unix Terminal", link:"http://slides.com/migroch/deck-2-6-10/fullscreen"},
	{name: "Data Driven Web Development", link:"http://slides.com/migroch/deck-1-3-7-11-14/fullscreen"},
	{name: "GUI Components with REACT", link:"https://slides.com/migroch/deck-2-4-9-12-15/fullscreen"},
	{name: "How the Internet Works, Servers, Node.js and Meteor", link:"https://slides.com/migroch/deck-1-3-7-11-14-19/fullscreen"},
	{name: "Databases", link:"https://slides.com/migroch/deck-2-4-9-12-15-21/fullscreen"},
	{name: "Version Control Systems (git and GitHub)", link: "https://slides.com/migroch/deck-1-3-7-11-14-19-24/fullscreen"},
	{name: "Data Analysis and Visualization", link:"https://slides.com/migroch/deck-2-4-9-12-15-21-25/fullscreen"},
	{name: "Machine Learning and AI", link:"https://slides.com/migroch/deck-1-3-7-11-14-19-24-30-32-35/fullscreen"},
	{name: "Cybersecurity", link:"https://slides.com/migroch/deck-1-3-7-11-14-19-24-30/fullscreen"},
	{name: "Projects", link: "https://slides.com/migroch/deck-49/fullscreen"},
	{name: "Virtualization, Cloud Computing and Containerization", link:"https://slides.com/migroch/deck-1-3-7-11-14-19-24-30-32/fullscreen"},
	{name: "Go Open Source!", link:"https://slides.com/migroch/deck-2-4-9-12-15-21-25-31-33/fullscreen"},
	
    ],
    Quizzes: [
	{id: "Quiz0", name:"Week 0", active:0},
	{id: "Quiz1", name:"Week 1", active:0},
	{id: "Quiz2", name:"Week 2", active:0},
	{id: "Quiz3", name:"Week 3", active:0},
	{id: "Quiz6", name:"Week 6", active:0},
	{id: "Quiz7", name:"Week 7", active:0},
	{id: "Quiz10", name:"Week 10", active:0}
    ],
    Assignments:[
	{id:"1", shortDescription:"CodeHS Intro to JavaScript", link:"https://codehs.com/go/C82E7"},
	{id:"2", shortDescription:"CodeHS Web Design", link:"https://codehs.com/go/C82E7"},
	{id:"3", shortDescription:"Setup C9 and modify the html5 workspace", description:"Setup C9, create a new html5 workspace and modify the provided HTML, CSS, and JavaScript code.", link:"http://slides.com/migroch/deck-1-3-8/fullscreen#/11"},
	{id:"4", shortDescription:"Multiple page website", description:"Make a two page website as shown in this C9 Workspace", link:"https://ide.c9.io/testst/html5-cloned2"},
	{id:"5", shortDescription:"Data Driven React App 1", description:"Simple Data Driven App with React", link:"https://ide.c9.io/migroch/assignment_5#openfile-README.md" },
	{id:"6", shortDescription:"Data Driven React App 2", description:"Simple Data Driven App with React step 2", link:"https://ide.c9.io/migroch/assignment_6#openfile-README.md" },
	{id:"7", shortDescription:"CodeHS Mobile Apps", link:"https://codehs.com/go/C82E7"},
	{id:"8", shortDescription:"Simple HTTP server with Node.js", description:"Simple HTTP server with Node.js", link:"https://ide.c9.io/migroch/assigment_8#openfile-README.md" },
	{id:"9", shortDescription:"SQL Databases", description:"Creating and Querying SQL Databases", link:"https://www.khanacademy.org/computing/hour-of-code/hour-of-sqlp." },
	// {id:"8", shortDescription:"Todo App with Meteor and React", description:"Todo App with Meteor and React", link:"https://www.meteor.com/tutorials/react/creating-an-app" },
	{id:"10", shortDescription:"CodeHS Intro to Python", link:"https://codehs.com/go/C82E7"},
	{id:"11", shortDescription:"Python Data Analysis 1", description:"Python Data Analysis 1: Basic Plotting with Matplotlib", link:"http://slides.com/migroch/deck-2-4-9-12-15-21-25/fullscreen#/7"},
	{id:"12", shortDescription:"Python Data Analysis 2", description:"Python Data Analysis 2: Data Jiu-Jitsu with Pandas", link:"http://slides.com/migroch/deck-2-4-9-12-15-21-25/fullscreen#/8"},
	{id:"13a", shortDescription:"Web visualization with three.js", description:"Create a visualization for the web using three.js", link:"https://slides.com/migroch/deck-2-4-9-12-15-21-25/fullscreen#/22"},
	{id:"13b", shortDescription:"Web visualization with D3.js", description:"Create a visualization for the web using D3.js", link:"https://slides.com/migroch/deck-2-4-9-12-15-21-25/fullscreen#/23"},
	{id:"14", shortDescription:"Linear Regression the ML way", description:"Linear Regression in Python with Scikit Learn", link:"https://slides.com/migroch/deck-1-3-7-11-14-19-24-30-32-35/fullscreen#/18"},
	{id:"15", shortDescription:"Deep Learning", description:"Predicting diabetes onsets with Deep Learning", link:"https://slides.com/migroch/deck-1-3-7-11-14-19-24-30-32-35/fullscreen#/31"},
	{id:"16", shortDescription:"Cybersecurity", description:"Cryptography and Software Security", link:"https://slides.com/migroch/deck-1-3-7-11-14-19-24-30/fullscreen#/12"}
    ],
    Tools:[
	{name:"CodeHS", link:"https://codehs.com/go/C82E7"},
	{name:"Cloud9", link:"https://c9.io"},
	{name:"Infinity", link:"https://app.startinfinity.com/"},
	{name:"Slack", link:"https://slack.com/"},

	{name:"Bootstrap", link:"https://getbootstrap.com/docs/4.3/getting-started/introduction/"},
	{name:"React", link:"https://reactjs.org/"},
	{name:"GitHub", link:"https://github.com/"},
	{name: "TensorFlow", link:"https://www.tensorflow.org/"},
	{name: "Keras", link:"https://keras.io/"},
	{name: "scikit-learn", link:"http://scikit-learn.org/stable/"},
	{name: "D3.js", link:"https://d3js.org/"},
	{name:"three.js",link:"https://threejs.org/"},
	{name:"Pandas", link:"https://pandas.pydata.org/"},
	{name:"Matplotlib", link:"https://matplotlib.org/"},
	{name:"Meteor", link:"https://www.meteor.com/"},
	{name:"MongoDB", link:"https://docs.mongodb.com/"},
	{name: "Kali Linux", link:"https://www.kali.org/"},
	{name:"Node.js", link:"https://nodejs.org/en/"},
	{name:"jQuery", link:"https://api.jquery.com/"},
    ],
    Links:[
	{name: "HackerRank", link:"https://www.hackerrank.com/"},
	{name: "freeCodeCamp", link:"https://www.freecodecamp.org"},
	{name: "CodeCademy", link:"https://www.codecademy.com/"},
	{name: "CodinGame", link:"https://www.codingame.com"},
	{name:"Code.org", link:"https://code.org/"},
	{name: "How to add a project to GitHub", link:"https://help.github.com/articles/adding-an-existing-project-to-github-using-the-command-line/"},
	{name: "three.js examples", link:"https://threejs.org/examples/"},
	{name: "D3.js Blocks", link:"https://bl.ocks.org/"},
	{name: "UW D3.js Tutorial", link:"http://uwdata.github.io/d3-tutorials"},
	{name:"Unix Commands", link:"http://cheatsheetworld.com/programming/unix-linux-cheat-sheet/"},
	{name:"W3Schools", link:"https://www.w3schools.com/"},
	{name: "AWS Educate login", link:"https://aws.amazon.com/education/awseducate/members/"},
	{name: "AWS: How To Launch Linux Instance", link:"https://aws.amazon.com/getting-started/tutorials/launch-a-virtual-machine/"},
	{name: "AWS Instance Types", link:"https://aws.amazon.com/ec2/instance-types/"},
	{name: "Cybrary", link:"https://www.cybrary.it/"},
	{name: "Meteor+React Tutorial", link:"https://www.meteor.com/tutorials/react/creating-an-app"},
	{name: "React Tutorial", link:"https://reactjs.org/tutorial/tutorial.html"},
	{name:"ROP Portfolio Guidelines", link: "http://www.rop.santacruz.k12.ca.us/resources/portfolio/"},
	{name:"Introduction to Artificial Neural Netwoks", link:"http://www.bogotobogo.com/python/scikit-learn/Artificial-Neural-Network-ANN-1-Introduction.php"},
	{name:"Neural Networks Demystified", link:"https://www.youtube.com/watch?v=bxe2T-V8XRs"}
    ],

    Portfolios:[
	{name: "Maile Sussman's", link:"/msussman"}
    ]
};
