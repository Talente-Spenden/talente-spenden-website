// ------------ Routing ------------
export const navigationBarConfig = [
  { name: "Charity Track", path: "/charity", color: "yellow" },
  {
    name: "Entrepreneurship Track",
    path: "/entrepreneurship",
    color: "green",
  },
  { name: "Team", path: "/team", color: "orange" },
  //{ name: "Our Mission", path: "/mission", color: "purple" },
  { name: "Join us", path: "/join", color: "grey" },
];

// ------------ Content ------------

// Home Page
export const qaHome = [
  {
    question: "How can I get involved at Talente Spenden?",
    answer:
      "You can join any project of our Charity Track, start your own Charity Track project (email us!), or apply to a position in our core teams. Let's make a difference, together.",
    links: [
      {
        type: "internal",
        text: "Join us",
        url: "/join",
      },
    ],
  },
  {
    question: "Can I start my own project at Talente Spendens Charity Track?",
    answer: "Absolutely. We'd be super happy to know about about your ideas!",
    links: [
      {
        type: "external",
        text: "talente-spenden@tum.de",
        url: "mailto:talente-spenden@tum.de",
      },
    ],
  },
  {
    question: "Will my voluntary work at Talente Spenden be certified?",
    answer:
      "Of course. All volunteers at Talente Spenden can request an official certificate for their work that is accepted e.g. by the Deutschlandstipendium at TUM. Just let the Project Leads of your project know!",
    links: [],
  },
  {
    question:
      "Is Talente Spenden open to collaborations with other organisations?",
    answer: "Yes! You can reach us via mail",
    links: [
      {
        type: "external",
        text: "talente-spenden@tum.de",
        url: "mailto:talente-spenden@tum.de",
      },
    ],
  },
];

export const projectSpotlight = [
  { id: "Blutspende", text: "Collecting blood cells for the good" },
  { id: "Bücherspende", text: "Old Books deserve to be read" },
  { id: "Tafel", text: "Everyone needs food" },
  { id: "Lebensfreude", text: "Happy" },
];

// Team Page

export const managementTeam = [
  {
    name: "Melis Güler",
    role: "Head of Events",
    job: "Bachelor's student in environmental engineering",
    email: "melis.gueler@tum.de",
    image: "/src/assets/img/Melis.jpeg",
  },
  {
    name: "Max Huppertz",
    role: "Head of Communication",
    job: "Bachelor's student in informatics",
    email: "max.huppertz@tum.de",
    image: "/src/assets/img/Max.jpeg",
  },
  {
    name: "Jonas Itt",
    role: "Head of Technology",
    job: "Masters's student in informatics",
    email: "jonas.itt@tum.de",
    image: "/src/assets/img/JonasI.jpeg",
  },
  {
    name: "Jonas Süß",
    role: "Head of Finance & Social Entrepreneurship",
    job: "Bachelor's student in informatics",
    email: "jonas.suess@tum.de",
    image: "/src/assets/img/JonasS.jpeg",
  },
  {
    name: "Fabian",
    role: "Communication Team Member",
    job: "",
    email: "",
    image: "/src/assets/img/Fabian.jpg",
  },
  {
    name: "Joana",
    role: "Communication Team Member",
    job: "",
    email: "",
    image: "/src/assets/img/Joana2.jpg",
  },
];

export const milestones = [
  {
    year: 2014,
    title: "Talente Spenden is founded",
    description: "Munich, Germany",
  },
  {
    year: 2023,
    title: "Talente Spenden legal registration as e.V.",
    description: "",
  },
  {
    year: 2025,
    title: "Talente Spenden 2.0 releases",
    description: "",
  },
];

// Projects Page

// News Page
export const projectTags = [
  {
    name: "Education",
    color: "orange",
  },
  {
    name: "Sustainability",
    color: "green",
  },
  {
    name: "Donations",
    color: "blue",
  },
  {
    name: "Social",
    color: "blue",
  },
];

export const projects = [
  {
    name: "Blutspende",
    descriptionShort: "A blood donation initiative to support local hospitals.",
    descriptionLong:
      "Blutspende is a community-driven program focused on collecting blood donations from volunteers to ensure a steady supply for hospitals and medical facilities in need. The initiative helps save lives and supports patients requiring blood transfusions.",
    image: "blutspende.jpg",
    type: "Project",
    tags: ["Donations"],
    track: "TSCT",
  },
  {
    name: "Biotoppflege Freising",
    descriptionShort:
      "Conservation project focused on maintaining local natural habitats.",
    descriptionLong:
      "Biotoppflege Freising is a local conservation effort aimed at preserving and maintaining biodiversity in the Freising area. Volunteers participate in habitat restoration, protection of native species, and ecological education activities.",
    image: "biotoppflege.png",
    type: "Project",
    tags: ["Sustainability"],
    track: "TSCT",
  },
  {
    name: "Tafel",
    descriptionShort: "A food distribution service for people in need.",
    descriptionLong:
      "Tafel is a volunteer-driven organization that collects surplus food from stores and distributes it to individuals and families facing food insecurity. The project helps reduce food waste while supporting those in need with nutritious meals.",
    image: "tafel.jpg",
    type: "Project",
    tags: ["Donations", "Social"],
    track: "TSCT",
  },
  {
    name: "Lebensfreude",
    descriptionShort:
      "A program dedicated to enhancing the well-being of the elderly.",
    descriptionLong:
      "Lebensfreude focuses on enriching the lives of senior citizens through activities, social events, and workshops. The project aims to combat loneliness, promote healthy living, and enhance the quality of life for older adults in the community.",
    image: "lebensfreude.jpg",
    type: "Project",
    tags: ["Social"],
    track: "TSCT",
  },
  {
    name: "Mentoring@Salesianum",
    descriptionShort:
      "Mentorship program to support students at Salesianum School.",
    descriptionLong:
      "Mentoring@Salesianum connects students with mentors from various industries to provide guidance, career advice, and personal development support. The initiative aims to empower students to reach their academic and professional goals.",
    image: "salesianum.png",
    type: "Project",
    tags: ["Education", "Social"],
    track: "TSCT",
  },
  {
    name: "Bücherspende",
    descriptionShort:
      "A project promoting book donations for educational purposes.",
    descriptionLong:
      "Bücherspende is aimed at collecting and distributing books to schools, libraries, and under-resourced communities. The initiative seeks to make educational materials accessible and promote learning opportunities for everyone.",
    image: "buecherspende.png",
    type: "Project",
    tags: ["Education", "Donations"],
    track: "TSCT",
  },
  {
    name: "NavigaTUM",
    descriptionShort:
      "A mentorship program for students at the Technical University of Munich.",
    descriptionLong:
      "NavigaTUM is designed to assist new students at the Technical University of Munich (TUM) with their transition to university life. This initiative pairs incoming students with experienced mentors who provide advice, guidance, and community support.",
    image: "navigatum.jpg",
    type: "Project",
    tags: ["Education"],
    track: "TSCT",
  },
];
// ------------ Design -------------
// Colors can be edited in /tailwind.config.js
