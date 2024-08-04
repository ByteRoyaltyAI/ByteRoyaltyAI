import machinelearningicon from "../../assets/icons/machinelearningicon.svg";
import dataicon from "../../assets/icons/dataicon.svg";
import gameicon from "../../assets/icons/gameicon.svg";
import boticon from "../../assets/icons/boticon.svg";
import cloud1icon from "../../assets/icons/cloud1icon.svg";
import blockchainicon from "../../assets/icons/blockchainicon.svg";
import cybericon from "../../assets/icons/cybericon.svg";
import canvaicon from "../../assets/icons/canvaicon.svg";
import figmaicon from "../../assets/icons/figmaicon.svg";
import htmlicon from "../../assets/icons/htmlicon.svg";
import cssicon from "../../assets/icons/cssicon.svg";
import javascripticon from "../../assets/icons/javascripticon.svg";
import typescripticon from "../../assets/icons/typescripticon.svg";
import reacticon from "../../assets/icons/reacticon.svg";
import nextjsicon from "../../assets/icons/nextjsicon.svg";
import nodejsicon from "../../assets/icons/nodejsicon.svg";
import tailwindcssicon from "../../assets/icons/tailwindicon.svg";
import mongodbicon from "../../assets/icons/mongoicon.svg";
import vuejsicon from "../../assets/icons/vueicon.svg";
import expressicon from "../../assets/icons/expressicon.svg";
import sassscssicon from "../../assets/icons/sassicon.svg";
import apiicon from "../../assets/icons/apiicon.svg";
import axiosicon from "../../assets/icons/axiosicon.svg";
import rendericon from "../../assets/icons/rendericon.svg";
import wordpressicon from "../../assets/icons/wordpressicon.svg";
import shopifyicon from "../../assets/icons/shopifyicon.svg";
import webflowicon from "../../assets/icons/webflowicon.svg";
import tastyMockup from "../../assets/img/tweetfox.png";
import instorMockup from "../../assets/img/assignmentgpt.png";
import silentmoonMockup from "../../assets/img/healthiq.png";
import profilepicture from "../img/ai4.gif";
import nextjsiconwhite from "../../assets/icons/nextjsiconwhite.svg";
import expressiconwhite from "../../assets/icons/expressiconwhite.svg";
import { GoHome, GoPerson, GoMail, GoStack, GoProject } from "react-icons/go";
import { FiGithub, FiLink, FiLinkedin, FiMail } from "react-icons/fi";
import Imprint from "../../components/Imprint";
import Privacy from "../../components/Privacy";
import { FaProjectDiagram } from "react-icons/fa";
import leader from "../../assets/img/leader.jpeg";
import home from "../../assets/img/home.jpeg";
import blue from "../../assets/img/blue.jpeg";
import finance from "../../assets/img/finance.jpeg";
import puurspanje from "../../assets/img/puurspanje.jpeg";
import P1 from "../../assets/Testimonial/p1.jpg";
import P2 from "../../assets/Testimonial/p2.jpg";
import P3 from "../../assets/Testimonial/p3.jpg";

export const headerIntroData = {
  link:"",
  title: {
    de: "ZUKUNFT IST KI",
    en: "FUTURE IS AI",
  },
  subtitle: "Embrace the future: AI redefines living, working, and connecting. Dive into our world for the latest in home AI, shaping tomorrow's everyday life.",
  description: {
    de: "Verwandeln Sie Ihr Unternehmen mit unserem Fachwissen",
    en: "",
  },

  buttons: [
    {
      link:"contact",
      name: "Contact",
      label: {
        de: "Kontaktiere mich",
        en: "Contact Us",
      },
      icon: FiMail,
      color: "main-btn",
    },
    {
      link:"projects",
      name: "Projects",
      label: {
        de: "Unsere Projekte",
        en: "Our Projects",
      },
      icon: FaProjectDiagram,
      color: "secondary-btn",
    },
  ],
  profilepicture: profilepicture,
} as const;

