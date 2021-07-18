import React from "react"
import PropTypes from "prop-types"
import { ExternalLinkIcon } from "../util/Icons"
import SkillPill from "./SkillPill"

function ExperienceCard({
  title,
  link,
  positions,
  description,
  skills,
  selectedFilters,
  toggleFilter,
}) {
  return (
    <div className="shadow-xl rounded p-6 bg-white flex flex-col justify-between">
      <div className="space-y-1">
        <h4 className="text-xl">{title}</h4>
        {positions && (
          <div>
            {positions.map(({ name, date }) => (
              <p key={name}>
                <span className="font-bold italic text-green-800">{name}</span>{" "}
                {date}
              </p>
            ))}
          </div>
        )}
        <p>{description}</p>
        {link && (
          <p>
            <a
              href={link}
              className="font-bold hover:text-green-800 break-words"
              target="_blank"
              rel="noreferrer"
            >
              {link} <ExternalLinkIcon />
            </a>
          </p>
        )}
      </div>
      <div className="mt-3 space-y-2">
        {skills.map((skill) => (
          <SkillPill
            key={skill}
            skill={skill}
            selectedFilters={selectedFilters}
            toggleFilter={toggleFilter}
          />
        ))}
      </div>
    </div>
  )
}

ExperienceCard.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string,
  positions: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      date: PropTypes.string,
    })
  ),
  description: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedFilters: PropTypes.arrayOf(PropTypes.string).isRequired,
  toggleFilter: PropTypes.func.isRequired,
}

export default ExperienceCard
