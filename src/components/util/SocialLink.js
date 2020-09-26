import React from "react"
import PropTypes from "prop-types"

function SocialLink({ href, Icon, text, isLightText }) {
  return (
    <a
      className={`${isLightText ? 'hover:text-green-400 focus:text-green-400' : 'hover:text-green-800 focus:text-green-800'}
      transition-all duration-150 ease-linear`}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      <span className="w-6 mr-2 inline-block align-middle">
        <Icon />
      </span>
      <span className="inline-block align-middle">{text}</span>
    </a>
  )
}

SocialLink.propTypes = {
  href: PropTypes.string.isRequired,
  Icon: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  isLightText: PropTypes.bool,
}

export default SocialLink
