import api from "./api";

const putDepartamento= async(data)=>{
    const {idDepartamento, nome, sigla} = data;
    const resp = await api.put(`departamentos/${idDepartamento}`, {
        nome,
        sigla
    });
    console.log(resp);
    return resp.data;
}

export default putDepartamento;