import React from 'react';
import facePic from '../assets/empty_avatar.cedf234c.png'

function Preview(props) {
  return (
    <div className="preview">
      <div className='fullName'>
        <h2>{ props.data.firstname }-</h2>
        <h2>{ props.data.lastname }</h2>
      </div>
      <div className="dataFlex">
        <div className="left">
          <div className="About Me">
            <h4>About me</h4>
            <h6>{ props.data.title || "Title:" }</h6>
            <p>{ props.data.description || "Bio: "}</p>
            <hr/>
          </div>
          <div className="experience">
            <h4>Experience</h4>
            <h6>{ props.data.position || "Position: "}</h6>
            <h6>{ props.data.company || "Address: "}</h6>
            <h6>{ props.data.city || "City: "}</h6>
            <h6>From { props.data.from || '"Start"'} End { props.data.to || '"Finish"'}</h6>
            <hr />
          </div>
          <div className="education">
            <h4>Education</h4>
            <h6>{ props.data.university || "University: "}</h6>
            <h6>{ props.data.uniCity || "City: "}</h6>
            <h6>{ props.data.degree || "Degree: "}</h6>
            <h6>From { props.data.uniFrom || '"Start"'} To { props.data.uniTo || '"Finish"'}</h6>
            <hr />
          </div>
        </div>
        <div className="right">
          <img src={ facePic } alt="Someone's head" id='facePic' />
          <h6>Personal Details</h6>
          <hr />
          <h6>{ props.data.address || "Address: " }</h6>
          <h6>{ props.data.pnum || "Phone Number: " }</h6>
          <h6>{ props.data.email || "Email: "}</h6>
        </div>
      </div>
    </div>
  )
}

export default Preview