import React, {useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import getDepartamentoById from '../../services/getDepartamentoById';
import postDepartamentos from '../../services/postDepartamentos';
import putDepartamento from '../../services/putDepartamento';

// import { Container } from './styles';

function CadastroDepartamento() {
    const {idDepartamento} = useParams()
    const [departamento, setDepartamento] = useState();
    const [nome, setNome] = useState('')
    const [sigla, setSigla] = useState('')
    const [showError, setShowError] = useState('d-none');
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate();
    const titulo = idDepartamento ? 'Atualização' : 'Cadastro';

    // Caso seja uma edição de departamento
    async function getDepto(idDepartamento){
        setDepartamento(await getDepartamentoById(idDepartamento));
    }
    useEffect(()=>{
        if (idDepartamento) {
            getDepto(idDepartamento)
            
        }
    }, [])

    useEffect(()=>{
        if(departamento) {
            setNome(departamento[0].nome);
            setSigla(departamento[0].sigla);
        }
        
    },[departamento])

  return <>
    <div>
        <h3 className='mt-3'>{titulo} de Departamento</h3>
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
                    onChange={s=>{setSigla(s.target.value)}}
                    ></input>
                    <label for='sigla'>Sigla</label>
                </div>
            </div>
           
        </form>
        <div className='row'>
            <div className='col'>
                <button className='btn btn-primary mt-3'
                onClick={()=>{
                    setShowError('d-none')
                    if (nome.trim() == ''){
                        setShowError('d-block')
                        setErrorMessage('Preencha um nome válido!')
                        return;
                    }
                    if (sigla.trim() == ''){
                        setShowError('d-block')
                        setErrorMessage('Preencha uma sigla válida!')
                        return;
                    }
                    if(departamento){
                        putDepartamento({
                            idDepartamento,
                            nome,
                            sigla
                        })
                    } else{
                        postDepartamentos({
                            nome,
                            sigla
                        }) 
                    }
                   
                    navigate('/departamentos');
                }}
                ><i className='bi bi-save'/> Salvar</button>
            </div>
        </div>
    </div>
    <div className= {`alert alert-danger mt-4 ${showError}`}>
        {errorMessage}
    </div>
  </>;
}

export default CadastroDepartamento;