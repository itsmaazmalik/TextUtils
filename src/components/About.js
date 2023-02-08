import React from 'react'

export default function About(props) {

  return (
    <div className={`container my-3`} style={{color: props.mode === 'light'? 'black': 'white'}}>
        <h1>About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" style={{backgroundColor: props.mode === 'light'? 'white': '#31373c', color: props.mode === 'light'? 'black': 'white'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Created by<strong>&nbsp; MaAz Malick</strong>
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={{backgroundColor: props.mode === 'light'? 'white': '#042743', color: props.mode === 'light'? 'black': 'white'}}>
                TextUtils is a ReactJs website built primarily to do various operations on regular typed text. You can safely use WordPad or NotePad for text drafting, and saving, but TextUtils offers much more than simple text drafting and formatting. TextUtils can convert your text to any case in just one simple click of a button.
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}
