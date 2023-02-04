// client app.js
import React from "react";
import Black from "./Component/Colour/Black";
import Home from "./Component/Home";
import Green from "./Component/Colour/Green"
import Red from "./Component/Colour/Red"
import Blue from "./Component/Colour/Blue"
import Violet from "./Component/Colour/Violet"
import Pink from "./Component/Colour/Pink"
import Test1 from "./Component/QR2";
import NoPage from './Component/Page/NoPage/nopage'
import Succes from "./Component/Page/Succes";
import Login from "./Component/Page/Login";
import Id from "./Component/Page/List"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// 
// fretgerf
function App() {
  // var id="aa";
  // var lo="bb";

  return (
    <>
        
          <Router>
                    <Routes>
                      <Route path = '/' element = {<Home/>}/>
                      <Route path = '/black' element = {<Black/>}/>
                      <Route path="/red" element ={<Red/>}/>
                      <Route path="/green" element ={<Green/>}/>
                      <Route path="/blue" element ={<Blue/>}/>
                      <Route path="/violet" element ={<Violet/>}/>
                      <Route path="/pink" element ={<Pink/>}/>
                      <Route path="/test" element ={<Test1/>}/>
                      <Route path="/login/:Code" element={<Login/>}/>
                      <Route path="/Succes/:Code" element={<Succes/>}/>
                      <Route path="/id" element={<Id/>}/>

                       {/* <Route path= '*' element ={<NoPage/>}/>*/}
                       <Route path= 'no' element ={<NoPage/>}/> 

                    </Routes>
          </Router>
      
    </>
  )
}
export default App;