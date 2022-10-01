import React, { useState } from 'react'
import Header from "./Components/Header/Header";
import Textform from "./Components/Textform/Textform";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import Alert from './Components/Alert/Alert';
// import ColorChange from './Components/ColorChange/ColorChange';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';


function App() {

   const [mode, setMode] = useState("light")

   const [showAlert, setShowAlert] = useState("")

   const togglemode = () => {
      mode === "light" ? setMode("dark") : setMode("light")
      document.body.style.backgroundColor === "white" ? document.body.style.backgroundColor = "black" : document.body.style.backgroundColor = "white"
      setShowAlert("success")
   }

   

   return (
      <>

         <Alert showAlert={showAlert} />
            <BrowserRouter>
         <Header />
               <Routes>
                  <Route path="/" element={<Textform mode={mode} togglemode={togglemode} />} />
                  <Route path="/about" element={ <About />}/>
               </Routes>
         <Footer /> 
            </BrowserRouter>
      </> 
   );
}

export default App;


















/* <About2 /> */
// import { Alert } from 'bootstrap';
// import About2 from "./Components/About/About2";