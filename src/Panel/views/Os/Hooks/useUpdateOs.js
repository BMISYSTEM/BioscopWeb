import clienteAxios from "../../../../Config/axios";
import { useOs } from "./useOs";


export const useUpdateOs = () => {
    const Bearer = "13|D8HS62kExNpOxieHnSsAIbTnv983kNT3Uoo9Kjwp6eb9268c";
    const {mutate} = useOs();
    /**
     * Actualiza la OS
     * @param {*} data {descripcion,user,estado,id} 
     * @param {*} setEstatus {Respuesta JSON}
     */
    const UpdateOs = async(data,setEstatus) => {
        try {
            const estatus = await clienteAxios.post('/api/updateos',data,{
                headers:{
                    Authorization:`Bearer ${Bearer}`
                }
            });
            await setEstatus(estatus);
            await mutate();
        } catch (error) {
            setEstatus(estatus);
        }
    }
  return {
    UpdateOs
  }
}
