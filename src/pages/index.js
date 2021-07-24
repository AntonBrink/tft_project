import React, { useState, useEffect } from "react"
import "../styles/homepage.css"
import allComps from "../data/compsArray"
import pointerImage from "../images/tftPenguinSmall.webp"
import pointerImagePng from "../images/tftPenguinSmall.png"
import { Helmet } from "react-helmet"

export default function Home() {
  const divArray = allComps.concat(allComps)
  const divArray2 = divArray.concat(allComps)
  const [spinLeft, setSpinLeft] = useState("0px")
  const [yourComp, setYourComp] = useState("")
  const [btnClass, setBtnClass] = useState("spinBtn")
  const [btnContainerClass, setBtnContainerClass] = useState("btnContainer")
  const [timer, setTimer] = useState("done")
  const [webP, setWebp] = useState("webp")

  useEffect(() => {
    const check_webp_feature = (feature, callback) => {
      var kTestImages = {
        lossy: "UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",
        lossless: "UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",
        alpha:
          "UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",
        animation:
          "UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",
      }
      var img = new Image()
      img.onload = function () {
        var result = img.width > 0 && img.height > 0
        callback(feature, result)
      }
      img.onerror = function () {
        callback(feature, false)
      }
      img.src = "data:image/webp;base64," + kTestImages[feature]
    }
    check_webp_feature("lossless", checkFunction)
  }, [])

  const checkFunction = (feature, result) => {
    if (!result) {
      setWebp("")
    }
  }

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
    const compId = Math.round((newRandomNumber / 100) % 26) + spinnerAdjust

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
    <main className={`${webP} Page`}>
      <Helmet>
        <title>tftrandom</title>
        <meta
          name="description"
          content="Chooses a random tft trait for your tft comp"
        />
      </Helmet>
      <div className="content">
        <header className="mainHeading">
          <h1>TFTRandom</h1>
          <h2>A tft randomizer made by Twiggymocha</h2>
          <h3>Updated for TFT Version 5.5</h3>
          <h3>HOW IT WORKS</h3>
          <p>
            You press the "spin" button. A random trait gets selected, this is
            indicated below the spinner and also indicated by the penguins sword
            after the spin is complete. Your tft comp has to include this trait.
            The champions included in this comp are displayed once the spin is
            complete.
          </p>
        </header>

        <div className="spinner">
          <img
            src={webP ? pointerImage : pointerImagePng}
            className="pointer"
            alt={"PointerImage"}
            height="100"
            width="100"
          ></img>
          <div className="spinItemsContainer">
            {divArray2.map((comp, id) => {
              let counter = -1
              counter++

              return (
                <div
                  className="spinItem"
                  style={{
                    left: spinLeft,
                    backgroundImage: `radial-gradient(circle, ${comp.colors})`,
                  }}
                  key={id}
                >
                  <img
                    src={webP === "webp" ? comp.img : comp.name + ".png"}
                    className="traitImg"
                    alt={comp.name}
                    loading={counter > 16 ? "lazy" : ""}
                    height="105px"
                    width="91"
                  />
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
        {yourComp ? (
          <div
            className={
              timer === "done" ? "outerChampDivNoDisplay" : "outerChampDiv"
            }
          >
            <h1 className="champHeader">Champions with this trait</h1>
            <div className="championsDiv">
              {yourComp.champions.map(champ => {
                return (
                  <div>
                    <img
                      src={`${champ}.png`}
                      alt={champ}
                      className="champImg"
                      height="75px"
                      width="85"
                    />
                    <p className="champName">{champ}</p>
                  </div>
                )
              })}
            </div>
          </div>
        ) : (
          ""
        )}

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
