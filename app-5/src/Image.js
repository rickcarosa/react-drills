import React from 'react';

function Image ( props ){
    return(
        <div className = "App">
            <img src = {props.myImage} alt = "" />
        </div>
    )
}

export default Image;