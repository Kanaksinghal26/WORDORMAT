import React from 'react'

const ColorChange = (props) => {
    return (
        <div>
            <button type="button" class="btn btn-primary mx-3" onClick={props.colorBlue}></button>
            <button type="button" class="btn btn-secondary mx-3" onClick={props.colorGreen}></button>
            <button type="button" class="btn btn-success mx-3"></button>
            <button type="button" class="btn btn-danger mx-3"></button>
        </div>
    )
}

export default ColorChange
