import React from 'react';
import {Route, Routes} from 'react-router-dom';
import CadastroDepartamento from '../components/CadastroDepartamento';
import ListaDepartamentos from '../components/ListaDepartamentos';


// import { Container } from './styles';

function RouterNavigation() {
  return (
    <Routes>
        <Route path='/' element={<h1>Ola Vc está no Home</h1>}></Route>
        <Route path='/departamentos' element={<ListaDepartamentos/>}></Route>
        <Route path='/departamentos/new' element={<CadastroDepartamento/>}></Route>
    </Routes>
  );
}

export default RouterNavigation;