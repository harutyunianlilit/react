import React from "react";
import memeData from "./memeData";


export default function Meme () {

     //const [memeImage, setMemeImage] = React.useState(""); 
    function GetMemeImage () {

        const memesArrey = memeData.data.memes;
        const randomNum = Math.floor(Math.random() * memesArrey.length)
        setMemeImage (memesArrey[randomNum].url)
    }

    const [meme, setMeme] = React.useState ({

        topText: "",
        bottomText: '',
        randomImage: ''
    })

    const [oldMemeImages, setOldMemeImages] = React.useState (memeData)
return (
  <main>
    <div className="form">
   <input type = 'text' className="form--input"/> 
   <input type = 'text'className="form--input"/> 
   <button className="form--button" onClick = {GetMemeImage}>Get a new meme image</button>
   <img src = {memeImage} className ='photo'/>
</div>
</main>

)



}