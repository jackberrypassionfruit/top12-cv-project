import './App.css';
import React from 'react';
import Preview from './components/Preview';
import DataEntry from './components/DataEntry'
// https://github.com/parallax/jsPDF


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {navigator: "config"};

    this.navState = this.navState.bind(this);
  }

  // function for nav bar to change state and thus which inputs are rendered
  navState(e) {
    const nombre = e.target.parentElement.className;
    this.setState({
      navigator: nombre,
      data: {
        
      },
    });
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>CV Builder</h1>
        </header>

        <div className="body">
          <div className="editor">
            <ul className='nav'>
              <li className="config"> <a onClick={this.navState}>Config/Publish</a> </li>
              <li className="info"> <a onClick={this.navState}>Personal Information</a> </li>
              <li className="exp"> <a onClick={this.navState}>Experience</a> </li>
              <li className="edu"> <a onClick={this.navState}>Education</a> </li>
            </ul>

            <DataEntry section={this.state.navigator}/>
          </div>
          <Preview data={this.state.data}/>
        </div>

        <footer>Copyright &#64; 2022 jackberrypassionfruit</footer>
      </div>
    );
  }
}

export default App;