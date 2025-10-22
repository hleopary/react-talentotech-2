import './App.css'
import { Nav } from "./components/Nav/Nav";
import { useState } from "react"; 



import { BrowserRouter, Routes , Route } from "react-router-dom";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <BrowserRouter>
        <Nav />
        <Routes>
        
        </Routes>
      
      </BrowserRouter>
      
      
      
    
    
    </>
  );
}

export default App
