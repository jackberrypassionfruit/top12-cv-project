import React from 'react';

function DataEntry(props) {
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
            <button onClick={props.handlePrint}>Generate PDF</button>
            <button>Show Example CV</button>
            <button>Reset Current</button>
          </div>
        </div>
      </div>
    )
  }

  function info() {
    return (
      <div className='form'>
        <h3>Personal Information</h3>
        <input 
          type="text" 
          placeholder="First Name" 
          id="firstname" 
          onChange={props.handleChange}
          value={props.data.firstname || ""}
          />
        <input 
          type="text" 
          placeholder="Last Name"
          id="lastname" 
          onChange={props.handleChange} 
          value={props.data.lastname || ""}
          />
        <input 
          type="text" 
          placeholder="Title" 
          id='title'
          onChange={props.handleChange} 
          value={props.data.title || ""}
          />
        <label htmlFor="photo">Photo</label>
        <form>
          <input
            type="file"
            id='photo'
            />
          <button 
            type="button" 
            onClick={props.handlePhoto}
          >
          Submit
          </button>
        </form>
        <input 
          type="text" 
          placeholder="Address" 
          id="address"
          onChange={props.handleChange} 
          value={props.data.address || ""}
          />
        <input 
          type="text" 
          placeholder="Phone Number" 
          id="pnum"
          onChange={props.handleChange} 
          value={props.data.pnum || ""}
          />
        <input 
          type="text" 
          placeholder="Email" 
          id="email"
          onChange={props.handleChange} 
          value={props.data.email || ""}
          />
        <textarea 
          placeholder="Description"  
          id="description" 
          onChange={props.handleChange} 
          value={props.data.description || ""}
          />
      </div>
    )
  }

  function exp() {
    return(
      <div className='form'>
        <h3>Experience</h3>
        <input 
          type="text" 
          placeholder="Position" 
          id="position"
          onChange={props.handleChange} 
          value={props.data.position || ""}
          />
        <input 
          type="text" 
          placeholder="Company" 
          id="company"
          onChange={props.handleChange} 
          value={props.data.company || ""}
          />
        <input 
          type="text" 
          placeholder="City" 
          id="city"
          onChange={props.handleChange} 
          value={props.data.city || ""}
          />
        <input 
          type="date" 
          placeholder="From" 
          id="from"
          onChange={props.handleChange} 
          value={props.data.from || ""}
          />
        <input 
          type="date" 
          placeholder="To" 
          id="to"
          onChange={props.handleChange} 
          value={props.data.to || ""}
          />

      </div>
    )
  }

  function edu() {
    return (
      <div className='form'>
        <h3>Education</h3>
        <input 
          type="text" 
          placeholder="University" 
          id="university"
          onChange={props.handleChange} 
          value={props.data.university || ""}
          />
        <input 
          type="text" 
          placeholder="City" 
          id="uniCity"
          onChange={props.handleChange} 
          value={props.data.uniCity || ""}
          />
        <input 
          type="text" 
          placeholder="Degree" 
          id="degree"
          onChange={props.handleChange} 
          value={props.data.degree || ""}
          />
        <input 
          type="date" 
          placeholder="From" 
          id="uniFrom"
          onChange={props.handleChange} 
          value={props.data.uniFrom || ""}
          />
        <input 
          type="date" 
          placeholder="To" 
          id="uniTo"
          onChange={props.handleChange} 
          value={props.data.uniTo || ""}
          />

      </div>
    )
  }

  function error() {
    return <div>Something went wrong</div>
  }

  switch (props.section) {
    case "config": return config();
    case "info": return info();
    case "exp": return exp();
    case "edu": return edu();
    default: return error();
  }
}

export default DataEntry
