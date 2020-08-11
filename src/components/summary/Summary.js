import React from "react"
import { WebDeveloperIcon } from "../util/Icons"

function Summary() {
  return (
    <div className="container mx-auto my-16 sm:my-32 px-3 flex flex-col sm:flex-row items-center content-center">
      <div className="flex-auto sm:w-2/3 pr-3">
        <h2 className="text-2xl">
          Hello! I am a recent Computer Science graduate from UC Berkeley with
          an interest in full stack web development. I currently work on
          end-user facing features for Okta. I look forward to connecting with
          you!
        </h2>
      </div>
      <div className="flex-auto w-2/3 mt-8 sm:w-1/3 sm:mt-0">
        <WebDeveloperIcon />
      </div>
    </div>
  )
}

export default Summary
