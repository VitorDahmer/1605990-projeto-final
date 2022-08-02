import api from "./api";

const getDepartamentoById = async(idDepartamento)=>{
    const resp = await api.get(`departamentos/${idDepartamento}`)
    return resp.data;
}

export default getDepartamentoById;