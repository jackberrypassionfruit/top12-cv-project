import React from 'react';

class DataEntry extends React.Component {

  constructor(props) {
    super(props);
  }

  config(props) {
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
        </div>
      </div>
    )
  }

  info() {
    return (
      <form>
        <h3>Personal Information</h3>
        <input type="text" placeholder="First Name" id="firstName" onChange={this.props.handleChange} />
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

  exp() {
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

  edu() {
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

  error() {
    return <div>Something went wrong</div>
  }

  render() {
    console.log(this.props);
    switch (this.props.section) {
      case "config": return this.config();
      case "info": return this.info();
      case "exp": return this.exp();
      case "edu": return this.edu();
      default: return this.error();
    }
  }
}

export default DataEntry
