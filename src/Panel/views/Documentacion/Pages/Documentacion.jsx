import { useEffect, useState } from "react";
import Modal from "react-modal";
import { v4 } from "uuid";
/**
 * Importacion de imagenes
 */
import sheart from "../Assets/sheart.svg";
import clienteAxios from "../../../../Config/axios";
import { useDocumentacion } from "../Hooks/useDocumentacion";
import { toast, ToastContainer } from "react-toastify";
import useSWR from "swr";
export const Documentacion = () => {
  const token = localStorage.getItem('token')
  const {loadingModulos,modulos,mutateModulos} = useDocumentacion()
  /**
   * interface documentacion{
   *  id:v4(),
   *  module:int;
   *  position:int
   *  type:int;
   *  title:string;
   *  image:string//base64
   *  text:string;
   * }
   */
  const [documentacion, setDocumentacion] = useState([]);
  const [addDocumentacion, setAddDocumentacion] = useState(null);
  const [barra, setBarra] = useState(false);
  const [nombreModulo,setNombreModulo] = useState(null)
  const [sistema,setSistema] = useState(null)
  /**
   * 1: editar
   * 2:eliminar
   */
  const [actionModule,setactionModule] = useState(null)
  const [editModule,setEditModulo] = useState(null)
  const [moduloSelect,setmoduloSelect] = useState(0)
  const [title,setTitle] = useState(null)
  const [parrafo,setParrafo] = useState(null)
  const [imagen,setImagen] = useState(null)
  /** 
   * Agregar titulo a documentacion
   */
  const addTitle = async(e) =>{
    e.preventDefault();
    if (title) {
      const datos ={
        id_modulo: moduloSelect,
          posicion: 1,
          tipo: 1, //titulo
          title: title,
          image:'-',
          text: "-",
      }
        toast.promise(clienteAxios.post('/api/createdocument',datos,{
          headers:{
            Authorization:`Bearer ${token}`
          }
        }),{
          pending: 'Actualizando documento ',
          success: 'Se Actualizo el documento',
          error: 'Se genero un erro al actualizar el documento 🤯'
        },{position:"top-right",autoClose:1000}) 
     
      cargaDocument()
      setTitle(null)
      setAddDocumentacion(null)
    }
  }
  /** 
   * Agregar un parragfo a documentacion
   */
  const addParrafo = (e) =>{
    e.preventDefault();
    if (parrafo) {
      const datos ={
          id_modulo: moduloSelect,
          posicion: 1,
          tipo: 2, //parrafo
          title: '-',
          image:'-',
          text: parrafo,
      }
        toast.promise(clienteAxios.post('/api/createdocument',datos,{
          headers:{
            Authorization:`Bearer ${token}`
          }
        }),{
          pending: 'Actualizando documento ',
          success: 'Se Actualizo el documento',
          error: 'Se genero un erro al actualizar el documento 🤯'
        },{position:"top-right",autoClose:1000}) 
     
      cargaDocument()
      setTitle(null)
      setAddDocumentacion(null)
      setParrafo(null)
      setAddDocumentacion(null)
    }
  }
  /** 
   * Agregar una alerta a documentacion
   */
  const addAlert = (e) =>{
    e.preventDefault();
    if (parrafo && title) {
      const datos ={
        id_modulo: moduloSelect,
        posicion: 1,
        tipo: 3, //parrafo
        title: title,
        image:'-',
        text: parrafo,
    }
      toast.promise(clienteAxios.post('/api/createdocument',datos,{
        headers:{
          Authorization:`Bearer ${token}`
        }
      }),{
        pending: 'Actualizando documento ',
        success: 'Se Actualizo el documento',
        error: 'Se genero un erro al actualizar el documento 🤯'
      },{position:"top-right",autoClose:1000}) 
   
      cargaDocument()
      setParrafo(null)
      setTitle(null)
      setAddDocumentacion(null)
    }
  }

  /**
   * Transforma la imagen en base 64 para pegarla en el jason
   */
  const changeImage = (e) =>{
    const file = e.target.files[0]; // Obtén el primer archivo seleccionado
    const reader = new FileReader();

    reader.onloadend = () => {
      // reader.result contiene la cadena base64
      setImagen(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file); // Lee el archivo como una URL de datos
    }
  }
    /** 
   * Agregar una imagen a documentacion
   */
    const addImagen = async (e) =>{
      e.preventDefault();
      if (title && imagen) {
        const datos ={
          id_modulo: moduloSelect,
          posicion: 1,
          tipo: 4, //parrafo
          title: title,
          image:imagen,
          text: '-',
      }
        await toast.promise(clienteAxios.post('/api/createdocument',datos,{
          headers:{
            Authorization:`Bearer ${token}`
          }
        }),{
          pending: 'Actualizando documento ',
          success: 'Se Actualizo el documento',
          error: 'Se genero un erro al actualizar el documento 🤯'
        },{position:"top-right",autoClose:1000}) 
     
        await cargaDocument()
        setParrafo(null)
        setTitle(null)
        setImagen(null)
        setAddDocumentacion(null)
      }
    }

    /**
     * crea el modulo en la base de datos
     */
    const createModulo = async(e) =>{
      e?.preventDefault()
      if(nombreModulo)
      {
        if(actionModule === 1 )
        {
          try {
            const datos ={
              id_modulo:editModule,
              sistema:sistema,
              nombre:nombreModulo
            }
            const {data} = await clienteAxios.post('/api/updatemodulo',datos,{
              headers:{
                Authorization:`Bearer ${token}`
              }
            })
            mutateModulos()
            setactionModule(null)
          } catch (error) {
            setactionModule(null)
            console.log(error)
          }
        }else{
          try {
            const datos ={
              sistema:sistema,
              nombre:nombreModulo
            }
            const {data} = await clienteAxios.post('/api/createmodulo',datos,{
              headers:{
                Authorization:`Bearer ${token}`
              }
            })
            mutateModulos()
            console.log(data)
          } catch (error) {
            console.log(error)
          }
        }
      }
      setNombreModulo(null)
      setAddDocumentacion(null)
    }
    /**
     * eliminar modulo
     */
    const deleteModulo = async(id) =>{
        try {
          toast.promise(clienteAxios('/api/deletemodulo?id='+id,{
            headers:{
              Authorization:`Bearer ${token}`
            }
          }),{
            pending: 'Eliminando el modulo',
            success: 'Se elimino el modulo',
            error: 'Se genero un erro al eliminar el modulo 🤯'
          },{position:"top-right",autoClose:1000}) 
          mutateModulos()
          setactionModule(null)
        } catch (error) {
          setactionModule(null)
          console.log(error)
        }
      }
    
    /**
     * crear nuevo withget
     */
    const cargaDocument = async()=>{
      const {data} = await clienteAxios('api/alldocumentacion?id='+moduloSelect,{
        headers:{
          Authorization:`Bearer ${token}`
        }
      })
      setDocumentacion(data)
    }
    useEffect(()=>{
      cargaDocument()
    },[moduloSelect])
    const allModulos = modulos?.data
    console.log(allModulos)
  return (
    // bg-gradient-to-r from-slate-900 to-sky-800 
    <section className="w-full h-full bg-white  flex md:flex-row flex-col overflow-auto gap-2 md:gap-0 scroll-smooth ">
      {/* boton de expandir */}
      <button
        className="w-full flex justify-center md:fixed md:hidden bg-white"
        onClick={() => setBarra(!barra)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0-3.75-3.75M17.25 21 21 17.25" />
</svg>

      </button>
      {/* barra lateral */}
      <div
        className={`md:w-[20%] w-full ${
          barra
            ? " h-full  opacity-100"
            : " opacity-0 h-[0px] md:h-full md:opacity-100"
        } md:sticky md:top-0 m-0  flex flex-col gap-2  p-3 transition-all mt-2 md:mt-0 border-r`}
      >
        {/* opciones principales */}
        <div className=" w-full h-full mt-20 ">
          {/* siagri */}
          <div className="w-full flex flex-row justify-between items-center border p-1 bg-slate-200">
            <p className="text-[16px] font-sans font-bold  ">Siagri</p>
            <button
            onClick={()=>{
              setSistema(1)
              setAddDocumentacion(0)}}
            className="border-2 border-transparent font-sans font-bold   rounded-full p-2 hover:scale-105  hover:text-green-500  transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </button>
          </div>
          {loadingModulos ? 
              <p className="text-lg animate-bounce ">Cargando modulos...</p>
              :
              null
            }
          {/* opciones de pagina de siagri */}
          <div className="w-full flex flex-col gap-3 p-2 px-5 border">
            {allModulos?.map((modulo,index)=>{
              if(modulo.sistema === 1 ){
                  return (
    
                  <div key={index} className="w-full flex justify-between items-center border p-1 hover:border-l-4 hover:border-sky-700">
                    <button  className="hover:text-sky-700 hover:border-b-2 border-sky-500" onClick={()=>setmoduloSelect(modulo.id)} >{modulo.nombre}</button>
                    <div className="flex flex-row gap-1">
                      <button onClick={()=>{
                        setactionModule(1)
                        setEditModulo(modulo.id)
                        setNombreModulo(modulo.nombre)
                        setAddDocumentacion(0)
                        }} className="border-2 border-transparent font-sans font-bold  rounded-full p-2 hover:scale-105  hover:text-green-500  transition-all">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                      </button>
                      <button
                      onClick={()=>deleteModulo(modulo.id)} 
                        className="border-2 border-transparent font-sans font-bold   rounded-full p-2 hover:scale-105  hover:text-red-500  transition-all">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                        </svg>
                      </button>
                    </div>
                  </div>
    
                  )
              }
            })}
            
          </div>
         {/* Sicap */}
         <div className="w-full flex flex-row justify-between items-center border p-1 bg-slate-200">
            <p className="text-[16px] font-sans font-bold  ">Sicap</p>
            <button
            onClick={()=>{
              setSistema(2)
              setAddDocumentacion(0)}}
            className="border-2 border-transparent font-sans font-bold   rounded-full p-2 hover:scale-105  hover:text-green-500  transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </button>
          </div>
          {loadingModulos ? 
              <p className="text-lg animate-bounce ">Cargando modulos...</p>
              :
              null
            }
          {/* opciones de pagina de siagri */}
          <div className="w-full flex flex-col gap-3 p-2 px-5 border">
            {allModulos?.map((modulo,index)=>{
              if(modulo.sistema === 2 ){
                  return (
    
                  <div key={index} className="w-full flex justify-between items-center border p-1 hover:border-l-4 hover:border-sky-700">
                    <button  className="hover:text-sky-700 hover:border-b-2 border-sky-500" onClick={()=>setmoduloSelect(modulo.id)} >{modulo.nombre}</button>
                    <div className="flex flex-row gap-1">
                      <button onClick={()=>{
                        setactionModule(1)
                        setEditModulo(modulo.id)
                        setNombreModulo(modulo.nombre)
                        setAddDocumentacion(0)
                        }} className="border-2 border-transparent font-sans font-bold  rounded-full p-2 hover:scale-105  hover:text-green-500  transition-all">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                      </button>
                      <button
                      onClick={()=>deleteModulo(modulo.id)} 
                        className="border-2 border-transparent font-sans font-bold   rounded-full p-2 hover:scale-105  hover:text-red-500  transition-all">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                        </svg>
                      </button>
                    </div>
                  </div>
    
                  )
              }
            })}
            
          </div>
        </div>
      </div>
      {/* idex de pagina  con relacionados pantallas mobile*/}
      <div className="md:sticky md:hidden md:top-0 m-0  md:w-[20%] w-full h-full  text-start p-2 flex flex-col border-l ">
        <h1 className="text-xl font-bold font-serif ">Index de documento</h1>
        {documentacion.map((title,index)=>(
          <a key={index} href={`#${title.id}`} className="text-sm text-sky-700 hover:border p-1">{title.title}</a>
        ))}
      </div>
      {/* main panel central */}
      <main className="md:w-[60%] w-full h-auto flex flex-col gap-3 p-2  ">
        {documentacion.map((document, index) => {
          switch (document.tipo) {
            case 1: //titulos
              return (
                <section key={index} className="w-full flex flex-col gap-2 group">
                  <div className="w-full flex flex-row gap-2 justify-end">
                    <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                      </svg>
                    </button>
                    <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                      </svg>
                    </button>
                  </div>
                  <p  id={document.id} className="text-2xl font-bold ">
                    {document.title}
                  </p>
                </section>
              );
              break;
            case 2: //texto
              return (
                <section key={index} className="w-full flex flex-col gap-2 group">
                  <div className="w-full flex flex-row gap-2 justify-end">
                    <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                      </svg>
                    </button>
                    <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                      </svg>
                    </button>
                  </div>
                  <p  id={document.id}  className="text-lg  " style={{whiteSpace:'pre-line'}}>{document.text}</p>
                </section>
              );
            case 3: // recuadro
              return (
                <div key={index} id={document.id}  className="p-2 border-2 border-slate-200  flex flex-col gap-2 rounded-sm group">
                   <div className="w-full flex flex-row gap-2 justify-end">
                    <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                      </svg>
                    </button>
                    <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                      </svg>
                    </button>
                  </div>
                  <p className="text-2xl">{document.title}</p>
                  <p className="text-lg   ">{document.text}</p>
                </div>
              );
            break
            case 4: // imagen
              return (
                <div key={index} id={document.id}  className="p-2   flex flex-col gap-2 rounded-sm">
                  <img src={document.image} alt="" className="w-full h-96 object-contain" />
                  <p className="text-xs   text-center">{document.title}</p>
                </div>
              );
            break
          }
        })}
        <div className="w-full flex flex-row gap-2 border-2 rounded-xl p-2">
          <button
            className="border border-transparent rounded-xl hover: hover:border-green-500 transition-all p-2"
            onClick={() => {
              setAddDocumentacion(1);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.243 4.493v7.5m0 0v7.502m0-7.501h10.5m0-7.5v7.5m0 0v7.501m4.501-8.627 2.25-1.5v10.126m0 0h-2.25m2.25 0h2.25"
              />
            </svg>
          </button>
          <button
            className="border border-transparent rounded-xl hover: hover:border-green-500 transition-all p-2"
            onClick={() => setAddDocumentacion(2)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.248 20.246H9.05m0 0h3.696m-3.696 0 5.893-16.502m0 0h-3.697m3.697 0h3.803"
              />
            </svg>
          </button>
          <button
            className="border border-transparent rounded-xl hover: hover:border-green-500 transition-all p-2"
            onClick={() => setAddDocumentacion(3)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
              />
            </svg>
          </button>
          <button
            className="border border-transparent rounded-xl hover: hover:border-green-500 transition-all p-2"
            onClick={() => setAddDocumentacion(4)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
</svg>

          </button>
        </div>
        
      </main>
      {/* idex de pagina  con relacionados pantallas grandes*/}
      <div className="md:sticky hidden md:top-0 m-0  md:w-[20%] w-full h-full  text-start p-2 md:flex flex-col border-l">
        <h1 className="text-xl font-bold font-serif ">Index de documento</h1>
        {documentacion.map((title,index)=>(
          <a key={index} href={`#${title.id}`} className="text-sm text-sky-700">{title.title}</a>
        ))}
      </div>



      <Modal isOpen={addDocumentacion === 0 ? true : false} className={'w-full h-full flex justify-center items-center backdrop-blur-sm animate__animated  animate__fadeIn'}>
        <div className="w-96 h-auto p-2 flex flex-col gap-5 bg-white border-2 rounded-xl border-indigo-500">
          <div className="w'full flex flex'row justify-end">
            <button className="rounded-full text-sm w-6 h-6 p-1 text-white font-bold bg-red-500 flex items-center justify-center hover:scale-105 transition-all" onClick={()=>setAddDocumentacion(null)}>
                X
            </button>
          </div>
          <p className="text-3xl font-bold text-slate-800">{actionModule === 1 ? 'Editar nombre de modulo' : 'Agregar un nuevo modulo'}</p>
          <form onSubmit={createModulo} action="" className="flex flex-col gap-2">
            <label htmlFor="" className="text-slate-800">
              Modulo
            </label>
            <input
              type="text"
              value={nombreModulo}
              onChange={(e)=>setNombreModulo(e.target.value)}
              className="p-1 rounded-xl text-slate-600 text-lg border border-indigo-500"
            />
            <button type="submit" className="p-1 bg-green-500 hover:scale-105 transition-all font-bold text-white">
              Guardar titulo
            </button>
          </form>
        </div>
      </Modal>
      <Modal isOpen={addDocumentacion === 1 ? true : false} className={'w-full h-full flex justify-center items-center backdrop-blur-sm animate__animated  animate__fadeIn'}>
        <div className="w-96 h-auto p-2 flex flex-col gap-5 bg-white border-2 rounded-xl border-indigo-500">
          <div className="w'full flex flex'row justify-end">
            <button className="rounded-full text-sm w-6 h-6 p-1 text-white font-bold bg-red-500 flex items-center justify-center hover:scale-105 transition-all" onClick={()=>setAddDocumentacion(null)}>
                X
            </button>
          </div>
          <p className="text-3xl font-bold text-slate-800">Agrega un titulo</p>
          <form onSubmit={addTitle} action="" className="flex flex-col gap-2">
            <label htmlFor="" className="text-slate-800">
              Titulo
            </label>
            <input
              type="text"
              value={title}
              onChange={(e)=>setTitle(e.target.value)}
              className="p-1 rounded-xl text-slate-600 text-lg border border-indigo-500"
            />
            <button type="submit" className="p-1 bg-green-500 hover:scale-105 transition-all font-bold text-white">
              Guardar titulo
            </button>
          </form>
        </div>
      </Modal>
      <Modal isOpen={addDocumentacion === 2 ? true : false} className={'w-full h-full flex justify-center items-center backdrop-blur-sm animate__animated  animate__fadeIn'}>
        <div className="w-96 h-auto p-2 flex flex-col gap-5 bg-white border-2 rounded-xl border-indigo-500">
          <div className="w'full flex flex'row justify-end">
            <button className="rounded-full text-sm w-6 h-6 p-1 text-white font-bold bg-red-500 flex items-center justify-center hover:scale-105 transition-all" onClick={()=>setAddDocumentacion(null)}>
                X
            </button>
          </div>
          <p className="text-3xl font-bold text-slate-800">Agrega un Parrafo</p>
          <form onSubmit={addParrafo} action="" className="flex flex-col gap-2">
            <label htmlFor="" className="text-slate-800">
              Parrafo
            </label>
            <textarea name="" id="" className="p-2 border border-indigo-500" value={parrafo} onChange={(e)=>setParrafo(e.target.value)}></textarea>
            <button type="submit" className="p-1 bg-green-500 hover:scale-105 transition-all font-bold text-white" >
              Guardar
            </button>
          </form>
        </div>
      </Modal>
      <Modal isOpen={addDocumentacion === 3 ? true : false} className={'w-full h-full flex justify-center items-center backdrop-blur-sm animate__animated  animate__fadeIn'}>
        <div className="w-96 h-auto p-2 flex flex-col gap-5 bg-white border-2 rounded-xl border-indigo-500">
          <div className="w'full flex flex'row justify-end">
            <button className="rounded-full text-sm w-6 h-6 p-1 text-white font-bold bg-red-500 flex items-center justify-center hover:scale-105 transition-all" onClick={()=>setAddDocumentacion(null)}>
                X
            </button>
          </div>
          <p className="text-3xl font-bold text-slate-800">Agrega una Alerta</p>
          <form onSubmit={addAlert} action="" className="flex flex-col gap-2">
          <label htmlFor="">Titulo de la alerta</label>
            <input
              type="text"
              value={title}
              onChange={(e)=>setTitle(e.target.value)}
              className="p-1 rounded-xl text-slate-600 text-lg border border-indigo-500"
            />
            <label htmlFor="" className="text-slate-800">
              Parrafo
            </label>
            <textarea name="" id="" className="p-2 border border-indigo-500" value={parrafo} onChange={(e)=>setParrafo(e.target.value)}></textarea>
            <button type="submit" className="p-1 bg-green-500 hover:scale-105 transition-all font-bold text-white" >
              Guardar
            </button>
          </form>
        </div>
      </Modal>
      <Modal isOpen={addDocumentacion === 4 ? true : false} className={'w-full h-full flex justify-center items-center backdrop-blur-sm animate__animated  animate__fadeIn'}>
        <div className="w-96 h-auto p-2 flex flex-col gap-5 bg-white border-2 rounded-xl border-indigo-500">
          <div className="w'full flex flex'row justify-end">
            <button className="rounded-full text-sm w-6 h-6 p-1 text-white font-bold bg-red-500 flex items-center justify-center hover:scale-105 transition-all" onClick={()=>setAddDocumentacion(null)}>
                X
            </button>
          </div>
          <p className="text-3xl font-bold text-slate-800">Agrega una Alerta</p>
          <form onSubmit={addImagen} action="" className="flex flex-col gap-2">
          <label htmlFor="">Titulo de la imagen</label>
            <input
              type="text"
              value={title}
              onChange={(e)=>setTitle(e.target.value)}
              className="p-1 rounded-xl text-slate-600 text-lg border border-indigo-500"
            />
            <label htmlFor="" className="text-slate-800">
              Imagen
            </label>
            <input type="file" accept="imagen/*" placeholder="Seleccione la imagen a cargar" onChange={changeImage} />
            <button type="submit" className="p-1 bg-green-500 hover:scale-105 transition-all font-bold text-white" >
              Guardar
            </button>
          </form>
        </div>
      </Modal>
      <ToastContainer/>
    </section>
  );
};
