import "./style.css"
import memeDb from "../memesData";
import React, {useState} from "react";
export default function Content(){
    const [meme, setMemeData] = useState({
        topText:"",
        bottomText:"",
        randomImage:"",
        })

    const [allMemeData] = useState(memeDb)

    function getRandom(){
        const memeArray = allMemeData.data.memes
        const randomNumber = Math.floor(Math.random() * memeArray.length)
        const lut = memeArray[randomNumber].url
        setMemeData(prevState => {
            return {
                ...prevState,
                randomImage: lut
        }})
    }
    return(
        <div className="content-container">
            <span className="input-container">
                <input
                    type="text" 
                    placeholder="Prompt one"
                >
                </input>
                <input 
                    type="text" 
                    placeholder="Prompt two"
                >   
                </input>
            </span>
            <button
                className="generate-button"
                onClick={getRandom}
            >Get a new meme image 🖼️</button>
            <div className="meme--frame">
                <img className="meme--img" src={meme.randomImage} alt='Click generate to get your meme'></img>
            </div>
            <a className="download--btn" download href={meme.randomImage} alt="">Download</a>
        </div>
    )
}
