import React from "react"
import SocialLinkList from "../util/SocialLinkList"

function Footer() {
  return (
    <footer className="mt-16 py-16 px-3 bg-gray-800 text-gray-400">
      <div className="container mx-auto">
        <h2 className="mb-6">Made by Michael Tamaki</h2>
        <SocialLinkList isLightText={true} />
      </div>
    </footer>
  )
}

export default Footer
