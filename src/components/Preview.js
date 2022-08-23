import React from 'react';
import facePic from '../assets/empty_avatar.cedf234c.png'

function Preview(props) {
  // console.log(props);

  return (
    <div className="preview">
      <h2>{props.data.firstName}</h2>
      <div className="dataFlex">
        <div className="left">
          <div className="About Me">
            <h5>About me</h5>
            <hr/>
          </div>
          <div className="experience">
            <h5>Experience</h5>
            <hr />
          </div>
          <div className="education">
            <h5>Education</h5>
            <hr />
          </div>
        </div>
        <div className="right">
          <img src={facePic} alt="Someone's head" id='facePic' />
          <h5>Personal Details</h5>
          <hr />
          <h6>Address</h6>
          <h6>Phone #</h6>
          <h6>Email</h6>
        </div>
      </div>
    </div>
  )
}

export default Preview