export const projectsData = [
  {
    title: "Tweet Fox",
    description:
      "Skalieren Sie die Bird-App mit der intelligentesten Twitter-Automatisierungsplattform.Erstellen Sie qualitativ hochwertige Inhalte, interagieren Sie mit der richtigen Zielgruppe und Wachsen Sie blitzschnell mit TweetFOX.",
    description_EN:
      "Scale the Bird App with the Smartest Twitter Automation Platform.Create high quality content, engage with the right audience and grow at lightning speed with TweetFOX.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "REST Api", icon: apiicon },
      { name: "React", icon: reacticon },
      { name: "Figma", icon: figmaicon },
      // { name: "Canva", icon: canvaicon },
      // { name: "Netlify", icon: netlifyicon },
      // { name: "Trello", icon: trelloicon },
      { name: "Machinelearning", icon: machinelearningicon },
    ],
    image: tastyMockup,
    deploymenturl: "https://tweetfox.io/",
    githuburl: "https://github.com/AlpayC/Frontend_Abschlussprojekt_Tasty",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#70B9BE",
    },
  },
  {
    title: "Health IQ",
    description:
      "Erleben Sie die Zukunft der Gesundheitsausbildung mit HEALTHIQ. Wir stehen an der Spitze einer Revolution und verändern die Art und Weise, wie medizinische Fachkräfte lernen und sich weiterentwickeln. Unser Engagement für Innovation verändert die Landschaft der Gesundheitsausbildung.",
    description_EN:
      "Experience the future of healthcare education with HEALTHIQ. We are at the forefront of a revolution, transforming the way healthcare professionals learn and grow. Our commitment to innovation is reshaping the landscape of healthcare education.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      // { name: "Spotify Api", icon: spotifyicon },
      { name: "React", icon: reacticon },
      // { name: "JWT & Bcrypt", icon: jwticon },
      // { name: "Axios", icon: axiosicon },
      { name: "MongoDB", icon: mongodbicon },
      { name: "Express", icon: expressiconwhite },
      { name: "Node.js", icon: nodejsicon },
      // { name: "Figma", icon: figmaicon },
      // { name: "Render", icon: rendericon },
    ],
    image: silentmoonMockup,
    deploymenturl: "https://healthiq.plus/",
    githuburl:
      "https://github.com/AlpayC/Fullstack_Abschlussprojekt_SilentMoon",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#FFD5BD",
    },
  },
  {
    title: "Assignment GPT AI",
    description:
      "Wählen Sie den für Sie perfekten Plan und verabschieden Sie sich von langen, frustrierenden Stunden mit Hausaufgaben oder Forschungsarbeiten. Mit AssignmentGPT AI erhalten Sie im Handumdrehen Antworten, Diagramme und Code, wodurch Ihre Schularbeit zehnmal einfacher und schneller wird!.",
    description_EN:
      "Choose the perfect plan for you and say goodbye to long, frustrating hours of homework or research paper. With AssignmentGPT AI, you’ll get answers, diagrams, and code in a snap, making your school work 10X easier and quicker!.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "React", icon: reacticon },
      // { name: "JWT & Bcrypt", icon: jwticon },
      { name: "Axios", icon: axiosicon },
      { name: "MongoDB", icon: mongodbicon },
      { name: "Express", icon: expressiconwhite },
      { name: "Node.js", icon: nodejsicon },
      { name: "Figma", icon: figmaicon },
      { name: "Render", icon: rendericon },
      // { name: "Trello", icon: trelloicon },
    ],
    image: instorMockup,
    deploymenturl: "https://assignmentgpt.ai/",
    githuburl: "https://github.com/AlpayC/Furniture_MERN",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#E3964A",
    },
  },
  {
    title: "Leader Bridge",
    description:
      "Eine meiner größten Führungsherausforderungen besteht derzeit darin, herauszufinden, wie ich mein Entwicklungsteam mit dem Marketing synchronisieren kann.",
    description_EN:
      "One of my biggest leadership challenges right now is figuring out how to get my development team synchronized with marketing.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "React", icon: reacticon },
      // { name: "JWT & Bcrypt", icon: jwticon },
      { name: "Axios", icon: axiosicon },
      { name: "MongoDB", icon: mongodbicon },
      { name: "Express", icon: expressiconwhite },
      { name: "Node.js", icon: nodejsicon },
      { name: "Figma", icon: figmaicon },
      { name: "Render", icon: rendericon },
      // { name: "Trello", icon: trelloicon },
    ],
    image: leader,
    deploymenturl: "https://www.leaderbridge.com/",
    githuburl: "",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#E3964A",
    },
  },
  {
    title: "Leisure Home",
    description:
      "Wir sind eine Gruppe von Immobilienexperten mit jahrzehntelanger Erfahrung, die bereit sind, die Landschaft zu verändern. Wir bauen jetzt ein Unternehmen auf, das neue Maßstäbe im Fractional-Ownership-Bereich von Real Assets setzen wird.",
    description_EN:
      "We are a group of Real Estate professionals with decades of experience, set to change the landscape. We are now building a company that will set new standards in the Fractional ownership sector of marquee Real Assets.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "React", icon: reacticon },
      // { name: "JWT & Bcrypt", icon: jwticon },
      { name: "Axios", icon: axiosicon },
      { name: "MongoDB", icon: mongodbicon },
      { name: "Express", icon: expressiconwhite },
      { name: "Node.js", icon: nodejsicon },
      { name: "Figma", icon: figmaicon },
      { name: "Render", icon: rendericon },
      // { name: "Trello", icon: trelloicon },
    ],
    image: home,
    deploymenturl: "https://ourleisurehome.com/",
    githuburl: "",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#E3964A",
    },
  },
  {
    title: "Bluejestic",
    description:
      "Freunde, die zusammen einkaufen, sparen zusammen! Laden Sie Ihre Freunde ein und lassen Sie uns als Team Angebote abschließen.",
    description_EN:
      "Friends who shop together, save together! Invite your buddies and let's snag deals as a team.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "React", icon: reacticon },
      // { name: "JWT & Bcrypt", icon: jwticon },
      { name: "Axios", icon: axiosicon },
      { name: "MongoDB", icon: mongodbicon },
      { name: "Express", icon: expressiconwhite },
      { name: "Node.js", icon: nodejsicon },
      { name: "Figma", icon: figmaicon },
      { name: "Render", icon: rendericon },
      // { name: "Trello", icon: trelloicon },
    ],
    image: blue,
    deploymenturl: "https://bluejestic.com/",
    githuburl: "",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#E3964A",
    },
  },
  {
    title: "Finance",
    description:
      "Finanzen ist ein Begriff für Angelegenheiten im Zusammenhang mit der Verwaltung, Schaffung und Untersuchung von Geld und Investitionen. Dabei werden Kredite und Schulden, Wertpapiere und Investitionen genutzt, um laufende Projekte mithilfe zukünftiger Einkommensströme zu finanzieren.",
    description_EN:
      "Finance is a term for matters regarding the management, creation, and study of money and investments. It involves the use of credit and debt, securities, and investment to finance current projects using future income flows.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "React", icon: reacticon },
      // { name: "JWT & Bcrypt", icon: jwticon },
      { name: "Axios", icon: axiosicon },
      { name: "MongoDB", icon: mongodbicon },
      { name: "Express", icon: expressiconwhite },
      { name: "Node.js", icon: nodejsicon },
      { name: "Figma", icon: figmaicon },
      { name: "Render", icon: rendericon },
      // { name: "Trello", icon: trelloicon },
    ],
    image: finance,
    deploymenturl: "https://fe-finance.de/",
    githuburl: "",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#E3964A",
    },
  },
  {
    title: "Puurspanje",
    description:
      "Puurspanje ist der niederländischsprachige Immobilienmakler in Spanien, dem es gelingt, für jeden das perfekte Traumhaus zu finden. Jedes Mal, aber jedes Mal anders. Wir kümmern uns um alle Belange, vom Kaufvertrag über rechtliche Angelegenheiten bis hin zu Inneneinrichtung, Internet und Versicherung.",
    description_EN:
      "Puurspanje is the Dutch-speaking real estate agent in Spain that succeeds in finding the perfect dream home for everyone. Every time, but each time differently. We take care of all matters, from the purchase contract and legal affairs to the interior, internet, and insurance.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "React", icon: reacticon },
      // { name: "JWT & Bcrypt", icon: jwticon },
      { name: "Axios", icon: axiosicon },
      { name: "MongoDB", icon: mongodbicon },
      { name: "Express", icon: expressiconwhite },
      { name: "Node.js", icon: nodejsicon },
      { name: "Figma", icon: figmaicon },
      { name: "Render", icon: rendericon },
      // { name: "Trello", icon: trelloicon },
    ],
    image: puurspanje,
    deploymenturl: "https://www.puurspanje.nl/",
    githuburl: "",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#E3964A",
    },
  },
] as const;

