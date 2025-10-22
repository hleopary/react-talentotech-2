import './App.css'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { Nav } from "./components/Nav/Nav";
import { useState } from "react"; 
import { BrowserRouter, Routes , Route } from "react-router-dom";
import { CartProvider } from './context/CartContext/CartProvider';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <BrowserRouter>
        
      <CartProvider>  
        <Nav />
        <Routes>
         <Route path='/' element={ <ItemListContainer /> } />
         <Route path="/detail/:id" element={ <ItemDetailContainer /> }/>

        </Routes>
        </CartProvider>
      </BrowserRouter>
      
      
      
    
    
    </>
  );
}

export default App
