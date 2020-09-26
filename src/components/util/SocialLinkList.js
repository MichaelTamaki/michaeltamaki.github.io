import React from "react"
import PropTypes from "prop-types"
import { GithubIcon, LinkedInIcon } from "./Icons"
import SocialLink from "./SocialLink"

function SocialLinkList({ isLightText }) {
  return (
    <div className="space-y-1">
      <div>
        <SocialLink
          href="https://github.com/MichaelTamaki"
          Icon={GithubIcon}
          text="Github"
          isLightText={isLightText}
        />
      </div>
      <div>
        <SocialLink
          href="https://www.linkedin.com/in/michaeltamaki"
          Icon={LinkedInIcon}
          text="LinkedIn"
          isLightText={isLightText}
        />
      </div>
    </div>
  )
}

SocialLinkList.propTypes = {
  isLightText: PropTypes.bool,
}

export default SocialLinkList
