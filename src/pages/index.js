import React from "react"
import "./index.css"
import SEO from "../components/util/seo"
import Landing from "../components/landing/Landing"
import Summary from "../components/summary/Summary"
import Experiences from "../components/experiences/Experiences"
import Footer from "../components/footer/Footer"

const IndexPage = () => (
  <>
    <main>
      <SEO />
      <Landing />
      <Summary />
      <Experiences />
    </main>
    <Footer />
  </>
)

export default IndexPage
