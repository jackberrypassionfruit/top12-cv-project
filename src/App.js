import './App.css';
import React, { useEffect, useState } from 'react';
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
    const newData = data;
    newData[e.target.id] = e.target.value;
    setData(newData);
  }

  useEffect(() => {

  }, []
  );

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
        </div>
        <Preview data={data}/>
      </div>

      <footer>Copyright &#64; 2022 jackberrypassionfruit</footer>
    </div>
  );
}

export default App;