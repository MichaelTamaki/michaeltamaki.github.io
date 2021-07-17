import React from "react"
import { StaticImage } from "gatsby-plugin-image"

function PortraitImg() {
  return (
    <StaticImage
      src="../../images/portrait.JPG"
      className="rounded-lg"
      alt="Michael Tamaki portrait"
      placeholder="blurred"
      layout="constrained"
      width={128}
      height={128}
      quality={100}
    />
  )
}

export default PortraitImg
