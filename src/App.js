import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./context/notes/NoteState";
import Alert from "./components/Alert";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { useState } from "react";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";

function App() {
  const [name, setName] = useState("")

  const [alert, setAlert] = useState({color: "", message: "", subMessage: "" })
  const showAlert = (pcolor, pmessage, psubMessage)=>{
    setAlert({color: pcolor, message: pmessage, subMessage: psubMessage })
    setTimeout(() => {
      setAlert({color: "", message: "", subMessage: "" });
    }, 3000);
  }


  //npm run bothhhhhh add in scripts eading in package.json
  // "both": "concurrently \"npm run start\" \"nodemon backend/index.js\""

  return (
    // <div className='w-full h-screen bg-no-repeat bg-cover bg-fixed ' style={{backgroundImage: "url(https://img.freepik.com/free-photo/close-up-white-smoky-abstract_53876-148124.jpg?w=740&t=st=1699525908~exp=1699526508~hmac=62fd74f7ba670391b625f317c9fdc58cadc80c8a415962b9ac693d97aed927ad)"}}>
    <NoteState>
      <BrowserRouter basename="/MyNotebook">
        <Navbar name={name} setName={setName}/>
        <LandingPage/>
        <Alert alert={alert}/>
        <Home setName={setName} showAlert={showAlert}/>
        <Routes>
          <Route exact path="/about"  element={<About />}/>    
          <Route exact path="/login"  element={<Login setName={setName} showAlert={showAlert}/>}/>    
          <Route exact path="/signup"  element={<Signup showAlert={showAlert}/>}/>  

        </Routes>
        <Footer/>
      </BrowserRouter>
      </NoteState>
   
  );
}

export default App;