export const liveTickerData = {
  content: {
    de: "Unsere Projekte auf Github",
    en: "Future is AI",
  },
} as const;

export const skillsDataWeb = [
  {
    skillsTitle: "WebDevelopment",
    skills: [
      {
        title: "HTML",
        hash: "#html",
        icon: htmlicon,
        color: "#F1662A",
      },
      {
        title: "CSS",
        hash: "#CSS",
        icon: cssicon,
        color: "#1572B6",
      },
      {
        title: "JavaScript",
        hash: "#JavaScript",
        icon: javascripticon,
        color: "#F7DF1E",
      },
      {
        title: "TypeScript",
        hash: "#TypeScript",
        icon: typescripticon,
        color: "#007ACC",
      },
      {
        title: "React",
        hash: "#React",
        icon: reacticon,
        color: "#61DAFB",
      },
      {
        title: "Next.js",
        hash: "#Next.js",
        icon: [nextjsicon, nextjsiconwhite],
        color: ["#000000", "#FFFFFF"],
      },
      {
        title: "Node.js",
        hash: "#Node.js",
        icon: nodejsicon,
        color: "#339933",
      },
      {
        title: "Tailwind",
        hash: "#Tailwind",
        icon: tailwindcssicon,
        color: "#38B2AC",
      },
      {
        title: "MongoDB",
        hash: "#MongoDB",
        icon: mongodbicon,
        color: "#449C45",
      },
      {
        title: "Vue.js",
        hash: "#Vue.js",
        icon: vuejsicon,
        color: "#4FC08D",
      },
      {
        title: "Express",
        hash: "#Express",
        icon: [expressicon, expressiconwhite],
        color: ["#000000", "#FFFFFF"],
      },
      {
        title: "SASS/SCSS",
        hash: "#SASS/SCSS",
        icon: sassscssicon,
        color: "#CC6699",
      },
    ],
  },
] as const;

