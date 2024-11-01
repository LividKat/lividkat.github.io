/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: false, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "David Acosta Bejar",
  title: "Hola a todos, ¡Soy David!",
  subTitle: emoji(
    "Soy un apasionado Artista Digital con experiencia en Modelado 3D, Edición de video y Motion Graphics."
  ),
  resumeLink:
    "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/david-acosta-bejar-440086229",
  instagram: "https://www.instagram.com/livid_kat/",
  facebook: "https://www.facebook.com/LividKat",
  youtube: "https://youtube.com/playlist?list=PLX_KTaTQgY7dCCCMO1QaPHgOJhwsah-2L&si=Czx953s8Qf1PFfxV",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "¿A que me dedico?",
  subTitle: "ARTISTA DIGITAL QUE DISFRUTA APRENDER DE VARIAS ÁREAS",
  skills: [
    emoji(
      "⚡ Blender: Modelado 3D, Shading, Animación, Composición. "
    ),
    emoji("⚡ Manejo básico e intermedio de paquetería Adobe destacando: Premire, Illustrator, Photoshop, After Effects."),
 emoji(
      "⚡ Edición básica de audio."
    ),
 emoji(
      "⚡ Manejo básico de Unity para juegos 2D Y 3D."
    ),
    emoji(
      "⚡ Me gusta impartir talleres para transmitir mi conocimiento a generaciones futuras."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */


  softwareSkills: [
    {
      skillName: "Blender",
	fontAwesomeClassname: "fa fa-cube"
    },
    {
      skillName: "Premiere Pro",
      fontAwesomeClassname: "fa fa-video"
    },
    {
      skillName: "After Effects",
      fontAwesomeClassname: "fa fa-stopwatch"
    },
    {
      skillName: "Illustrator",
      fontAwesomeClassname: "fa fa-pen-nib"
    },
    {
      skillName: "Photoshop",
      fontAwesomeClassname: "fa fa-camera"
    },
    {
      skillName: "Audacity",
      fontAwesomeClassname: "fa fa-headphones"
    },
    {
      skillName: "Unity",
      fontAwesomeClassname: "fab fa-unity"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Universidad de Guanajuato",
      logo: require("./assets/images/UG.png"),
      subHeader: "Licenciatura en Artes Digitales",
      duration: "Agosto 2017 - Junio 2022",
      descBullets: ["Participe en concursos como León Light Fest (Mapping) y Edición de video para prevención de accidentes."]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Listening (C1)", //Insert stack or technology you have experience in
      progressPercentage: "75%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Reading (C1)",
      progressPercentage: "75%"
    },
    {
      Stack: "Speaking (B2)",
      progressPercentage: "60%"
    },
    {
      Stack: "Writing (B2)",
      progressPercentage: "60%"
    }
  ],

  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  
experience: [
    {
      role: "Diseñador Gráfico",
      company: "Constructora GT",
      companylogo: require("./assets/images/GT.png"),
      date: "Marzo 2024",
      desc: "Desarrollo de imagen corporativa para una constructora ubicada en Irapuato, Guanajuato.",
	descBullets: [
	"Creación de Manual de identidad corporativa.",
      ]

    },
    {
      role: "Diseñador Multimedia",
      company: "UVEG",
      companylogo: require("./assets/images/UVEG.jpg"),
      date: "Enero 2022 – Junio 2022",
      desc: "Mi trabajo fue desarrollar material audiovisual para la presentación de cursos digitales que se pueden encontrar en el portal de la UVEG",
      descBullets: [
	"La UVEG contrato a la empresa Baine & Asociados S.C.",
	"Baine & Asociados S.C. fue la empresa para la cual yo realice mis prácticas profesionales y fue con ellos que nos encargamos de realizar el material para 	la UVEG." 
      ]
    },
    {
      role: "Tallerista Premiere/After",
      company: "Instituto Irapuato",
      companylogo: require("./assets/images/IR.png"),
      date: " 9 Octubre 2024",
      desc: "Impartí un taller sobre conceptos básicos de Premiere Pro y After Effects con la finalidad de que alumnos de la carrera de Marketing aprendieran las 	bases del software y a moverse en el entorno de estos."
    },
    {
      role: "Tallerista Blender",
      company: "Universidad Catolica Boliviana",
      companylogo: require("./assets/images/UCB.jpg"),
      date: " 18-20 Septiembre 2023",
      desc: "Impartí un taller sobre conceptos básicos de Blender abarcando sus diferentes funcionalidades con la finalidad de que alumnos de la carrera de Arquitectura y Diseño  aprendieran las bases del software y a moverse en el entorno de estos."
    }

  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Placeholder",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Ver video en Youtube",
          url: "https://www.youtube.com/watch?v=WfyllZ6gYFY"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/LLF.jpeg"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display:false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Portafolio"),
  subtitle:
    "Trabajos que he realizado en diferentes áreas",

  achievementsCards: [
    {
      title: "Renders 3D (Blender)",
      subtitle:
        "Renders de producto y personajes",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Portafolio 3D",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        }
      ]
    },
    {
      title: "Edición de video",
      subtitle:
        "Videos de diferente indole que he editado",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Portafolio Edición de video",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "Motion Graphics",
      subtitle: "Trabajos donde he usado Motion Graphics",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Portafolio Motion Graphics", url: ""},
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resumen",
  subtitle: "Sientete libre de descargar mi CV",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contactame ☎️"),
  subtitle:
    "¿Quieres platicar sobre un proyecto o simplemente quieres saber más de mí? ¡Te invito a mandarme mensaje!",
  number: "+52 (462) 125 5172",
  email_address: "d.acostabejar@outlook.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
