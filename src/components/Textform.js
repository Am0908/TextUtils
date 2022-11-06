// import { logDOM } from '@testing-library/react';
import React, { useState } from 'react'

export default function Textform(props) {

    const handleUpClick = () => {
        setText(text.toUpperCase())
        props.showAlert("Converted to upper case!", "success")
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const handleLowClick = () => {
        setText(text.toLowerCase())
        props.showAlert("Converted to lower case!", "success")
    }

    const handleClear = (event) => {
        setText("")
        props.showAlert("Text cleared!", "success")
    }
    const handleCopyText = ()=>{

        var myText = document.getElementById("myBox");
            myText.select();
            navigator.clipboard.writeText(myText.value);
            props.showAlert("Text copied to clipboard!", "success")
    };


    const [text, setText] = useState("Enter text here");
    // use the function settext(" some text ") to change the state.

    
    let mystyle = {
        border: "1px solid black"
    }


    return (
        <>
            <div className={`container text-${props.textMode}`}>
                <h3>{props.heading}</h3>
                <div className="mb-3 ">
                    <textarea className={`form-control bg-${props.mode} border-${props.textMode} text-${props.textMode}`} onChange={handleOnChange} value={text}  id="myBox" rows="10"></textarea>
                </div>

                <button className={`btn btn-${props.mode} mx-2 border-${props.textMode} `} style = {mystyle} onClick={handleUpClick}>Convert to uppercase</button>
                <button className={`btn btn-${props.mode} mx-2 border-${props.textMode} `} style = {mystyle} onClick={handleLowClick}>Convert to lowercase</button>
                <button className={`btn btn-${props.mode} mx-2 border-${props.textMode} `} style = {mystyle} onClick={handleClear}>Clear Text</button>
                <button className={`btn btn-${props.mode} mx-2 border-${props.textMode} `} style = {mystyle} onClick={handleCopyText}>Copy Text</button>

            </div>
            <div className={`container text-${props.textMode} my-4` } >
                <h4>Your text summary</h4>
                <p>{text.split(" ").length} words, {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} minutes read</p>
                <h4>Preview</h4>
                <p>{text.length>0?text:"Please enter something in the text box above to preview it here."}</p>
            </div>
        </>
    )
}
