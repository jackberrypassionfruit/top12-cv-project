import './App.css';
import React, { useState, useRef } from 'react';
import Preview from './components/Preview';
import DataEntry from './components/DataEntry';

import { useReactToPrint } from 'react-to-print';

function App() {

  const examples = {
      firstName: 'Jack',
      lastName: 'Pashayan',
      title: 'Teacher',
      address: '82 Ossipee St',
      pnum: '123-456-7890',
      email: 'usGov@google.com',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut faucibus semper libero ut ornare. Ut id mi viverra leo tristique blandit sed a sem. Fusce auctor velit non iaculis accumsan. Curabitur nec purus vel lorem aliquet tempus at a nulla. Donec eleifend ultricies nulla, at gravida ipsum imperdiet at. In hac habitasse platea dictumst. Morbi feugiat tristique porta. Duis maximus nisl vitae ligula tincidunt, non varius sapien aliquam. Morbi dictum vulputate consequat.',
      position: 'Teacher',
      company: 'Pasadena Tech Pre-School',
      city: 'Jupiter, FL',
      from: '08/23/2022',
      to: '09/08/2022',
      university: 'Oxford University',
      uniCity: 'Cambridge, GBR',
      degree: 'Quantum Physics',
      uniFrom: '06/27/2012',
      uniTo: '11/01/2018',
  }

  const [navigator, setNavigator] = useState("config");
  const [data, setData] = useState({});

  // Prop Functions

  function navState(e) {
    setNavigator(e.target.className)
  }

  function handleChange(e) {
    setData(data => ({
      ...data,
      [e.target.id] : e.target.value
    }));
  }

  function handlePhoto(e) {
    const photoObject = document.getElementById('photo').files[0];
    const photoDestination = document.getElementsByClassName('right')[0].getElementsByTagName('img')[0];
    const photoURL = URL.createObjectURL(photoObject);
    photoDestination.src = photoURL;
  }

  // React-to-Print
  const componentRef = useRef();
  const handlePrint = useReactToPrint({content: () => componentRef.current });

  const showExampleCV = () => {
    setData(examples);
  }

  const resetCV = () => {
    setData({});
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
          <DataEntry 
            handleChange={handleChange} 
            handlePhoto={handlePhoto} 
            handlePrint={handlePrint} 
            showExampleCV={showExampleCV}
            resetCV={resetCV}
            section={navigator} 
            data={data} />
        </div>
        <Preview data={data} ref={componentRef} />
      </div>

      <footer>Copyright &#64; 2022 jackberrypassionfruit</footer>
    </div>
  );
}

export default App;