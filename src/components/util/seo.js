/**
 * Component to populate <head> with meta data
 */
import React from "react"
import { Helmet } from "react-helmet"

function SEO() {
  return (
    <Helmet
      htmlAttributes={{
        lang: `en`,
      }}
      title="Michael Tamaki"
      meta={[
        {
          name: `description`,
          content: `Michael Tamaki personal website`,
        },
        {
          property: `og:title`,
          content: `Michael Tamaki`,
        },
        {
          property: `og:description`,
          content: `Michael Tamaki personal website`,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: `Michael Tamaki`,
        },
        {
          name: `twitter:title`,
          content: `Michael Tamaki`,
        },
        {
          name: `twitter:description`,
          content: `Michael Tamaki personal website`,
        },
      ]}
    />
  )
}

export default SEO
