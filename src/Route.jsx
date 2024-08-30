import { createBrowserRouter } from "react-router-dom";
import Home from './Home/layout/Home';
import MainHome from "./Home/layout/MainHome";
import Panel from "./Panel/layout/Panel";
import Permisos from "./Panel/views/Permisos";
import SharePoint from "./Panel/views/SharePoint/Pages/SharePoint";
import HomePanel from "./Panel/views/Home/Pages/HomePanel";
import  Os  from "./Panel/views/Os/Pages/Os";
import { Documentacion } from "./Panel/views/Documentacion/Pages/Documentacion";
import { Project } from "./Panel/views/Project/views/Project";
import { Usuarios } from "./Panel/views/Configuracion/Usuarios/Views/Usuarios";
import EstadosLayout from "./Panel/views/Configuracion/Estados/view/EstadosLayout";
const router = createBrowserRouter([
    {
        path: "/",
        element: <MainHome />,
    },
    {
        path:"/documentacion",
        element: <Documentacion/>
    },
    {
        path: "/panel",
        element: <Panel />,
        children:[
            {
                path:"/panel/home",
                element: <HomePanel/>
            },
            {
                path:"/panel/project",
                element: <Project/>
            },
            {
                path:"/panel/os",
                element: <Os/>
            },
            {
                path:"/panel/sharepoint",
                element: <SharePoint/>
            },
            {
                path:"/panel/permiso",
                element: <Permisos/>
            },
            {
                path:"/panel/docs",
                element: <Documentacion/>
            },
            {
                path:"/panel/configuracion/usuarios",
                element: <Usuarios/>
            },
            {
                path:"/panel/configuracion/estados",
                element: <EstadosLayout/>
            },
        ]
    },
    {
        path: "/*",
        element: <Home />,
    },
]);

export default router