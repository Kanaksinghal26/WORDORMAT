import React from 'react'

const ColorChange = () => {

    const colorBlue = () => {
        document.body.style.backgroundColor = "blue";
     }
  
     const colorGreen = () => {
        document.body.style.backgroundColor = "greeN";  // To show that color name can be case insensitive
     }

    return (
        
        <div>
            <button type="button" class="btn btn-primary mx-3" onClick={colorBlue}></button>
            <button type="button" class="btn btn-secondary mx-3" onClick={colorGreen}></button>
            <button type="button" class="btn btn-success mx-3"></button>
            <button type="button" class="btn btn-danger mx-3"></button>
        </div>
    )
}

export default ColorChange
