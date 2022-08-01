import api from "./api";

const deleteDepartamento = async(data) =>{
    const {idDel, callback} = data;
    const resp = await api.delete(`/departamentos/${idDel}`);
    callback();
    return resp.data;
};

export default deleteDepartamento;