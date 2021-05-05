import { Component } from "react"
import './Popup.css'

const Popup =(props)=>{
    return(
      <div className = "popup--back">
          <div className = "popup--content">
              
              <div className = "popup--close" onClick={props.closePopup}>x</div>
              <h1>PopUp</h1>
          </div>

      </div>
    )
}
export default Popup;