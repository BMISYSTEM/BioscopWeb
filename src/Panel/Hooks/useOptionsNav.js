
/**|
 * Importaciones de imagenes
 */
import permisos from "../assets/permisos.svg"
import compartido from "../assets/compartido.svg"
import ruta from "../assets/ruta.svg"
import docs from "../assets/docs.svg"
import casa from "../assets/casa.svg";
import dashboard from "../assets/dashboard.png";
import os from "../assets/os.svg";
import project from "../assets/project.svg";
import proyectos from "../assets/proyectos.png";
import usuarios from "../assets/usuarios.svg";
import organigrama from "../assets/organigrama.png";
import temas from "../assets/temas.png";
import tarea from "../assets/tarea.png";
import documento from "../assets/documento.png";
import carpetasUsuarios from "../assets/carpetas-usuarios.png";
import intinerarios from "../assets/intinerarios.png";
import documentos from "../assets/documentos.png";
import config from "../assets/config.png";

export const useOptionsNav = () => {
    const navar= [
        {
          id:'home',
          title: "Home",
          to: "/panel/home",
          icono: dashboard,
          children:[]
        },
        {
          id:'project',
          title: "Project",
          to: "/panel/project",
          icono: proyectos,
          children:[]
        },
        {
          id:'os',
          title: "OS",
          to: "/panel/os",
          icono: tarea,
          children:[]
        },
        {
          id:'permisos',
          title: "Permisos",
          to: "/panel/permiso",
          icono: documento,
          children:[]
        },
        {
          id:'sharepoint',
          title: "Sharepoint",
          to: "/panel/sharepoint",
          icono: carpetasUsuarios,
          children:[]
        },
        {
          id:'intinerario',
          title: "Intinerario",
          to: "/panel/intinerario",
          icono: intinerarios,
          children:[]
        },
        {
          id:'docs',
          title: "Docs",
          to: "/panel/docs",
          icono: documentos,
          children:[]
        },
        /**
         * Cambiar el icono por uno de configuracion 
         */
        {
          id:'configuracion',
          title: "Configuracion",
          to: "null",
          icono: config,
          children:[
            {
                id:8.1,
                title: "Usuarios",
                to: "/panel/configuracion/usuarios",
                icono: usuarios,  
            },
            {
                id:8.2,
                title: "Areas",
                to: "/panel/configuracion/areas",
                icono: organigrama,  
            },
            {
              id:8.2,
              title: "Estados",
              to: "/panel/configuracion/estados",
              icono: organigrama,  
            },
            {
                id:8.2,
                title: "Temas",
                to: "/panel/configuracion/temas",
                icono: temas,  
            },
          ]
        },
      ];
  return {
    navar
  }
}
