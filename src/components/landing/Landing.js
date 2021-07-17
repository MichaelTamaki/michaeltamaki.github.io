import React from "react"
import PortraitImg from "./PortraitImg"
import SocialLinkList from "../util/SocialLinkList"

function Landing() {
  return (
    <section className="bg-gradient-to-br from-green-500 to-green-900">
      <div className="py-16 md:py-32 landing-bg">
        <div className="container text-center mx-auto">
          <div className="bg-gray-100 rounded-lg p-6 sm:p-8 shadow-2xl inline-flex flex-col sm:flex-row">
            <div className="w-32 mx-auto mb-4 sm:mb-0 sm:mr-8 flex-initial">
              <PortraitImg />
            </div>
            <div className="flex-1 flex flex-col justify-between text-left">
              <div className="mb-3">
                <h1 className="text-2xl text-gray-900">Michael Tamaki</h1>
                <h2 className="text-green-800">
                  Front-end / Full-Stack Developer
                </h2>
              </div>
              <SocialLinkList />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Landing
