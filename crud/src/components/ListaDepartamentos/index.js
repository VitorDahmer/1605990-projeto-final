import React, {useEffect, useState} from 'react';
import getDepartamentos from '../../services/departamentos';
import {Link} from 'react-router-dom';
import deleteDepartamento from '../../services/deleteDepartamento';

// import { Container } from './styles';

function ListaDepartamentos() {
  const [departamentos, setDepartamentos] = useState();
  const [showLoader, setShowLoader]= useState('d-none');
  const [desabledButton, setDesabledButton]= useState(false);

  async function loadDepartamentos() {
    setDepartamentos(await getDepartamentos())
  };

  useEffect(()=>{
    loadDepartamentos() 
  }, []);

  useEffect(()=>{
    setShowLoader('d-none')
    setDesabledButton(false)
  }, [departamentos]);

  console.log(departamentos);




  return (<>
    <div className='d-flex justify-content-between mt-3'>
      <h3 >Departamentos</h3>
      <Link 
        to='/departamentos/new' 
        className='btn btn-secondary'>
          <i className='bi bi-plus'/>
          Novo
      </Link>
    </div>
    
    
    
    <table className='table table-striped'>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Sigla</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
        {!departamentos &&
          <tr>
            <td colSpan='3'>
              <div className='d-flex justify-content-center'>
                <div className='spinner-border text-warning'>
                  <span className='visually-hidden'>Loading...</span>
                </div>
              </div>
            </td>
          </tr>
          }
          {departamentos && departamentos.map(d=>{
            return(
              <tr key={d.id_departamento}>
              <td>{d.nome}</td>
              <td>{d.sigla}</td>
              <td>
                  <div className='d-flex justify-content-evenly'>
                        <button className='btn btn-outline-warning'>
                            <i className='bi bi-pencil-fill'/>Editar
                        </button>
                        <button className='btn btn-outline-danger'
                        disabled={desabledButton}
                        onClick={() => {
                          setShowLoader('d-block')
                          setDesabledButton(true)
                          deleteDepartamento({idDel: d.id_departamento,
                          callback: ()=>{
                            loadDepartamentos()
                           
                          }
                          })                 
                          }}>
                          <span className={`spinner-border spinner-border-sm ${showLoader} `} />
                            <i className="bi bi-trash3-fill"/>Excluir
                        </button>
                    </div>
              </td>
              </tr>
          )
          })}
        </tbody>
        
      </table>


  </>)
}

export default ListaDepartamentos;