export const skillsDataDesign = [
  {
    skillsTitle: "Machine Learning",
    skills: [
      { title: "Figma", hash: "#Figma", icon: figmaicon, color: "#F24E1E" },
      {
        title: "Machine Learning",
        hash: "#Machine Learning",
        icon: machinelearningicon,
        color: "#000000",
      },
      { title: "Canva", hash: "#Canva", icon: canvaicon, color: "#00C4CC" },
      {
        title: "Chat Bot",
        hash: "#Chat Bot",
        icon: boticon,
        color: " #A020F0",
      },
      {
        title: "Game",
        hash: "#Game",
        icon: gameicon,
        color: "#ffff",
      },
      {
        title: "Cyber Security",
        hash: "#Cyber Security",
        icon: cybericon,
        color: "#FFFF00",
      },
      {
        title: "Cloud Computing",
        hash: "#cloud Computing",
        icon: cloud1icon,
        color: "#ADD8E6",
      },
      {
        title: "Data Science",
        hash: "#Data Science",
        icon: dataicon,
        color: "#00008B",
      },
      {
        title: "Block Chain",
        hash: "#Block Chain",
        icon: blockchainicon,
        color: "#00008B",
      },
    ],
  },
] as const;

export const skillsDataCMS = [
  {
    skillsTitle: "CMS",
    skills: [
      {
        title: "WordPress",
        hash: "#WordPress",
        icon: wordpressicon,
        color: "#21759B",
      },
      {
        title: "Shopify",
        hash: "#Shopify",
        icon: shopifyicon,
        color: "#7AB55C",
      },
      {
        title: "Webflow",
        hash: "#Webflow",
        icon: webflowicon,
        color: "#4353FF",
      },
    ],
  },
] as const;

export const navLinks = [
  { de: "Home", en: "Home", hash: "#home", icon: GoHome },
  { de: "Services", en: "Services", hash: "#services", icon: GoStack },
  { de: "Projekte", en: "Projects", hash: "#projects", icon: GoProject },
  // { de: "About Us", en: "About Us", hash: "#aboutus", icon: GoPerson },
  { de: "Kontakt", en: "Contact", hash: "#contact", icon: GoMail },
] as const;

export const FooterLinks = [
  { de: "Impressum", en: "Imprint", hash: "#imprint", data: <Imprint /> },
  { de: "Datenschutz", en: "Privacy", hash: "#privacy", data: <Privacy /> },
] as const;

export const sideBarRightMail = {
  link: "mailto:support@imaigen.ai",
  text: "IMAIGEN",
} as const;

