import { createBrowserRouter } from "react-router-dom";
import Home from './Home/layout/Home';
import MainHome from "./Home/layout/MainHome";
import Panel from "./Panel/layout/Panel";
import Permisos from "./Panel/views/Permisos";
import SharePoint from "./Panel/views/SharePoint";
import HomePanel from "./Panel/views/Home/Pages/HomePanel";
import  Os  from "./Panel/views/Os/Pages/Os";
const router = createBrowserRouter([
    {
        path: "/",
        element: <MainHome />,
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
            }
        ]
    },
    {
        path: "/*",
        element: <Home />,
    },
]);

export default router