/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Dhawal Nikam",
  title: "Hello, I'm Dhawal",
  subTitle: emoji(
    "A passionate Software Engineer working at Microsoft with experience in building Web applications using JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks."
  ),
};

// Your Social Media Link

const socialMediaLinks = {
  // github: "https://github.com/saadpasta",
  linkedin: "https://www.linkedin.com/in/dhawalnikam/",
  gmail: "nikam.dhawal@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram and Twitter are also supported in the links!
};

// Academic Projects

const academicProjects = [
  {
    projectName: "Behavior Modeling",
    description: emoji(
      "⚡ Designed and implemented a classifying model to study customer buying habits to identify new potential customers using several advanced data mining techniques such as decision trees and support vector machines."
    ),
  },
  {
    projectName: "Distributed Computing",
    description: emoji(
      "⚡ Wrote distributed (multi-process) and parallel (shared-memory) computing programs to implement solutions to several classic problems such as N-Queens and MatMul."
    ),
  },
  {
    projectName: "Game Logic Design",
    description: emoji(
      "⚡ Developed a multi-player jigsaw puzzle solving game in Java with support for custom rules, 360-degree rotation and other usability features. Link to demo/video: https://www.youtube.com/watch?v=kJeeZ_d7KWc"
    ),
  },
];

// Your Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "Full stack developer interested in building beautiful apps to help",
  skills: [
    emoji(
      "⚡ Develop highly interactive User Interfaces for your web applications."
    ),
    emoji(
      "⚡ Hands on experience building scalable data driven web applications and recommender systems."
    ),
    emoji("⚡ Integration of third party services such as Firebase/ Azure."),
  ],

  /* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt",
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node",
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift",
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm",
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database",
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws",
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire",
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python",
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker",
    },
  ],
};

// Your education background

const educationInfo = {
  viewEducation: true, // Set it to true to see education section
  schools: [
    {
      schoolName: "University of Missouri",
      logo: require("./assets/images/missouriSeal.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "2012 - 2014",
      desc: "",
      // descBullets: [""],
    },
    {
      schoolName: "University of Pune",
      logo: require("./assets/images/puneUniversityLogo.jpg"),
      subHeader: "Bachelor of Engineering in Computer Engineering",
      duration: "2006 - 2010",
      desc: "",
      // descBullets: [""],
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%",
    },
    {
      Stack: "Programming",
      progressPercentage: "85%",
    },
  ],
};

// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer II",
      company: "Microsoft",
      companylogo: require("./assets/images/microsoftLogo.svg"),
      date: "Jan 2020 – Present",
      desc: "Redmond, Washington (USA)",
      descBullets: [
        "Built a MVC web app (both UI & backend) to help teams onboard their measures, search/delete their existing measures and edit current measure config.",
        "The measures help to track the success/failure of an area within a product.",
        "Integrated MFA to only allow Microsoft employees to access the app. Also implemented user level access to allow users to modify their own measure configs only.",
      ],
    },
    {
      role: "Senior Software Developer",
      company: "KMR Group (A WCG Company)",
      companylogo: require("./assets/images/kmrgroupLogo.png"),
      date: "Sep 2014 – Dec 2019",
      desc: "Chicago, Illinois (USA)",
      descBullets: [
        "Designed and implemented REST APIs for healthcare products which are consumed by engineers for application development.",
        "Built a reporting tool using iTextSharp and reduced cost for a complex report generation process from 2 hours to 5 minutes.",
        "Took initiative to design, implement and test a “save-restore” feature for the web applications.",
        "Built interactive dashboards to visualize clinical trials data using D3.js and ReactJS.",
      ],
    },
    {
      role: "Graduate Research Assistant",
      company: "University of Missouri",
      companylogo: require("./assets/images/missouriLogo2.jpg"),
      date: "Jun 2012 – May 2013",
      desc: "Columbia, Missouri (USA)",
      descBullets: [
        "Implemented a recommender system to efficiently distribute dollars across media categories.",
        "Implemented a tool for real time analysis of commercial Twitter feed during presidential debates to extract information about listener sentiments.",
      ],
    },
    // {
    //   role: "Software Developer",
    //   company: "JP Mukherjee & Associates",
    //   companylogo: require("./assets/images/airbnbLogo.png"),
    //   date: "Aug 2010 – Jun 2011",
    //   desc: "Pune, Maharashtra (India)",
    //   descBullets: [
    //     "Designed and implemented a tool for collecting and updating public data for sugar industry sites and for classifying the sites based on performance metrics.",
    //     "Implemented a reporting tool to convert excel data into PDF reports.",
    //   ],
    // },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "saadpasta", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to false
};

// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Academic Projects",
  subtitle: "Some projects I worked on during my Bachelors and Masters",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      link: "http://saayahealth.com/",
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      link: "http://nextu.se/",
    },
  ],
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url:
            "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing",
        },
        {
          name: "Award Letter",
          url:
            "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing",
        },
        {
          name: "Google Code-in Blog",
          url:
            "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html",
        },
      ],
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url:
            "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en",
        },
      ],
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        { name: "Certification", url: "" },
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/",
        },
      ],
    },
  ],
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url:
        "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?",
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies.",
    },
  ],
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
      event_url: "https://www.facebook.com/events/2339906106275053/",
    },
  ],
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo",
  ],
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  // number: "+92-3243454077",
  email_address: "nikam.dhawal AT gmail.com",
};

//Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
};
export {
  greeting,
  socialMediaLinks,
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
  academicProjects,
};
