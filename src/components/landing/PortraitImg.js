import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

function PortraitImg() {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "portrait.JPG" }) {
        childImageSharp {
          fluid(maxWidth: 128) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Img
      className="rounded-lg"
      fluid={data.placeholderImage.childImageSharp.fluid}
    />
  )
}

export default PortraitImg
