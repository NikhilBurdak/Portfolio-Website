import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Android Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Android Developers",
    company_name: "CloudCodedDevelopers (Intership)",
    icon: starbucks,
    iconBg: "#383E56",
    date: "june 2023 - Persent",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web development",
    company_name: "Thinklance edutech (Intership)",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Feb 2023 - Mar 2023",
    points: [
      "Working closely with our experienced development team, you will actively contribute to real-world projects, allowing you to refine your coding skills and understand industry best practices.",
      " Our internship program fosters a collaborative learning environment, encouraging you to engage in knowledge-sharing sessions with fellow interns and seasoned professionals alike. ",
      " front-end technologies like HTML5, CSS3, and JavaScript, to back-end technologies like Node.js, Python, and databases, you will have the chance to work with cutting-edge tools, ensuring you are well-equipped with the skills demanded in the ever-evolving digital landscape.",
    ],
  },
  {
    title: "Full Stack Development",
    company_name: "postulate (Intership) ",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2023 - Apr 2023",
    points: [
      "full stack development internship offers a comprehensive and immersive learning experience, equipping you with a diverse skill set spanning both front-end and back-end technologies. ",
      "Collaborating alongside seasoned full stack developers, you will contribute to the entire development lifecycle, from conceptualization and planning to implementation and deployment.",
      "Regular one-on-one sessions and code reviews will empower you to refine your coding practices and adopt industry best practices.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "This analysis aims to observe which features are most helpful in predicting malignant or benign cancer and to see general trends that may aid us in model selection and hyper parameter selection. The goal is to classify whether the breast cancer is benign or malignant. To achieve this i have used machine learning classification methods to fit a function that can predict the discrete class of new input.",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Breast Cancer Prediction Using Machine Learning",
    description:
      "This analysis aims to observe which features are most helpful in predicting malignant or benign cancer and to see general trends that may aid us in model selection and hyper parameter selection. The goal is to classify whether the breast cancer is benign or malignant. To achieve this i have used machine learning classification methods to fit a function that can predict the discrete class of new input.",
    tags: [
      {
        name: "machine learning",
        color: "blue-text-gradient",
      },
      {
        name: "supervised learning",
        color: "green-text-gradient",
      },
      {
        name: "unsupervised learning",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Netflix clone -App",
    description:
      "Netflix Clone App a cutting-edge digital entertainment platform that promises an unparalleled streaming experience. With a user-friendly interface and a vast library of captivating movies, TV shows, and documentaries, our app delivers top-notch entertainment right at your fingertips. Seamlessly curated to cater to diverse tastes, it offers personalized recommendations, ensuring users discover content that truly resonates",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "figma",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "PdfCodeDocs",
    description:
      " PdfCodesDocs, a sophisticated and efficient app designed to revolutionize your document management experience. With its intuitive interface and powerful functionality, PdfCodesDocs empowers users to effortlessly organize, annotate, and collaborate on PDFs. Seamlessly scan, convert, and merge documents with precision, while ensuring utmost security with password protection and encryption features. Our app's OCR technology swiftly transforms scanned files into editable text, streamlining productivity.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "figma",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
