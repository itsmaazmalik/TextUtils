import React, {useState} from 'react'


export default function TextForm(props) {

  const upperClick = () => {
    let upperCaseText = text.toUpperCase();
    setText(upperCaseText);
    props.showAlert("Converted to UpperCase!", "success");
  }

  const lowerClick = () => {
    let lowerCaseText = text.toLowerCase();
    setText(lowerCaseText);
    props.showAlert("Converted to LowerCase!", "success");
  }

  const clearBtn = () => {
    setText("");
    props.showAlert("Text Cleared!", "success");
  }

  const copyText = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard!", "success");
  }

  const removeExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces removed!", "success");
  }

  const handleOnChange = (event)=> {
    setText(event.target.value);
  }

  const [text, setText] = useState("Set Text Here");
  return (
    <>
      <div className="container" style={{color: props.mode === 'light'? 'black': 'white'}}>
        <div>
            <h2>{props.heading}</h2>
            <div className="mb-3">
              <textarea className="form-control" style={{backgroundColor: props.mode === 'light'? 'white': '#31373c', color: props.mode === 'light'? 'black': 'white'}} id="myBox" onChange={handleOnChange} value={text} rows="8"></textarea>
            </div>
            <button className="btn btn-primary m-1" onClick={upperClick}>UPPERCASE</button>
            <button className="btn btn-primary m-1" onClick={lowerClick}>lowercase</button>
            <button className="btn btn-primary m-1" onClick={copyText}>Copy Text</button>
            <button className="btn btn-primary m-1" onClick={removeExtraSpaces}>Remove Extra Spaces</button>
            <button className="btn btn-danger m-1" onClick={clearBtn}>Clear</button>
        </div>
        <div className="my-3">
          <h2>Summary</h2>
          <p>{text.trim() === '' ? 0 : text.match(/\S+/g).length} words and {text.replace(/\s+/g, '').length} characters</p>
          <h2>Preview</h2>
          <p>{text.length>0?text:'Enter something in the textbox above to preview it here'}</p>
        </div>
      </div>
    </>
  )
}
