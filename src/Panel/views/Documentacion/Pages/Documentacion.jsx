import { useState } from "react";
import Modal from "react-modal";
import { v4 } from "uuid";
/**
 * Importacion de imagenes
 */
import sheart from "../Assets/sheart.svg";
import grupo from "../Assets/grupo.svg";
import gantt from "../Assets/gantt.jpg";
export const Documentacion = () => {
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
  const [title,setTitle] = useState(null)
  const [parrafo,setParrafo] = useState(null)
  const [imagen,setImagen] = useState(null)
  /** 
   * Agregar titulo a documentacion
   */
  const addTitle = (e) =>{
    e.preventDefault();
    if (title) {
      const newDocument = [...documentacion,{
        id:v4(),
        module: 1,
        position: 1,
        type: 1, //titulo
        title: title,
        imagen:'',
        text: "",
      }]
      setDocumentacion(newDocument)
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
      const newDocument = [...documentacion,{
        id:v4(),
        module: 1,
        position: 1,
        type: 2, //parrafo
        title: '',
        imagen:'',
        text: parrafo,
      }]
      setDocumentacion(newDocument)
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
      const newDocument = [...documentacion,{
        id:v4(),
        module: 1,
        position: 1,
        type: 3, //alerta
        title: title,
        imagen:'',
        text: parrafo,
      }]
      setDocumentacion(newDocument)
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
    const addImagen = (e) =>{
      e.preventDefault();
      if (title && imagen) {
        const newDocument = [...documentacion,{
          id:v4(),
          module: 1,
          position: 1,
          type: 4, //alerta
          title: title,
          image:imagen,
          text: '',
        }]
        setDocumentacion(newDocument)
        setParrafo(null)
        setTitle(null)
        setImagen(null)
        setAddDocumentacion(null)
      }
    }

  return (
    <section className="w-full h-full bg-gradient-to-r from-slate-900 to-sky-800   flex md:flex-row flex-col overflow-auto ">
      {/* boton de expandir */}
      <button
        className="w-full flex justify-center fixed md:hidden"
        onClick={() => setBarra(!barra)}
      >
        <svg
          width=""
          height=""
          viewBox="0 0 18 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 1.25C0 0.835786 0.335786 0.5 0.75 0.5H17.25C17.6642 0.5 18 0.835786 18 1.25C18 1.66421 17.6642 2 17.25 2H0.75C0.335786 2 0 1.66421 0 1.25ZM0 5.75C0 5.33579 0.335786 5 0.75 5H17.25C17.6642 5 18 5.33579 18 5.75C18 6.16421 17.6642 6.5 17.25 6.5H0.75C0.335786 6.5 0 6.16421 0 5.75ZM0 10.25C0 9.83579 0.335786 9.5 0.75 9.5H17.25C17.6642 9.5 18 9.83579 18 10.25C18 10.6642 17.6642 11 17.25 11H0.75C0.335786 11 0 10.6642 0 10.25ZM0 14.75C0 14.3358 0.335786 14 0.75 14H17.25C17.6642 14 18 14.3358 18 14.75C18 15.1642 17.6642 15.5 17.25 15.5H0.75C0.335786 15.5 0 15.1642 0 14.75Z"
            fill="url(#paint0_linear_1906_48)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1906_48"
              x1="-6"
              y1="9.5"
              x2="23.5"
              y2="9.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#0649E6" />
              <stop offset="1" stop-color="#798192" />
            </linearGradient>
          </defs>
        </svg>
      </button>
      {/* barra lateral */}
      <div
        className={`md:w-[20%] w-full ${
          barra
            ? " h-full  opacity-100"
            : " opacity-0 h-[1px] md:h-full md:opacity-100"
        } sticky top-0 m-0  flex flex-col gap-2  p-3 transition-all mt-10 md:mt-0 `}
      >
        {/* buscador */}
        <button className="md:w-[16%] w-[90%] h-10 bg-white rounded-xl flex flex-row gap-2 items-center p-2 hover:scale-105 transition mb-5 fixed">
          <img src={sheart} alt="" className="w-6 h-6" />
          <p className="text-lg font-bold text-slate-300">Que buscas...</p>
        </button>
        {/* opciones principales */}
        <div className=" w-full h-full mt-20">
          <button className="flex flex-row gap-2 items-center">
            <img src={grupo} alt="" className="w-6 h-6" />
            <p className="text-[16px] font-sans font-bold text-white">Siagri</p>
          </button>
          {/* opciones de pagina de siagri */}
          <div className="w-full flex flex-col gap-3 p-2 px-10">
            <p className="text-slate-100">Gantt</p>
            <p className="text-slate-100">Palnificacion</p>
            <p className="text-slate-100">Apuntamientos</p>
            <p className="text-slate-100">Siembra</p>
            <p className="text-slate-100">Cierres</p>
            <p className="text-slate-100">Otros costos</p>
            <p className="text-slate-100">Distribucion</p>
          </div>
          <button className="flex flex-row gap-2 items-center">
            <img src={grupo} alt="" className="w-6 h-6" />
            <p className="text-[16px] font-sans font-bold text-white">Sigin</p>
          </button>
          {/* opciones de pagina de sigin */}
          <div className="w-full flex flex-col gap-3 p-2 px-10">
            <p className="text-slate-100">Gantt</p>
            <p className="text-slate-100">Palnificacion</p>
            <p className="text-slate-100">Apuntamientos</p>
            <p className="text-slate-100">Siembra</p>
            <p className="text-slate-100">Cierres</p>
            <p className="text-slate-100">Otros costos</p>
            <p className="text-slate-100">Distribucion</p>
          </div>
          <button className="flex flex-row gap-2 items-center">
            <img src={grupo} alt="" className="w-6 h-6" />
            <p className="text-[16px] font-sans font-bold text-white">Siman</p>
          </button>
          {/* opciones de pagina de sigin */}
          <div className="w-full flex flex-col gap-3 p-2 px-10">
            <p className="text-slate-100">Gantt</p>
            <p className="text-slate-100">Palnificacion</p>
            <p className="text-slate-100">Apuntamientos</p>
            <p className="text-slate-100">Siembra</p>
            <p className="text-slate-100">Cierres</p>
            <p className="text-slate-100">Otros costos</p>
            <p className="text-slate-100">Distribucion</p>
          </div>
          <button className="flex flex-row gap-2 items-center">
            <img src={grupo} alt="" className="w-6 h-6" />
            <p className="text-[16px] font-sans font-bold text-white">SiCap</p>
          </button>
        </div>
      </div>
      {/* main panel central */}
      <main className="md:w-[60%] w-full h-full flex flex-col gap-3 p-2  text-slate-200 ">
        {documentacion.map((document, index) => {
          switch (document.type) {
            case 1: //titulos
              return (
                <p id={document.id} className="text-2xl font-bold text-slate-300">
                  {document.title}
                </p>
              );
              break;
            case 2: //texto
              return (
                <p id={document.id}  className="text-lg  text-slate-200 " style={{whiteSpace:'pre-line'}}>{document.text}</p>
              );
            case 3: // recuadro
              return (
                <div id={document.id}  className="p-2 border-2 border-slate-200 text-slate-200 flex flex-col gap-2 rounded-sm">
                  <p className="text-slate-400 text-2xl">{document.title}</p>
                  <p className="text-lg  text-slate-200 ">{document.text}</p>
                </div>
              );
            break
            case 4: // imagen
              return (
                <div id={document.id}  className="p-2  text-slate-200 flex flex-col gap-2 rounded-sm">
                  <img src={document.image} alt="" className="w-full h-96 object-contain" />
                  <p className="text-xs  text-slate-200 text-center">{document.title}</p>
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
      {/* idex de pagina  con relacionados*/}
      <div className="sticky top-0 m-0  md:w-[20%] w-full h-full  text-start p-2 flex flex-col">
        <h1 className="text-xl font-bold font-serif text-slate-200">Index de documento</h1>
        {documentacion.map((title,index)=>(
          <a href={`#${title.id}`} className="text-sm text-white">{title.title}</a>
        ))}
      </div>
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
    </section>
  );
};
