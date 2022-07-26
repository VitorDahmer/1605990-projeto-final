import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import ListaDepartamentos from './components/ListaDepartamentos';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import RouterNavigation from './router';
import Menu from './components/Menu'

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu/>
        <div className='container'>
          <RouterNavigation/>
        </div>
      </BrowserRouter>
     
   

      

    
    </>
  
    
  );
}

export default App;
