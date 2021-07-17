import React from "react"
// import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

function PortraitImg() {
  // const data = useStaticQuery(graphql`
  //   {
  //     placeholderImage: file(relativePath: { eq: "portrait.JPG" }) {
  //       childImageSharp {
  //         gatsbyImageData(width: 128, layout: CONSTRAINED)
  //       }
  //     }
  //   }
  // `)

  return (
    <StaticImage
      // image={data.placeholderImage.childImageSharp.gatsbyImageData}
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
