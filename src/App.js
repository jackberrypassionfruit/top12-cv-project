import './App.css';
import React from 'react';
import Preview from './components/Preview';
import DataEntry from './components/DataEntry'
import { jsPDF } from 'jspdf';
// https://github.com/parallax/jsPDF


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {navigator: "instruct"};

    this.navState = this.navState.bind(this);
  }

  // function for nav bar to change state and thus which inputs are rendered
  navState(e) {
    const nombre = e.target.parentElement.className;
    this.setState({navigator: nombre});
  }

  render() {
    return (
      <div className="App">
        <header>
          <p>CV Builder</p>
        </header>

        <div className="body">
          <div className="editor">
            <div>I'm back bitches!</div>
            <ul>
              <li className="instruct"> <a onClick={this.navState}>Instructions</a> </li>
              <li className="info"> <a onClick={this.navState}>Personal Information</a> </li>
              <li className="exp"> <a onClick={this.navState}>Experience</a> </li>
              <li className="edu"> <a onClick={this.navState}>Education</a> </li>
            </ul>

            <DataEntry section={this.state.navigator}/>
          </div>
          <Preview/>
        </div>

        <footer>Copyright &#64; 2022 jackberrypassionfruit</footer>
      </div>
    );
  }
}

export default App;