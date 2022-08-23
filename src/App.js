import './App.css';
import React from 'react';
import Preview from './components/Preview';
import DataEntry from './components/DataEntry';

// import ReactToPrint from 'react-to-print';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      navigator: "config",
      data: {},
    };

    this.examples = {
      info: {
        firstName: '',
        lastName: '',
        title: '',
        address: '',
        phoneNum: '',
        email: '',
        description: '',
      },
      experience: {
        position: '',
        company: '',
        city: '',
        from: '',
        to: '',
      },
      education: {
        university: '',
        city: '',
        degree: '',
        from: '',
        to: '',
      },

    }

    this.navState = this.navState.bind(this);
    // this.handleChange = this.handleChange.bind(this);
  }

  // function for nav bar to change state and thus which inputs are rendered
  // navState(e) {
  //   const nombre = e.target.parentElement.className;
  //   const dataEntries = document.querySelectorAll('.inputs');
  //   for (const dataEntry of dataEntries) {
  //     dataEntry.setAttribute('hidden', true)
  //   }
  //   document.querySelector('.dataEntry').querySelector(`.${nombre}`).removeAttribute('hidden');
  // }

  navState(e) {
    this.setState({navigator: e.target.className})
  }

  // handleChange(e) {
  //   const inputField = e.target;
  //   this.setState((state, props) => {
  //     state.data.info[inputField.id] = inputField.value;
  //     return state;
  //   })
  // }

  handleChange(e) {
    const data = this.state.data;
    data[e.target.id] = e.target.value;
    console.log(e.target.value);
    this.setState(data);
  }

  render() {
    // let componentRef = useRef();

    return (
      <div className="App">
        <header>
          <h1>CV Builder</h1>
        </header>

        <div className="body">
          <div className="editor">
            <ul className='nav'>
              <li className="config" onClick={this.navState}> Config/Publish </li>
              <li className="info" onClick={this.navState}> Personal Information </li>
              <li className="exp" onClick={this.navState}> Experience </li>
              <li className="edu" onClick={this.navState}> Education </li>
            </ul>

            <DataEntry section={this.state.navigator}/>
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
          <Preview handleChange={this.handleChange} data={this.state.data}/>
        </div>

        <footer>Copyright &#64; 2022 jackberrypassionfruit</footer>
      </div>
    );
  }
}

export default App;