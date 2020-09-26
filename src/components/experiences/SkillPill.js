import React from "react"
import PropTypes from "prop-types"

function SkillPill({ skill, selectedFilters, toggleFilter, ...props }) {
  const ariaDescribedBy = props["aria-describedby"]
  const skillEnabled = selectedFilters.includes(skill)
  return (
    <button
      className={`${skillEnabled ? "bg-green-300" : "bg-gray-400"}
      inline-block hover:bg-green-400 rounded-full mr-2 px-3 py-1 text-sm font-semibold transition-all duration-150 ease-linear`}
      role="checkbox"
      aria-checked={skillEnabled}
      aria-describedby={ariaDescribedBy}
      onClick={() => toggleFilter(skill)}
    >
      {skill}
    </button>
  )
}

SkillPill.propTypes = {
  skill: PropTypes.string.isRequired,
  selectedFilters: PropTypes.arrayOf(PropTypes.string).isRequired,
  toggleFilter: PropTypes.func.isRequired,
  "aria-describedby": PropTypes.string,
}

export default SkillPill
