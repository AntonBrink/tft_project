import React, { useState } from "react"
import "../styles/homepage.css"
import allComps from "../data/compsArray"
import pointerImage from "../images/tftPointer2.png"
import { Helmet } from "react-helmet"

export default function Home() {
  // const divArray = []
  const divArray = allComps.concat(allComps)
  const divArray2 = divArray.concat(allComps)
  const [spinLeft, setSpinLeft] = useState("0px")
  const [yourComp, setYourComp] = useState("")
  const [btnClass, setBtnClass] = useState("spinBtn")
  const [btnContainerClass, setBtnContainerClass] = useState("btnContainer")

  const myfunction = () => {
    const myRandomNumber = Math.floor(Math.random() * 4600) / 100
    const newRandomNumber = Math.round(myRandomNumber) * 100
    const randomNumWithPixels = "-" + newRandomNumber + "px"
    setSpinLeft(randomNumWithPixels)
    const compId = Math.round((newRandomNumber / 100) % 27) + 7

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
    }, 1100)
  }

  return (
    <div>
      <Helmet>
        <title>tftrandom</title>
        <meta
          name="description"
          content="Chooses a random tft trait for your tft comp"
        />
        <script
          data-ad-client="ca-pub-2754405234770767"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        ></script>
      </Helmet>

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
                  {comp.name}({comp.compsize}){console.log(comp.img)}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <h1 className="compReveal">
        {yourComp.name
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
  )
}
