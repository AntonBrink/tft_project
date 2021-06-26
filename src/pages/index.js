import React, { useState } from "react"
import "../styles/homepage.css"
import allComps from "../data/compsArray"
import pointerImage from "../images/tftPointer2.png"

export default function Home() {
  // const divArray = []
  const divArray = allComps.concat(allComps)
  const divArray2 = divArray.concat(allComps)
  const [spinLeft, setSpinLeft] = useState("0px")
  const [yourComp, setYourComp] = useState("")

  const myfunction = () => {
    const myRandomNumber = Math.floor(Math.random() * 4600) / 100
    const newRandomNumber = Math.round(myRandomNumber) * 100
    const randomNumWithPixels = "-" + newRandomNumber + "px"
    setSpinLeft(randomNumWithPixels)
    const compId = Math.round((newRandomNumber / 100) % 27) + 7

    setYourComp(divArray2[compId])
  }

  return (
    <div>
      Hello world!
      <div className="spinner">
        <img src={pointerImage} className="pointer"></img>
        <div className="spinItemsContainer">
          {divArray2.map(comp => {
            return (
              <div className="spinItem" style={{ left: spinLeft }}>
                {comp.name}
              </div>
            )
          })}
        </div>
      </div>
      <button
        onClick={() => {
          myfunction()
        }}
        className="spinBtn"
      >
        Spin!
      </button>
      <h1>Your Comp is {yourComp.name}</h1>
    </div>
  )
}
