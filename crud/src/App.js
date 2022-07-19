import { Button } from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className='container'>
      
    <h2>React APP</h2>
    
    <button className='btn btn-primary'>Botão</button>
    <button className='btn btn-warning'>Botão 2</button>

    <h3>Departamentos</h3>
    
    <table className='table table-striped'>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Sigla</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
           <td>Recursos Humanos</td>
           <td>RH</td>
           <td>
            <button className='btn btn-outline-warning'>Editar</button>
            <button className='btn btn-outline-danger'>Editar</button>
           </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>Recursos Inumanos</td>
            <td>RI</td>
            <td>
              <button className='btn btn-outline-warning'>Editar</button>
              <button className='btn btn-outline-danger'>Editar</button>
            </td>
          </tr>
         
        </tbody>
      </table>

    </div>
    
  );
}

export default App;
