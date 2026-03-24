const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 2, suffix: "+", label: "Years of Experience in Tech & Leadership" },
  { value: 15, suffix: "+", label: "Projects & Applications Built" },
  { value: 17, suffix: "+", label: "Hackathons & Events Organized/Participated" },
  { value: 4, suffix: "+", label: "Leadership Roles & Team Positions" },
  { value: 100, suffix: "+", label: "Students Impacted Through Initiatives" },
  { value: 95, suffix: "%", label: "Project Success & Completion Rate" },
  { value: 10, suffix: "+", label: "Technical Certifications Achieved" },
  { value: 15, suffix: "+", label: "Open Source Contributions" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Management",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 0.9,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.7,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 4.5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.045,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Management",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.045,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A complete e-commerce platform with shopping cart, payment, and admin dashboard features.",
    image: "/images/Cleveroad.jpg",
    technologies: ["React", "Node.js", "MongoDB"],
    liveDemo: "#",
    github: "#"
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "An interactive portfolio website with animations and responsive design to showcase work.",
    image: "/images/pf.png",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveDemo: "#",
    github: "#"
  },
  {
    id: 3,
    title: "DataForge",
    description: "A task management application with drag-and-drop and real-time collaboration features.",
    image: "/images/Task manager app.jpg",
    technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
    liveDemo: "#",
    github: "https://github.com/sebastiankaria14/DataForge"
  },
  {
    id: 4,
    title: "JUGEXA",
    description: "An interactive weather dashboard with location-based forecasts, weather maps, and historical data visualization.",
    image: "/images/Weather Forecast Dashboard.jpg",
    technologies: ["JavaScript", "Chart.js", "OpenWeather API"],
    liveDemo: "#",
    github: "https://github.com/sebastiankaria14/JUDEXA"
  },
  {
    id: 5,
    title: "Social Media Dashboard",
    description: "A comprehensive social media management dashboard with analytics, scheduling, and multi-platform integration.",
    image: "/images/Dashboard - Social Media Analytics.jpg",
    technologies: ["React", "D3.js", "Express.js"],
    liveDemo: "#",
    github: "#"
  },
  {
    id: 6,
    title: "EventVista",
    description: "A full-featured event management platform with scheduling, ticketing, and analytics features.",
    image: "/images/EventVista.jpg",
    technologies: ["Next.js", "Prisma", "PostgreSQL"],
    liveDemo: "#",
    github: "https://github.com/sebastiankaria14/EventVista"
  }
];

const expCards = [
  {
    review: "Sebastian brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
    logoPath: "/images/logo1.png",
    title: "Software Engineer",
    date: "January 2023 - Present",
    responsibilities: [
      "Built and deployed scalable software solutions for DBIT platform.",
      "Collaborated with cross-functional teams to deliver end-to-end features.",
      "Developed APIs and integrated external services.",
    ],
  },
  {
    review: "Sebastian's leadership as CSI-DBIT Chairperson has been exceptional. He successfully managed a large student chapter and organized impactful technical events.",
    logoPath: "/images/csi.png",
    title: "CSI-DBIT Chairperson",
    date: "July 2025 - May 2026",
    responsibilities: [
      "Led the Computer Society of India student chapter, overseeing 60+ members across technical, design, and event teams.",
      "Organized hackathons, coding challenges, and workshops in collaboration with industry experts.",
      "Managed sponsorships, partnerships, and outreach for major intercollegiate events.",
      "Mentored students in AI, web development, and open-source initiatives.",
      "Improved team workflow using project management and collaboration tools.",
    ],
  },
  {
    review: "Sebastian's role as Assistant Event Head demonstrated excellent organizational and coordination skills. He played a key role in executing multiple successful technical and cultural events.",
    logoPath: "/images/csi.png",
    title: "Asst. Event Head",
    date: "August 2024 - May 2025",
    responsibilities: [
      "Assisted in planning, coordinating, and executing technical and cultural events across the institute.",
      "Collaborated with multiple student committees to ensure smooth event operations and scheduling.",
      "Managed on-ground logistics, registrations, and participant coordination during intercollegiate festivals.",
      "Contributed to event promotion through digital marketing and social media campaigns.",
      "Supported sponsorship and guest coordination for workshops and hackathons.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Dr. Sunantha Guruswamy",
    mentions: "HoD, Information Technology",
    review:
      "Sebastian consistently demonstrates exceptional problem-solving skills in my AI course. His project showcased not only technical proficiency but also creative thinking. He's one of the most dedicated students I've taught.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Dhurv Naik",
    mentions: "Team Lead, Codeverse Hackathon",
    review:
      "Working with Sebastian during the 48-hour hackathon was incredible. He took ownership of the frontend development and delivered a polished interface under tight deadlines. His ability to learn new technologies quickly is impressive.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Owais Shaikh",
    mentions: "Project Partner, Third Year",
    review:
      "Sebastian and I collaborated on our AI project, and his contribution was outstanding. He handled the full-stack development with such precision and always went the extra mile to ensure our project stood out. A true team player!",
    imgPath: "/images/client2.png",
  },
  {
    name: "Prof. Prasad Padalkar",
    mentions: "Mentor, Software Engineering Lab",
    review:
      "Sebastian's work in the software engineering lab has been exemplary. He not only completes assignments with high quality but also helps fellow students debug their code. His passion for learning is evident in everything he does.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Kalanidhi Namboothiri",
    mentions: "Event Head, CSI-DBIT",
    review:
      "As a Chairperson of our coding club, Sebastian has contributed significantly to our community projects. He led a workshop on React and Three.js that was highly appreciated. His enthusiasm for technology is contagious!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Jigyasa Rathi",
    mentions: "Peer, Study Group",
    review:
      "Sebastian is not just a brilliant coder but also an excellent collaborator. During our group projects, he always ensures everyone understands the architecture and helps debug issues patiently. His technical skills and friendly attitude make him invaluable.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
    url: "https://www.instagram.com/sebastian_snapps/",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
    url: "https://x.com/KariaSebastian",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    url: "https://www.linkedin.com/in/sebastiankaria/",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  projects,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};

