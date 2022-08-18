import React from 'react';

function Preview(props) {
  console.log(props);

  return (
    <div className="dataEntry">
      <h2>Header Name</h2>
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
          <img src="../../assets/empty_avatar.cedf234c.png" alt="Someone's head" />
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