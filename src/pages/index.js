import React, { useState, useEffect } from "react"
import "../styles/homepage.css"
import allComps from "../data/compsArray"
import pointerImage from "../images/tftPenguinSmall.webp"
import pointerImagePng from "../images/tftPenguinSmall.png"
import { Helmet } from "react-helmet"
import hexsound from "../sounds/hexsound.mp3"
import gearsound from "../sounds/gearsound.mp3"
export default function Home() {
  const divArray = allComps.concat(allComps)
  const divArray2 = divArray.concat(allComps)
  const [spinLeft, setSpinLeft] = useState("0px")
  const [yourComp, setYourComp] = useState("")
  const [btnClass, setBtnClass] = useState("spinBtn")
  const [btnContainerClass, setBtnContainerClass] = useState("btnContainer")
  const [timer, setTimer] = useState("done")
  const [webP, setWebp] = useState("webp")
  const [gearClass, setGearClass] = useState("gear")
  // const [hexClass, setHexClass] = useState("hex-background-noshow")
  // const [hexSound, setHexSound] = useState({ hexSoundObject: {} })
  // const [gearSound, setGearSound] = useState({ gearSoundObject: {} })
  const [currentId, setCurrentId] = useState(0)
  const [buttonClickable, setButtonClickable] = useState(false)

  // let currentVolume = 1
  // let sound

  // useEffect(() => {
  //   setHexSound({ hexSoundObject: new Audio(hexsound) })
  //   setGearSound({ gearSoundObject: new Audio(gearsound) })
  // }, [])

  // useEffect(() => {
  //   if (hexSound.hexSoundObject && gearSound.gearSoundObject) {
  //     setButtonClickable(false)
  //   }
  // }, [hexSound, gearSound])

  useEffect(() => {
    if (yourComp === divArray[currentId]) {
      myfunction()
    } else {
      setYourComp(divArray2[currentId])
    }
  }, [currentId])

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
    setButtonClickable(true)
    let myRandomNumber = Math.random() * 27
    let adjustAmount = 0
    let positionAdd = 700
    let multiplier = 100
    let first = 200
    myRandomNumber = Math.floor(myRandomNumber)

    if (window.innerWidth < 1920) {
      if (window.innerWidth <= 1440) {
        positionAdd = 500
      }
      if (window.innerWidth <= 1024) {
        positionAdd = 300
      }
      if (window.innerWidth <= 768) {
        positionAdd = 200
      }
      if (window.innerWidth <= 425) {
        positionAdd = 150
        multiplier = 75
        first = 75
      }
      if (window.innerWidth <= 375) {
        positionAdd = 150
        multiplier = 75
        first = 75
      }
    }

    let newId

    if (currentId <= 28) {
      adjustAmount =
        "-" + ((myRandomNumber + 29) * multiplier - positionAdd) + "px"
      newId = myRandomNumber + 29
      setCurrentId(newId)
    } else if (currentId > 28 && currentId <= 53) {
      adjustAmount =
        "-" + ((myRandomNumber + 56) * multiplier - positionAdd) + "px"
      newId = myRandomNumber + 56

      setCurrentId(newId)
    } else {
      newId = myRandomNumber

      switch (positionAdd) {
        case 700:
          if (newId < 7) {
            switch (newId) {
              case 0:
                adjustAmount = myRandomNumber * multiplier + positionAdd + "px"
                break
              case 1:
                adjustAmount =
                  myRandomNumber * multiplier + positionAdd - 200 + "px"
                break
              case 2:
                adjustAmount =
                  myRandomNumber * multiplier + positionAdd - 400 + "px"
                break
              case 3:
                adjustAmount =
                  myRandomNumber * multiplier + positionAdd - 600 + "px"
                break
              case 4:
                adjustAmount =
                  myRandomNumber * multiplier + positionAdd - 800 + "px"
                break
              case 5:
                adjustAmount =
                  myRandomNumber * multiplier + positionAdd - 1000 + "px"
                break
              case 6:
                adjustAmount =
                  myRandomNumber * multiplier + positionAdd - 1200 + "px"
                break
            }
          } else {
            adjustAmount =
              "-" + (myRandomNumber * multiplier - positionAdd) + "px"
          }
          break

        case 500:
          if (newId < 5) {
            switch (newId) {
              case 0:
                adjustAmount = myRandomNumber * multiplier + positionAdd + "px"
                break
              case 1:
                adjustAmount =
                  myRandomNumber * multiplier + positionAdd - 200 + "px"
                break
              case 2:
                adjustAmount =
                  myRandomNumber * multiplier + positionAdd - 400 + "px"
                break
              case 3:
                adjustAmount =
                  myRandomNumber * multiplier + positionAdd - 600 + "px"
                break
              case 4:
                adjustAmount =
                  myRandomNumber * multiplier + positionAdd - 800 + "px"
                break
            }
          } else {
            adjustAmount =
              "-" + (myRandomNumber * multiplier - positionAdd) + "px"
          }
          break

        case 300:
          if (newId < 2) {
            switch (newId) {
              case 0:
                adjustAmount = myRandomNumber * multiplier + positionAdd + "px"
                break
              case 1:
                adjustAmount =
                  myRandomNumber * multiplier + positionAdd - first + "px"
                break
            }
          } else {
            adjustAmount =
              "-" + (myRandomNumber * multiplier - positionAdd) + "px"
          }
          break

        case 200:
          if (newId < 2) {
            switch (newId) {
              case 0:
                adjustAmount = myRandomNumber * multiplier + positionAdd + "px"
                break
              case 1:
                adjustAmount =
                  myRandomNumber * multiplier + positionAdd - first + "px"
                break
            }
          } else {
            adjustAmount =
              "-" + (myRandomNumber * multiplier - positionAdd) + "px"
          }
          break

        case 150:
          if (newId < 2) {
            switch (newId) {
              case 0:
                adjustAmount = myRandomNumber * multiplier + positionAdd + "px"
                break
              case 1:
                adjustAmount =
                  myRandomNumber * multiplier + positionAdd - first + "px"
                break
            }
          } else {
            adjustAmount =
              "-" + (myRandomNumber * multiplier - positionAdd) + "px"
          }
          break
      }

      setCurrentId(newId)
    }

    setSpinLeft(adjustAmount)

    setBtnClass("spinBtnFlip")
    setBtnContainerClass("btnContainerFlip")
    setGearClass("spinGear")

    setTimeout(function () {
      setBtnClass("spinBtn")
      setBtnContainerClass("btnContainer")
      setTimer("notdone")
      setGearClass("gear")
    }, 1500)

    setTimer("done")

    setButtonClickable(false)
  }

  return (
    <main className={`${webP} Page`}>
      <Helmet>
        <title>
          TFTRandom Random Trait/Comp Generator for TFT Reckoning Patch 11.16 -
        </title>
        <meta
          name="description"
          content="TFTRandom is a random tft comp generator that chooses a random tft trait after pressing the spin button to make the tft randomizer spin through all traits"
        />
      </Helmet>
      <div className="content">
        <header className="mainHeading">
          <h1>TFTRandom</h1>
          <h2>A tft randomizer made by Twiggymocha</h2>
          <h3>Updated for TFT Version 7</h3>
          <h3>HOW IT WORKS</h3>
          <p>
            You press the "spin" button. A random trait gets selected, this is
            indicated below the spinner and also indicated by the penguins sword
            after the spin is complete. Your tft comp has to include this trait.
            The champions included in this comp are displayed once the spin is
            complete.
          </p>
          <p>
            I made some visual updates, I will look into making it look better
            when I find the time. If the new champions and traits do not show up
            refresh the page and it should be there.
          </p>
        </header>

        <div className="spinner">
          {/* <div className={`${gearClass}`}>
            <img
              style={{ transform: "rotateY(180deg)", maxWidth: "100%" }}
              src="TFT_dragon2.png"
              alt="gear"
            />
          </div>

          <img src="TFT_dragon2.png" alt="gear" className={`${gearClass}2`} /> */}

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
            <div className="barsDiv"></div>
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
                      loading="eager"
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
            disabled={buttonClickable}
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
