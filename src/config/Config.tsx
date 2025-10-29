import {
  ManagementTeamConfig,
  MilestonesConfig,
  NavigationBarConfig,
  openRolesConfig,
  ProjectsConfig,
  ProjectSpotlightConfig,
  ProjectTagsConfig,
  QaHomeConfig,
} from "../types/Types";

// ------------ Routing ------------
export const navigationBarConfig: NavigationBarConfig = [
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
export const qaHome: QaHomeConfig = [
  {
    question: "How can I get involved at Talente Spenden?",
    answer:
      "You can join any project in our Charity Track, start your own Charity Track project, or apply to a position in one of our core teams.",
    links: [
      {
        type: "internal",
        text: "Learn how to contribute at Talente Spenden",
        url: "/join#contribute",
      },
    ],
  },
  {
    question: "Can I start my own project at Talente Spenden",
    answer:
      "Absolutely. We'd be super happy to know about about your ideas for a new Charity Track Project!",
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
      "Of course. All volunteers at Talente Spenden can request an official certificate for their work that is also accepted by the Deutschlandstipendium at TUM. Just let the Project Leads of your project know and they'll get you a certificate for your work!",
    links: [],
  },
  {
    question:
      "Is Talente Spenden open to collaborations with other organisations?",
    answer: "Yes, we'd be glad to talk to you! Feel free to reach out to us.",
    links: [
      {
        type: "external",
        text: "talente-spenden@tum.de",
        url: "mailto:talente-spenden@tum.de",
      },
    ],
  },
];

export const tsetQuestions: QaHomeConfig = [
  {
    question: "I can’t code. Is that a problem?",
    answer:
      "Not at all! You don’t need technical skills to join — curiosity, initiative, and a drive to learn are what count.",
    links: [],
  },
  {
    question: "Does “social” mean nonprofit or NGO?",
    answer:
      "Not necessarily. “Social impact” can also mean scalable, for-profit ideas with a strong positive effect on society or the environment.",
    links: [],
  },
  {
    question: "Do I have to study at TUM?",
    answer: "No — any student enrolled at a Munich university can apply.",
    links: [],
  },
  {
    question:
      "Do I have to be a Deutschlandstipendium (scholarship holder) to participate?",
    answer:
      "No — the application to the program is open to all motivated students, regardless of scholarship status.",
    links: [],
  },
  {
    question: "How much time do I need to invest per week?",
    answer: "You decide! but the more you put in, the more you’ll get out. 😉",
    links: [],
  },
  {
    question:
      "I’ll be abroad/interning during part of the program. Can I still join?",
    answer:
      "Yes — as long as you're able to stay engaged and participate in key sessions remotely or asynchronously, you’re welcome to apply.",
    links: [],
  },
];

export const projectSpotlight: ProjectSpotlightConfig = [
  { id: "Blutspende", text: "Collecting blood cells for the good" },
  { id: "Bücherspende", text: "Old Books deserve to be read" },
  { id: "Tafel", text: "Everyone needs food" },
  { id: "Lebensfreude", text: "Happy" },
];

// Team Page

export const managementTeam: ManagementTeamConfig = [
  {
    name: "Melis Güler",
    role: "Head of Events",
    job: "Bachelor's Student Environmental Engineering",
    email: "melis.gueler@tum.de",
    image:
      "https://drive.google.com/thumbnail?id=1EWcs1ynHQcN82dNrWvneCAUEr43sZTM5&sz=w1000",
  },
  {
    name: "Max Huppertz",
    role: "Head of Communication",
    job: "Bachelor's Student Informatics",
    email: "max.huppertz@tum.de",
    image:
      "https://drive.google.com/thumbnail?id=1OxnvXVS29GqGkseVTuVkwQbmQe8BjBy9&sz=w1000",
  },
  {
    name: "Jonas Itt",
    role: "Head of Technology",
    job: "Masters's Student Informatics",
    email: "jonas.itt@tum.de",
    image:
      "https://drive.google.com/thumbnail?id=1rEeW-T_xdnCZ-jhvVbQ5t3amDlbxPwlA&sz=w1000",
  },
  {
    name: "Jonas Süß",
    role: "Head of Finance & Social Entrepreneurship",
    job: "Master's Student Computer Science",
    email: "jonas.suess@tum.de",
    image:
      "https://drive.google.com/thumbnail?id=10LTxMdPqSUb1WwLhhcPysfW2_y1y7g4D&sz=w1000",
  },
  {
    name: "Fabian D’ Cruz",
    role: "Communication Team Member",
    job: "Master's Student Rail, Transport and Logistics",
    email: "",
    image:
      "https://drive.google.com/thumbnail?id=1iJFmZQQTzzpYY_8PKfaeDZpSfCGlffCJ&sz=w1000",
  },
  {
    name: "Joana Brecko",
    role: "Communication Team Member",
    job: "Master's Student Consumer Science",
    email: "",
    image:
      "https://drive.google.com/thumbnail?id=1P1vo20Ji1VPV15_fWLsHNgbxSK4n_cg5&sz=w1000",
  },
  {
    name: "Selin Wendt",
    role: "Event Team Member",
    job: "Master's Student Information Systems",
    email: "",
    image:
      "https://drive.google.com/thumbnail?id=18WYT_dulHXXij3FbXmpb8T793unTrMPZ&sz=w1000",
  },
  {
    name: "Esther Johanna Schmid",
    role: "Entrepreneurship Team Member",
    job: "Bachelor's Student Biochemistry",
    email: "",
    image:
      "https://drive.google.com/thumbnail?id=1cYGj7CCO_08iUwEF9BKovxEaPeZFKAkX&sz=w1000",
  },
  {
    name: "Elena Teissier",
    role: "Entrepreneurship Team Member",
    job: "Bachelor's Student Molecular Biotechnology",
    email: "",
    image:
      "https://drive.google.com/thumbnail?id=1PEjsu1XGTjUb-zW0dveiMmOBEOggDk2u&sz=w1000",
  },
  {
    name: "Sajeed",
    role: "Project Lead Bücherspende",
    job: "",
    email: "",
    image:
      "https://drive.google.com/thumbnail?id=1n9-pmSWrwAex1hTbRgg2GxAwIhLvsZYA&sz=w1000",
  },
  {
    name: "Mona Schneider",
    role: "Project Lead Navigatum",
    job: "",
    email: "",
    image:
      "https://drive.google.com/thumbnail?id=1p5ys4zWAyJsVPFkxjkzgiTw6-UZq9NM1&sz=w1000",
  },

  {
    name: "Daniel Zeitner",
    role: "Project Lead Biotoppflege Freising",
    job: "",
    email: "",
    image:
      "https://drive.google.com/thumbnail?id=1BOd7gnd2NrlyowLNNtfzZzhsdHkO8vb2&sz=w1000",
  },
  {
    name: "Sebastian Doctor",
    role: "Project Lead Tafel",
    job: "",
    email: "",
    image:
      "https://drive.google.com/thumbnail?id=1WRWB5GiTlzi_6Bz8ppmMHT2Vw5rOdMSF&sz=w1000",
  },
  {
    name: "Caroline Lange",
    role: "Project Lead Lebensfreude",
    job: "Bachelor's Student Engineering Science",
    email: "",
    image:
      "https://drive.google.com/thumbnail?id=1dJcMrC7_mDvr71QUeJlgoYo56TQFCUMR&sz=w1000",
  },
  {
    name: "Sarah",
    role: "Project Lead Blutspende am Campus",
    job: "Bachelor's Student Civil Engineering",
    email: "",
    image:
      "https://drive.google.com/thumbnail?id=1hylDQrIFgJk8BKeqoqU6AsWo5Jbt6Pjz&sz=w1000",
  },
];

export const milestones: MilestonesConfig = [
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

// Join Page
export const openRoles: openRolesConfig = [
  {
    role: "Technology Team Member - Backend/DevOps",
    track: "Core",
    requirements: "",
    shortDescription: "",
  },
];

// News Page
export const projectTags: ProjectTagsConfig = [
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

export const projects: ProjectsConfig = [
  {
    name: "Blutspende",
    descriptionShort: "A blood donation initiative to support local hospitals.",
    descriptionLong:
      "Blutspende is a community-driven program focused on collecting blood donations from volunteers to ensure a steady supply for hospitals and medical facilities in need. The initiative helps save lives and supports patients requiring blood transfusions.",
    image:
      "https://drive.google.com/thumbnail?id=111jWKJmiCu84Y6tCYwK8g4y0E0xnpjmi&sz=w1000",
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
    image:
      "https://drive.google.com/thumbnail?id=1bqktoKZh1XNzdyJeISC6y7GacdfH9MeV&sz=w1000",

    type: "Project",
    tags: ["Sustainability"],
    track: "TSCT",
  },
  {
    name: "Tafel",
    descriptionShort: "A food distribution service for people in need.",
    descriptionLong:
      "Tafel is a volunteer-driven organization that collects surplus food from stores and distributes it to individuals and families facing food insecurity. The project helps reduce food waste while supporting those in need with nutritious meals.",
    image:
      "https://drive.google.com/thumbnail?id=18VCU5ZJFjc0NyW_7A83k7Ieah20mSng9&sz=w1000",

    type: "Project",
    tags: ["Donations", "Social"],
    track: "TSCT",
  },
  {
    name: "Lesepatenschaft",
    descriptionShort: "Reading support to help kids enjoy reading.",
    descriptionLong:
      "One-on-one reading support to help kids enjoy reading and improve their reading skills in cooperation with 2 local non-profit organizations in Freising and Munich.",
    image: "",

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
    image:
      "https://drive.google.com/thumbnail?id=1d26sh7sbH3RFfZ4c6t31HXPvAzVmKEoP&sz=w1000",

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
    image:
      "https://drive.google.com/thumbnail?id=1SLk5P38OeC070LizqBn5MDXAIObh_5p2&sz=w1000",

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
    image:
      "https://drive.google.com/thumbnail?id=1QzcGqBx-Qiid9zfzFFJAdBhUY8DjLVD_&sz=w1000",

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
    image: "",
    type: "Project",
    tags: ["Education"],
    track: "TSCT",
  },
];
// ------------ Design -------------
// Colors can be edited in /tailwind.config.js

export const scrollBandImages: string[] = [
  "https://drive.google.com/thumbnail?id=1ky-_Onq-cYwx-LlBjgQZ6xEuIUuZJLQ8&sz=w1000",
  "https://drive.google.com/thumbnail?id=1176Waj3tOiHOHX0RAPKyIOYxgNbmP1US&sz=w1000",
  "https://drive.google.com/thumbnail?id=1W65bM2c8pbVkXCEFG2QZRJZNTonxy4pM&sz=w1000",
  "https://drive.google.com/thumbnail?id=18LuU7JIYtHURxmhLTj8NkIlRcu8p6eD3&sz=w1000",
  "https://drive.google.com/thumbnail?id=1_P0AMwWVmRYSFuR63fgRWFeqvH1vAb48&sz=w1000",
  "https://drive.google.com/thumbnail?id=1QzcGqBx-Qiid9zfzFFJAdBhUY8DjLVD_&sz=w1000",
  "https://drive.google.com/thumbnail?id=1bqktoKZh1XNzdyJeISC6y7GacdfH9MeV&sz=w1000",
  "https://drive.google.com/thumbnail?id=1PX2cci1FMiL0v1WwGmYXuNAuaWnN0uCw&sz=w1000",
  "https://drive.google.com/thumbnail?id=1Gc0TDEPNM117TmjMz77H20SWVO9iRmEW&sz=w1000",
  "https://drive.google.com/thumbnail?id=1UXFHRTOh4IWZ6DhZfw4MAynxu_eGuEHj&sz=w1000",
  "https://drive.google.com/thumbnail?id=1FeMCAHCHdO0aQhq5Ai3sZAhb7DG3TLYW&sz=w1000",
  "https://drive.google.com/thumbnail?id=1fd1Ecggsp4ntRaV-Pnbla4tweLfjYkFi&sz=w1000",
  "https://drive.google.com/thumbnail?id=13YoeSVxL2EWFITn25j8CTpAtGSsMwJEV&sz=w1000",
  "https://drive.google.com/thumbnail?id=111jWKJmiCu84Y6tCYwK8g4y0E0xnpjmi&sz=w1000",
];
