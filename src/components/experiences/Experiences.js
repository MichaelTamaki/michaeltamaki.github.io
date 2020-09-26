import React, { useState, useEffect } from "react"
import { SKILLS, CARD_DATA, SORT_BY_KEYS, SORT_BY_FNS } from "./constants"
import SkillPill from "./SkillPill"
import ExperienceCard from "./ExperienceCard"
import { SelectIcon } from "../util/Icons"

function Experiences() {
  const [selectedCards, setSelectedCards] = useState(CARD_DATA)
  const [selectedFilters, setSelectedFilters] = useState([])
  const [selectedSort, setSelectedSort] = useState(SORT_BY_KEYS.DEFAULT)

  useEffect(() => {
    let cards = CARD_DATA.slice()
    if (selectedFilters.length !== 0) {
      cards = cards.filter((card) =>
        selectedFilters.some((skill) => card.skills.includes(skill))
      )
    }
    cards.sort(SORT_BY_FNS[selectedSort])
    setSelectedCards(cards)
  }, [selectedFilters, selectedSort])

  const toggleFilter = (skill) => {
    const filterIndex = selectedFilters.indexOf(skill)
    if (filterIndex !== -1) {
      selectedFilters.splice(filterIndex, 1)
    } else {
      selectedFilters.push(skill)
    }
    setSelectedFilters(selectedFilters.slice())
  }

  const onSortChange = (event) => {
    setSelectedSort(event.target.value)
  }

  return (
    <div className="container px-3 mt-16 mx-auto">
      <h2 className="text-2xl mb-3">Experiences and Projects</h2>
      <div className="space-y-2 mb-2">
        <h3 id="filter-by-label" className="inline-block mr-2">
          Filter by skills
        </h3>
        {Object.values(SKILLS).map((skill) => (
          <SkillPill
            key={skill}
            aria-describedby="filter-by-label"
            skill={skill}
            selectedFilters={selectedFilters}
            toggleFilter={toggleFilter}
          />
        ))}
      </div>
      <div>
        <h3 id="sort-by-label" className="inline-block mr-2">
          Sort by
        </h3>
        <div className="inline-block relative">
          <select
            aria-labelledby="sort-by-label"
            value={selectedSort}
            onChange={onSortChange}
            onBlur={onSortChange}
            className="block appearance-none bg-white border border-gray-400 hover:border-gray-500 px-2 py-1 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          >
            {Object.values(SORT_BY_KEYS).map((key) => (
              <option key={key} value={key}>
                {key}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <SelectIcon />
          </div>
        </div>
      </div>
      <div className="card-container mt-6">
        {selectedCards.map((cardData) => (
          <ExperienceCard
            {...cardData}
            key={cardData.title}
            selectedFilters={selectedFilters}
            toggleFilter={toggleFilter}
          />
        ))}
      </div>
    </div>
  )
}

export default Experiences