export const sideBarLeftSocials = [
  {
    link: "https://www.linkedin.com/company/102466043/admin/notifications/all/",
    icon: FiLinkedin,
    altimgname: "linkedin",
  },
  // {
  //   // link: "https://www.linkedin.com/company/102466043/admin/notifications/all/",
  //   icon: FiGithub,
  //   altimgname: "github",
  // },
  {
    link: "mailto:support@imaigen.ai",
    icon: FiMail,
    altimgname: "mail",
  },

] as const;

export const quotesData = [
  {
    de: '"Es ist überhaupt nicht wichtig, es beim ersten Mal richtig zu machen. Es ist entscheidend, es beim letzten Mal richtig zu machen."',
    en: `"It's not at all important to get it right the first time. It's vitally important to get it right the last time."`,
    author: "Andrew Hunt",
  },
  {
    de: '"Das Web ist wie eine Leinwand und der Code ist die Farbe. Erschaffe dein Meisterwerk."',
    en: `"The web is like a canvas, and code is the paint. Create your masterpiece."`,
  },
] as const;

export const aboutMeData = {
  title: "Über mich",
  title_EN: "About Us",
  description: "Wir sprechen Ihre Sprache, nicht nur Codezeilen. Wir entschlüsseln Ihre Bedürfnisse, übersetzen sie in innovative Lösungen und integrieren sie dann nahtlos in Ihren Workflow.",
  description_EN: "We Speak Your Language, Not Just Lines Of Code We Decipher Your Needs, Translate Them Into Innovative Solutions,And Then Seamlessly Integrate Them Into Your Workflow.",
  paragraphs_DE: [
    {
      title: "Die Schaltkreise meines Herzens",
      description:
        "Wenn ich nicht in der digitalen Welt unterwegs bin, durchstreife ich die faszinierende Welt der Technik und Hardware. Schaltkreise und Lötstellen sind für mich wie Puzzleteile eines aufregenden Abenteuers.",
      icon: P1,
    },
    {
      title: "Auf der Überholspur des Lebens",
      description:
        "Neben dem Coden befinde ich mich gerne auf der Überholspur – im wahrsten Sinne des Wortes. Autos sind meine Leidenschaft, und ich genieße es, mit PS-starken Maschinen auf unbekannten Straßen unterwegs zu sein.",
      icon: P2,
    },
    {
      title: "Entdeckungsfreude als Lebensmotto",
      description:
        "Meine Reise als Webentwickler ist nur ein Teil meines Lebenswegs. Ich lebe nach dem Motto, dass das Abenteuer erst beginnt, wenn man das Bekannte hinter sich lässt. Das Entdecken neuer Orte ist meine Form der kreativen Inspiration.",
      icon: P3,
    },
  ],
  paragraphs_EN: [
    {
      title: "JOHN DOE",
      description:
        "When I'm not navigating the digital world, I explore the fascinating realm of technology and hardware. Circuits and solder joints are like puzzle pieces to me in an exciting adventure.",
      icon: P1,
    },
    {
      title: "MARIA FERGUSON",
      description:
        "Besides coding, I like to be on the fast lane - in the truest sense of the word. Cars are my passion, and I enjoy being on unknown roads with powerful machines.",
      icon: P2,
    },
    {
      title: "PETER SMITH",
      description:
        "My journey as a web developer is only a part of my life path. I live by the motto that the adventure only begins when you leave the familiar behind. Discovering new places and cultures is my form of creative inspiration.",
      icon: P3,
    },
  ],
};

