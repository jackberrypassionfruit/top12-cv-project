import './App.css';
import React, { useState, useEffect} from 'react';
import Preview from './components/Preview';
import DataEntry from './components/DataEntry';

// import ReactToPrint from 'react-to-print';

function App() {

  const [navigator, setNavigator] = useState("config");
  const [data, setData] = useState({});

  function navState(e) {
    setNavigator(e.target.className)
  }

  function handleChange(e) {
    const prevData = data;
    data[e.target.id] = e.target.value;
    setData(prevData);
  }

  return (
    <div className="App">
      <header>
        <h1>CV Builder</h1>
      </header>

      <div className="body">
        <div className="editor">
          <ul className='nav'>
            <li className="config" onClick={navState}> Config/Publish </li>
            <li className="info" onClick={navState}> Personal Information </li>
            <li className="exp" onClick={navState}> Experience </li>
            <li className="edu" onClick={navState}> Education </li>
          </ul>

          <DataEntry handleChange={handleChange} section={navigator}/>
          {/* <div className="dataEntry">
            <div className="inputs config">
              <h3>Instructions</h3>
              <br />
              <p>Welcome to my CV/Resume builder! Your job is to fill in the things that you want people to know about you, and my job is to make it look great. Sound like a plan?</p>
              <br /><br />
              <p>You have 3 tabs to share some <strong>personal info</strong> about yourself, talk about your <strong>work expereince</strong>, and then <strong>where you went to school</strong></p>
              <br /><br />
              <div className="publish">
                <h3>Publish</h3>
                <button>Generate PDF</button>
                <button>Show Example CV</button>
                <button>Reset Current</button>
              </div>
            </div>
            <div className="inputs info" hidden>
              <h3>Personal Information</h3>
              <input type="text" placeholder="First Name" id='firstName' onChange={this.handleChange}/>
              <input type="text" placeholder="Last Name" />
              <label htmlFor="photo">Photo</label>
              <input type="file" id='photo' />
              <input type="text" placeholder="Address" />
              <input type="text" placeholder="Phone Number" />
              <input type="text" placeholder="Email" />
              <textarea placeholder="Description" />
            </div>
            <div className="inputs exp" hidden>
              <h3>Experience</h3>
              <input type="text" placeholder="Position" />
              <input type="text" placeholder="Company" />
              <input type="text" placeholder="City" />
              <input type="date" placeholder="From" />
              <input type="date" placeholder="To" />
            </div>
            <div className="inputs edu" hidden>
              <h3>Education</h3>
              <input type="text" placeholder="University" />
              <input type="text" placeholder="City" />
              <input type="text" placeholder="Degree" />
              <input type="date" placeholder="From" />
              <input type="date" placeholder="To" />
            </div>
          </div> */}
        </div>
        <Preview data={data}/>
      </div>

      <footer>Copyright &#64; 2022 jackberrypassionfruit</footer>
    </div>
  );
}

export default App;