import React from "react"
import "./index.css"
import HeadUtil from "../components/util/Head"
import Landing from "../components/landing/Landing"
import Summary from "../components/summary/Summary"
import Experiences from "../components/experiences/Experiences"
import Footer from "../components/footer/Footer"

const IndexPage = () => (
  <>
    <main>
      <Landing />
      <Summary />
      <Experiences />
    </main>
    <Footer />
  </>
)

export default IndexPage

export const Head = HeadUtil
