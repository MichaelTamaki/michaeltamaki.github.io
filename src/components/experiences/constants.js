export const SKILLS = {
  REACT: "React",
  TYPESCRIPT: "Typescript",
  BROWSER_EXTENSION: "Browser Extension",
  JAVA: "Java",
  PYTHON: "Python",
  WORDPRESS: "Wordpress",
  INFRASTRUCTURE: "Infrastructure",
}

export const SORT_BY_KEYS = {
  DEFAULT: "Default",
  TIME_DSC: "Most to Least Recent",
  TIME_ASC: "Least to Most Recent",
  ALPHABETICAL_ASC: "Name A-Z",
  ALPHABETICAL_DSC: "Name Z-A",
}

export const SORT_BY_FNS = {}
SORT_BY_FNS[SORT_BY_KEYS.DEFAULT] = (card1, card2) =>
  card1.defaultOrder - card2.defaultOrder
SORT_BY_FNS[SORT_BY_KEYS.TIME_DSC] = (card1, card2) =>
  card2.timeOrder - card1.timeOrder
SORT_BY_FNS[SORT_BY_KEYS.TIME_ASC] = (card1, card2) =>
  card1.timeOrder - card2.timeOrder
SORT_BY_FNS[SORT_BY_KEYS.ALPHABETICAL_ASC] = (card1, card2) =>
  card1.title.localeCompare(card2.title)
SORT_BY_FNS[SORT_BY_KEYS.ALPHABETICAL_DSC] = (card1, card2) =>
  card2.title.localeCompare(card1.title)

export const CARD_DATA = [
  {
    title: "Okta, Inc.",
    link: "https://www.okta.com",
    positions: [
      { name: "Software Engineer", date: "August '19 to Present" },
      { name: "Software Engineer Intern", date: "Summer '18" },
    ],
    description:
      "Full-stack work on end-user facing features on the web-based dashboard (built with React + Typescript) and browser extensions.",
    skills: [
      SKILLS.REACT,
      SKILLS.TYPESCRIPT,
      SKILLS.BROWSER_EXTENSION,
      SKILLS.JAVA,
    ],
    defaultOrder: 0,
    timeOrder: 3,
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
    timeOrder: 1,
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
    timeOrder: 0,
  },
  {
    title: "Personal Website",
    link: "https://michaeltamaki.github.io",
    positions: [{ name: "Updated", date: "Fall 2020" }],
    description:
      "Website for personal brand built with UX and accessibility in mind. Users can easily find relevant experiences and projects.",
    skills: [SKILLS.REACT],
    defaultOrder: 3,
    timeOrder: 2,
  },
]
