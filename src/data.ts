import Kanban from "./assets/images/knban.png";
import Khodar from "./assets/images/khodar.png";
import Haby from "./assets/images/haby.jpg";
import Powertrips from "./assets/images/powertrips.png"

const data = {
  name: "Omar Ibrahim",
  stackoverflow: "https://stackoverflow.com/users/20137896/omar-hisham",
  twitter: "",
  whatsapp: "https://wa.link/k0mzu9",
  phone: "+201021650178",
  linkedin: "https://www.linkedin.com/in/omar-hisham-tawfik-7a9698248/",
  github: "https://github.com/nasaomar165",
  githubusrname:"@nasaomar165",
  email: "omar.hisham0597@outlook.com",
  currentCompany: "",
  reposUrl: "https://github.com/nasaomar165?tab=repositories",
  medium: "https://medium.com/@irvingvjuarez",
  cv: "./assets/cv.pdf",
  blogposts: [
    {
      id: 0,
      title: "",
      description:
        "",
      tags: [""],
      img:Haby,
      url: "",
    },
   
  ],
  projects: [
    {
      id: 0,
      status: "Featured Project",
      title: "Powertrips",
      achievements: [
        "Build and deploy Travel Agency Landing Page",
        "Use of Meta Services through Messenger and Whatsapp API",
        "Dynamic routing Using PHP and will defined UI/UX",
      ],
      technologies: ["HTML", "PHP", "Javascript", "Sass", "CSS"],
      repo: "",
      online: "http://powertrips.rf.gd/",
      img: Powertrips,
    },
    {
      id: 1,
      status: "Featured Project",
      title: "Haby Furniture",
      achievements: [
        "Build and deploy a Furniture Store ",
        "Consuming and printing data from API",
        "Dynamic routing and will defined UI/UX",
      ],
      technologies: ["Node.js", "React.js", "MySQL", "HTML", "CSS"],
      repo: "",
      online: "http://habyfurniture.com/",
      img: Haby,
    },
    {
      id: 2,
      status: "Featured Project",
      title: "Khodar.com",
      achievements: [
        "contributing the creation of the design system for online store.",
        "deliver fresh food and healthy ingredient for customers.",
        "Various payment systems to facilitate payments.",
      ],
      technologies: ["Node.js", "Express.js", "HTML", "CSS"],
      repo: "",
      online: "https://premier.khodar.com/en/",
      img: Khodar,
    },
    {
      id: 3,
      status: "Personal Project",
      title: "Flixkan",
      achievements: [
        "Kanban app with authentication and Emojis",
        "API using mongoDB database and express.js",
        "ddynamic links and JWT tokens and hash passwords",
      ],
      technologies: ["MongoDB", "React.js", "JWT", "MUI"],
      repo: "https://github.com/nasaomar165/flixkan",
      img: Kanban,
    },
  ],
  repos: [
    {
      id: 0,
      title: "TechChat",
      repo: "https://github.com/nasaomar165/TechChat",
      online: "https://techchat-1.flixon.repl.co/",
      description:
        "Group Chat App with Authentication and Private chat with Emojis and GIFs enhanced with ability to edit sent messages and add reacts and replays to any message.",
      technologies: ["React.js", "Getstream.io", "Twilio", "Crypto", "Express"],
    },
    {
      id: 1,
      title: "Flixkan",
      repo: "https://github.com/nasaomar165/flixkan",
      online: "https://github.com/nasaomar165/flixkan",
      description:
        "Kanban app with ability to add tasks with videos and photos drag and drop all privately with Authentication",
      technologies: [
        "Node.js",
        "React.js",
        "MaterialsUI",
        "Mongodb",
        "Express",
      ],
    },
  ],
  univerisity: [
    {
      name: "Pharos University - Alexandria, Egypt",
      department: "Bachelor of Computer Engineering",
      date: "September 2015 - July 2020",
      degree: " GPA 3,058/4.0",
      degreealis: "Very Good",
      project: `Brain Controlled Smart Wheelchair Based on Mental Task Classification
      TWO integrative modules, BCI Wheelchair and E-Health tracking system module. Accordingly,
      in a team of five members, we have succeeded in the development of a smart wheelchair that can
      be moved using brain activity signals, Electroencephalography signals, using machine learning
      algorithms for classification, and blink detection using camera for safety measures and other
      controls. An android mobile application was developed for monitoring the patients and keeping
      track of their safety and location in real-time.`,
      tchnologies: `Python Multithreading,
      scikit-learn, OpenCV, Dlib, Firebase Authentication, Firebase
      real-time Database, and Google Maps API· `,
      addprojectName:"Dental Clinic Management System:" ,
      addproject:`developed full dental management web application by using:
      CodeIgniter Framework, PHP, JavaScript, Ajax, and Bootstrap.`
    },
  ],
};

export { data };
