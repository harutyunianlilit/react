import React from "react";
import memeData from "./memeData";


export default function Meme () {

     //const [memeImage, setMemeImage] = React.useState(""); 
    

    const [meme, setMeme] = React.useState ({

        topText: "",
        bottomText: '',
        randomImage: 'https://i.imgflip.com/30b1gx.jpg'
    })

    const [allMemeImages, setAllMemeImages] = React.useState (memeData)

    function GetMemeImage () {

        const memesArrey = allMemeImages.data.memes;
        const randomNum = Math.floor(Math.random() * memesArrey.length)
        const url = "memesArrey[randomNum].url"
        setMeme (prevMeme => ({
         ...prevMeme,
         randomImage: url

        }))
    }
    function hundleChange (event){
 
        const {name, value} =event.target 
        setMeme =(prevMeme => ({...prevMeme,
        [name]: value}))
    }
return (
  <main>
    <div className="form">
   <input type = 'text' className="form--input" name = 'topText' value = {meme.topText}/> 
   <input type = 'text'className="form--input" name = 'bottomText' value = {meme.bottomText}/> 
   <button className="form--button" onClick = {GetMemeImage}>Get a new meme image</button>
   <img src = {meme.randomImage} className ='photo'/>
</div>
</main>

)



}