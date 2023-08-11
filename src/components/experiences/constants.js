export const SKILLS = {
  REACT: "React",
  VUE: "Vue",
  TYPESCRIPT: "Typescript",
  D3: "D3.js",
  BROWSER_EXTENSION: "Browser Extension",
  JAVA: "Java",
  PYTHON: "Python",
  WORDPRESS: "Wordpress",
  INFRASTRUCTURE: "Infrastructure",
}

export const SORT_BY_KEYS = {
  DEFAULT: "Default",
  ALPHABETICAL_ASC: "Name A-Z",
  ALPHABETICAL_DSC: "Name Z-A",
}

export const SORT_BY_FNS = {}
SORT_BY_FNS[SORT_BY_KEYS.DEFAULT] = (card1, card2) =>
  card1.defaultOrder - card2.defaultOrder
SORT_BY_FNS[SORT_BY_KEYS.ALPHABETICAL_ASC] = (card1, card2) =>
  card1.title.localeCompare(card2.title)
SORT_BY_FNS[SORT_BY_KEYS.ALPHABETICAL_DSC] = (card1, card2) =>
  card2.title.localeCompare(card1.title)

export const CARD_DATA = [
  {
    title: "Okta, Inc.",
    link: "https://www.okta.com",
    positions: [
      { name: "Senior Software Engineer", date: "November '21 to Present" },
      { name: "Software Engineer", date: "August '19 to November '21" },
      { name: "Software Engineer Intern", date: "Summer '18" },
    ],
    description:
      "Front-end and full stack work on the end-user dashboard, browser plugins, and admin rate limit dashboard.",
    skills: [
      SKILLS.REACT,
      SKILLS.TYPESCRIPT,
      SKILLS.D3,
      SKILLS.BROWSER_EXTENSION,
      SKILLS.JAVA,
    ],
    defaultOrder: 0,
  },
  {
    title: "Cal Band",
    link: "https://www.calband.org",
    positions: [
      { name: "Computer Coordinator", date: "Spring '18 to Spring '19" },
      { name: "Computer Committee", date: "Spring '17 to Spring '18" },
    ],
    description:
      "Automated the student-run marching band's logistical tasks with an internal Django website. Lead and managed a team of web developers.",
    skills: [SKILLS.PYTHON, SKILLS.WORDPRESS, SKILLS.INFRASTRUCTURE],
    defaultOrder: 1,
  },
  {
    title: "The Daily Californian",
    link: "https://www.dailycal.org",
    positions: [
      { name: "Online Manager", date: "Summer '18 to Spring '19" },
      { name: "Online Team", date: "Fall '17 to Spring '18" },
    ],
    description:
      "Improved and updated the student-run newspaper's website and servers. Lead and managed a team of web developers.",
    skills: [SKILLS.WORDPRESS, SKILLS.INFRASTRUCTURE],
    defaultOrder: 2,
  },
  {
    title: "CalChart",
    link: "https://github.com/calband/calchart-redesign",
    description: "Web application for plotting Cal Band marchers on the field.",
    skills: [SKILLS.VUE, SKILLS.TYPESCRIPT],
    defaultOrder: 3,
  },
  {
    title: "Personal Website",
    link: "https://github.com/MichaelTamaki/michaeltamaki.github.io",
    description: "Website for personal brand.",
    skills: [SKILLS.REACT],
    defaultOrder: 4,
  },
]
