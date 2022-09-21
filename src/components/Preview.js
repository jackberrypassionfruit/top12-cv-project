import React from 'react';
import facePic from '../assets/empty_avatar.cedf234c.png'

export const Preview = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="preview">
      <div className='fullName'>
        <h2>{ props.data.firstName }-</h2>
        <h2>{ props.data.lastName }</h2>
      </div>
      <div className="dataFlex">
        <div className="left">
          <div className="About Me">
            <h3>About me</h3>
            <h5>{ props.data.title || "Title:" }</h5>
            <p>{ props.data.description || "Bio: "}</p>
            <hr/>
          </div>
          <div className="experience">
            <h3>Experience</h3>
            <h5>{ props.data.position || "Position: "}</h5>
            <h5>{ props.data.company || "Address: "}</h5>
            <h5>{ props.data.city || "City: "}</h5>
            <h5>From { props.data.from || '"Start"'} End { props.data.to || '"Finish"'}</h5>
            <hr />
          </div>
          <div className="education">
            <h3>Education</h3>
            <h5>{ props.data.university || "University: "}</h5>
            <h5>{ props.data.uniCity || "City: "}</h5>
            <h5>{ props.data.degree || "Degree: "}</h5>
            <h5>From { props.data.uniFrom || '"Start"'} To { props.data.uniTo || '"Finish"'}</h5>
            <hr />
          </div>
        </div>
        <div className="right">
          <img src={ facePic } alt="Someone's head" id='facePic' />
          <h5>Personal Details</h5>
          <hr />
          <h5>{ props.data.address || "Address: " }</h5>
          <h5>{ props.data.pnum || "Phone Number: " }</h5>
          <h5>{ props.data.email || "Email: "}</h5>
        </div>
      </div>
    </div>
  )
})

export default Preview