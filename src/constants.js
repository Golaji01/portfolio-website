// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import codecraft from './assets/company_logo/codecraft_logo.jpg';

// Education Section Logo's
import asmma from './assets/education_logo/asm_logo.png';
import abesit from './assets/education_logo/abesit_logo.jpg';

// Project Section Logo's

import removebgLogo from './assets/work_logo/remove_bg.png';
import weatherLogo from './assets/work_logo/weather.png';
import landingPageLogo from './assets/work_logo/landing.png';
import tictactoeLogo from './assets/work_logo/tictac.png';
import stopwatchLogo from './assets/work_logo/stopwatch.png';
export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Angular', logo: angularLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: codecraft,
    role: 'Web Developement Intern',
    company: 'CodeCraft InfoTech Pvt. Ltd.',
    date: '5 July 2025 - Present',
    desc: 'Developed dynamic and scalable web applications using the MERN stack...',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React JS',
      'TypeScript',
      'Node JS',
      'Tailwind CSS',
      'MongoDb',
      'Redux',
      'Next Js',
    ],
  },
];

export const education = [
  {
    id: 0,
    img: asmma,
    school: 'A.S.M Modern Academy,Khata',
    date: 'March 2018- Feb 2019',
    grade: '78.4 %',
    desc: 'I completed my class 10 education under the CBSE board...',
    degree: 'CBSE(X) - Science and Mathematics'
  },
  {
    id: 1,
    img: asmma,
    school: 'A.S.M Modern Academy',
    date: 'March 2020 - Feb 2021',
    grade: '85.4 %',
    desc: 'I completed my class 12 education under the CBSE board...',
    degree: 'CBSE(XII) - PCM with Computer Science',
  },
  {
    id: 2,
    img: abesit,
    school: 'ABES Institute of Technology, Ghaziabad',
    date: 'July 2022 - May 2026',
    grade: '78%',
    desc: 'I am currently pursuing my B.Tech degree in Computer Science and Engineering...',
    degree: 'B.Tech in Computer Science and Engineering ( ARTIFICIAL INTELLIGENCE )',
  },
];

export const projects = [
  
  {
    id: 1,
    title: 'Image Background Remover',
    description: 'An app that removes backgrounds from uploaded images using API integration, providing real-time preview and download options.',
    image: removebgLogo,
    tags: ['React JS', 'API', 'Image Processing', 'HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Golaji01/image-bg-remover',
    webapp: 'https://image-bg-remover-ruby.vercel.app/',
  },
  {
    id: 2,
    title: 'Weather App',
    description: 'A weather application built with React.js that displays real-time weather data using the OpenWeatherMap API. Features include temperature unit toggle, responsive design, and animated UI.',
    image: weatherLogo,
    tags: ['React JS', 'API', 'HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Golaji01/weather-forecasting-app',  // Update if incorrect
    webapp: 'https://weather-forecasting-app-pearl.vercel.app/',         // Replace with real URL
  },
  {
    id: 3,
    title: 'Tic Tac Toe Game',
    description: 'A fun and interactive Tic Tac Toe game built using HTML, CSS, and JavaScript with a clean UI and win-checking logic for two players.',
    image: tictactoeLogo,
    tags: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Golaji01/TIC-TAC-TOE-T3',  // Update if incorrect
    webapp: 'https://tic-tac-toe-t3.vercel.app/',        
  },
  {
    id: 4,
    title: 'Landing Page Website',
    description: 'A modern, responsive landing page with smooth animations, designed using HTML, CSS, JavaScript, and Framer Motion for visual effects.',
    image: landingPageLogo,
    tags: ['HTML', 'CSS', 'JavaScript', 'Framer Motion'],
    github: 'https://github.com/Golaji01/landing-page-T1',      // Update if incorrect
    webapp: 'https://landing-page-t1-xi.vercel.app/',           
  },
  {
    id: 5,
    title: 'Stopwatch Application',
    description: 'A stopwatch application with features like start, stop, reset, lap save, and dark/light theme toggle, built using JavaScript.',
    image: stopwatchLogo,
    tags: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Golaji01/StopWatch-T2',     // Update if incorrect
    webapp: 'https://stop-watch-t2.vercel.app/',          
  },
];
