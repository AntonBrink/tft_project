import React, { useState } from "react"
import "../styles/homepage.css"
import allComps from "../data/compsArray"
import pointerImage from "../images/tftPenguinSmall.png"
import { Helmet } from "react-helmet"

export default function Home() {
  const divArray = allComps.concat(allComps)
  const divArray2 = divArray.concat(allComps)
  const [spinLeft, setSpinLeft] = useState("0px")
  const [yourComp, setYourComp] = useState("")
  const [btnClass, setBtnClass] = useState("spinBtn")
  const [btnContainerClass, setBtnContainerClass] = useState("btnContainer")
  const [timer, setTimer] = useState("done")

  const myfunction = () => {
    let myRandomNumber = Math.floor(Math.random() * 4600) / 100

    let pixelAdjust = 0

    if (window.innerWidth < 1200) {
      pixelAdjust = 30
      console.log("occurs")
    }

    const spinnerWidth = window.innerWidth * 0.8
    let spinnerAdjust = spinnerWidth / 2 / 100
    spinnerAdjust = (Math.floor(spinnerAdjust) * 100) / 100

    const newRandomNumber = Math.round(myRandomNumber) * 100 + pixelAdjust
    const randomNumWithPixels = "-" + newRandomNumber + "px"
    setSpinLeft(randomNumWithPixels)
    const compId = Math.round((newRandomNumber / 100) % 27) + spinnerAdjust

    if (yourComp === divArray[compId]) {
      myfunction()
    } else {
      setYourComp(divArray2[compId])
    }

    setBtnClass("spinBtnFlip")
    setBtnContainerClass("btnContainerFlip")

    setTimeout(function () {
      setBtnClass("spinBtn")
      setBtnContainerClass("btnContainer")
      setTimer("notdone")
    }, 1100)
    setTimer("done")
  }

  return (
    <main className="Page">
      <Helmet>
        <title>tftrandom</title>
        <meta
          name="description"
          content="Chooses a random tft trait for your tft comp"
        />
      </Helmet>
      <div className="content">
        <div className="spinner">
          <img src={pointerImage} className="pointer" alt=""></img>
          <div className="spinItemsContainer">
            {divArray2.map(comp => {
              return (
                <div
                  className="spinItem"
                  style={{
                    left: spinLeft,
                    backgroundImage: `radial-gradient(circle, ${comp.colors})`,
                  }}
                >
                  <img src={comp.img} className="traitImg" alt="" />
                  <div className="traitText">
                    {comp.name}({comp.compsize})
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <h1 className="compReveal">
          {yourComp.name && timer !== "done"
            ? "Your Comp should include the " + yourComp.name + " trait"
            : "Spin to get your random trait!"}
        </h1>

        <div className={btnContainerClass}>
          <button
            onClick={() => {
              myfunction()
            }}
            className={btnClass}
          >
            Spin!
          </button>
        </div>
      </div>

      <footer className="footerClass">
        TFTrandom was created under Riot Games' "Legal Jibber Jabber" policy
        using assets owned by Riot Games. Riot Games does not endorse or sponsor
        this project.
      </footer>
    </main>
  )
}
