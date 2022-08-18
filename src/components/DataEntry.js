import React from 'react';

function config() {
  return (
    <div className="form">
      <h3>Instructions</h3>
      <br />
      <p>Welcome to my CV/Resume builder! Your job is to fill in the things that you want people to know about you, and my job is to make it look great. Sound like a plan?</p>

      <br /><br />

      <p>You have 3 tabs to share some <strong>personal info</strong> about yourself, talk about your <strong>work expereince</strong>, and then <strong>where you went to school</strong></p>

      <br /><br />

      <div className="controls">
        <div className="publish">
          <h3>Publish</h3>
          <button>Generate PDF</button>
          <button>Show Example CV</button>
          <button>Reset Current</button>
        </div>
        <div className="config"></div>
      </div>
    </div>
  )
}

function info() {
  return (
    <form>
      <h3>Personal Information</h3>
      <input type="text" placeholder="First Name" />
      <input type="text" placeholder="Last Name" />
      <input type="text" placeholder="Title" />
      <label htmlFor="photo">Photo</label>
      <input type="file" id='photo' />
      <input type="text" placeholder="Address" />
      <input type="text" placeholder="Phone Number" />
      <input type="text" placeholder="Email" />
      <textarea placeholder="Description" />
    </form>
  )
}

function exp() {
  return(
    <form>
      <h3>Experience</h3>
      <input type="text" placeholder="Position" />
      <input type="text" placeholder="Company" />
      <input type="text" placeholder="City" />
      <input type="date" placeholder="From" />
      <input type="date" placeholder="To" />

    </form>
  )
}

function edu() {
  return (
    <form>
      <h3>Education</h3>
      <input type="text" placeholder="University" />
      <input type="text" placeholder="City" />
      <input type="text" placeholder="Degree" />
      <input type="date" placeholder="From" />
      <input type="date" placeholder="To" />

    </form>
  )
}

function error() {
  return <div>Something went wrong</div>
}

function DataEntry(props) {
  switch (props.section) {
    case "config": return config(); break;
    case "info": return info(); break;
    case "exp": return exp(); break;
    case "edu": return edu(); break;
    default: return error();
  }
}

export default DataEntry
