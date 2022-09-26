import React from 'react'

const Alert = (props) => {
    return (
        
            props.showAlert && <div class="alert alert-success" role="alert">
                {props.showAlert}
            </div>
        
    )
}

export default Alert
