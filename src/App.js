import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import { useState } from 'react';
import Alert from './components/Alert';
import React from 'react';
// import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {

  const [mode, setmode] = useState('light')
  const [textMode, settextMode] = useState('dark')
  const [alert, setalert] = useState(null);

  const toggleMode = ()=>{
    if(mode==='light')
    {
      setmode("dark");
      settextMode("light");
      document.body.style.backgroundColor = "#151515";
      showAlert("Dark mode has been enabled.", "success");
      // document.title = 'TextUtils - Dark mode';
    }
    else
    {
      setmode("light");
      settextMode("dark");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled.", "success");
      // document.title = 'TextUtils - Light mode';
    }

  }

  const showAlert = (message, type)=>{
      setalert({
        msg: message,
        type: type
      })
      setTimeout(()=>{
        setalert(null);
      },2500)
  }

  return (
    <>
    {/* <Router> */}
      {/* navbar component */}
      {/* <Navbar title="TextUtils" about="About Textutils"/> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} textMode={textMode}/>
      <Alert alert= {alert}/>
      <div className="container my-3">
      {/* <Routes>
        <Route exact path='/about' element={<About textMode={textMode} mode={mode}/>}/>
        <Route exact path='/' element={<Textform showAlert = {showAlert} heading="Enter the text to analyze below" mode={mode} textMode={textMode}/>}/>
      </Routes> */}
      <Textform showAlert = {showAlert} heading="Enter the text to analyze below" mode={mode} textMode={textMode}/>
      </div>
    {/* </Router> */}
    </>
  );
}

export default App;
