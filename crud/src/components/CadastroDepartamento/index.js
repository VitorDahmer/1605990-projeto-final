import React, {useState, useEffect} from 'react';

// import { Container } from './styles';

function CadastroDepartamento() {
    const [nome, setNome] = useState('')
    const [sigla, setSigla] = useState('')
  return <>
    <div>
        <h3 className='mt-3'>Cadastro de Departamento</h3>
        <form className='row'>
            <div className='col-md-10 col-sm-6 col-12'>
                <div className='form-floating'>
                    <input 
                    type='text' 
                    id='nome' 
                    placeholder='Nome' 
                    className='form-control'
                    value={nome}
                    onChange={e=>{setNome(e.target.value)}}
                    ></input>
                    <label for='nome'>Nome</label>
                </div>
            </div>
            <div className='col-md-2 col-sm-6 col-12'>
                <div className='form-floating'>
                    <input 
                    type='text' 
                    id='sigla' 
                    placeholder='Sigla' 
                    className='form-control'
                    value={sigla}
                    ></input>
                    <label for='sigla'>Sigla</label>
                </div>
            </div>
           
        </form>
        <div className='row'>
            <div className='col'>
                <button className='btn btn-primary mt-3'
                onClick={()=>{
                    alert('Clicou!')
                }}
                ><i className='bi bi-save'/>Salvar</button>
            </div>
        </div>
    </div>
  
  </>;
}

export default CadastroDepartamento;