export const contactData = {
  title: {
    de: "Kontakt",
    en: "Contact",
  },
  description: {
    de: "Schreiben Sie mir gerne eine Nachricht, dann erwische ich Sie auf der anderen Seite. Lassen Sie uns das Gespräch am Laufen halten!.",
    en: "Feel free to drop me a line, and I'll catch you on the flip side. Let's keep the conversation rolling!",
  },
  inputfields: [
    {
      name: "name",
      id: "user_name",
      placeholder: {
        de: "Dein Name",
        en: "Your Name",
      },
      type: "text",
      validation: {
        de: "Bitte gebe deinen Namen ein",
        en: "Please fill in your name",
      },
      pattern: "{2}",
    },
    {
      name: "email",
      id: "user_email",
      placeholder: {
        de: "Deine E-Mail Adresse",
        en: "Your E-Mail",
      },
      type: "email",
      validation: {
        de: "Bitte gebe deine Email ein",
        en: "Please fill in your email",
      },
      pattern: "[@]{4}",
    },
    {
      name: "subject",
      id: "user_subject",
      placeholder: {
        de: "Deine Betreff",
        en: "Your Subject",
      },
      type: "text",
      validation: {
        de: "Bitte gebe einen Betreff ein",
        en: "Please fill in your subject",
      },
      pattern: "{10}",
    },
  ],
  textarea: {
    placeholder: {
      de: "Deine Nachricht",
      en: "Your Message",
    },
    id: "user_message",
    name: "message",
    rows: 10,
    validation: {
      de: "Bitte gebe deine Nachricht ein",
      en: "Please fill in your message",
    },
    pattern: "{10}",
  },
  button: {
    value: {
      de: "Absenden",
      en: "Send",
    },
  },
  icon: FiMail,
  iconcolor: "#FFFFFF",
  colors: {
    main: "main-btn",
    second: "secondary-btn",
    icon: "white",
  },
  privacyOptIn: {
    checkbox: {
      de: "Ich stimme zu, dass Alpay meine personenbezogenen Daten (Name und E-Mail-Adresse) verwenden darf, um mit mir Kontakt aufzunehmen.",
      en: "I agree that Alpay may use my personal data (name and e-mail address) to contact me.",
    },
    description: {
      de: "Durch Übermittlung dieser Anfrage bestätigen Sie, dass Sie die Datenschutzerklärung gelesen haben",
      en: "By submitting this request, you acknowledge that you have read the Private Policy",
    },
  },
} as const;

export const toastMessages = {
  loadingProject: {
    de: "🦄 Die Live Demo wird gleich geöffnet. Server werden gestartet...",
    en: "🦄 The live demo will open shortly. Starting servers...",
  },
  successEmailSent: {
    de: "🦄 Vielen Dank für deine Email. Ich werde mich schnellstmöglich bei dir melden",
    en: "🦄 Thank you for your email. I will get back to you as soon as possible",
  },
  failedEmailSent: {
    de: "🦄 Leider hat der Versand deiner Email nicht geklappt. Bitte versuche es später noch einmal",
    en: "🦄 Unfortunately the sending of your email did not work. Please try again later",
  },
  failedValidationName: {
    de: "Bitte gebe deinen Namen ein",
    en: "Please fill in your name",
  },
} as const;

export const buttonLabels = {
  language: {
    de: "DE",
    en: "EN",
  },
} as const;

export const directionStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginRight: "4rem",
  },
  "outer-left-to-inner-right": {
    marginLeft: "4rem",
    transform: "scaleX(-1)",
  },
  "inner-right-to-middle": {
    width: "100%",
    transform: "scaleY(1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  "inner-left-to-middle": {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  "middle-to-inner-right": {
    width: "100%",
    transform: "scale(1,-1)",
  },
  "middle-to-inner-left": {
    width: "100%",
    transform: "scale(-1,-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  middle: {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

export const heightStyles: Record<string, { heights: [string, string] }> = {
  small: {
    heights: ["20rem", "13rem"],
  },
  middle: {
    heights: ["30rem", "23rem"],
  },
  large: {
    heights: ["40rem", "33rem"],
  },
  extraLarge: {
    heights: ["50rem", "43rem"],
  },
};

export const spaceStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginTop: "-6rem",
    width: "100%",
  },
  "outer-left-to-inner-right": {
    marginTop: "-6rem",
    width: "100%",
  },
  "inner-right-to-middle": {
    marginTop: "-20rem",
    width: "50%",
    zIndex: "-10",
  },
  "inner-left-to-middle": {
    marginTop: "-10rem",
    width: "50%",
    zIndex: "-10",
  },
  "middle-to-inner-right": {
    width: "75%",
  },
  "middle-to-inner-left": {
    marginTop: "-2.5rem",
    width: "50%",
  },
  middle: {
    marginTop: "-2.5rem",
    width: "0%",
    display: "none",
  },
};

export const widthStyles: Record<string, { widths: [string, string] }> = {
  "outer-right-to-inner-left": {
    widths: ["74.45%", "74.45%"],
  },
  "outer-left-to-inner-right": {
    widths: ["75%", "75%"],
  },
  "inner-right-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "inner-left-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "middle-to-inner-right": {
    widths: ["33.4%", "50.03%"],
  },
  "middle-to-inner-left": {
    widths: ["50.1%", "49%"],
  },
  middle: {
    widths: ["0%", "0%"],
  },
};
