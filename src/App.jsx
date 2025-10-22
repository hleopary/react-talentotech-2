import './App.css'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
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
         <Route path='/' element={ <ItemListContainer /> } />
         <Route path="/detail/:id" element={}/>

        </Routes>
      
      </BrowserRouter>
      
      
      
    
    
    </>
  );
}

export default App
