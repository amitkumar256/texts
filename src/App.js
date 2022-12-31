import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React,{useState} from 'react'
import { Route,  Routes} from "react-router-dom";





function App() {
  const[modes,setMode]=useState("white")
  const toggleBtn=()=>{
    if(modes==="white")
    {
      setMode("black")
      document.body.style.backgroundColor='grey';
    }
    else
    {
      setMode("white")
      document.body.style.backgroundColor='white';
    }

  }

  return (
    <>
    
    <Navbar  title="TextUtils" Docs="Home" mode={modes} toggleBtn={toggleBtn}/>
    <div className="items-center heading">

    <Routes>
          <Route path="/about" element={<About/>}>
          
          </Route>
         
          <Route path="/" element={<TextForm heading="Enter the text to analyze below" mode={modes}/>}>

            
          </Route>
        </Routes>




    
     </div>
   
    </>
  )
}

export default App;
