import './App.css';
import Preview from './components/Preview';
import { jsPDF } from 'jspdf';
// https://github.com/parallax/jsPDF


function App() {
  return (
    <div className="App">
      <header>
        <p>CV Builder</p>
      </header>

      <div className="editor"></div>
      <Preview/>
    </div>
  );
}

export default App;
