import api from "./api";

const postDepartamentos= async(data)=>{
    const {nome, sigla} = data;
    console.log(nome, sigla);
   const resp = await api.post('/departamentos', {
       nome,
       sigla
   });
   console.log(resp);
   return resp.data;
}

export default postDepartamentos;