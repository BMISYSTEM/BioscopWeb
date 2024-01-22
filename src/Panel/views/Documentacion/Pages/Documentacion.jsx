import React, { useState } from 'react'
/**
 * Importacion de imagenes
 */
import sheart from '../Assets/sheart.svg'
import grupo from '../Assets/grupo.svg'
import gantt from '../Assets/gantt.jpg'
export const Documentacion = () => {
    const [barra,setBarra] = useState(false);
  return (
    <section className='w-full h-full bg-gradient-to-r from-slate-900 to-sky-800   flex md:flex-row flex-col '>
        {/* boton de expandir */}
        <button className='w-full flex justify-center fixed md:hidden' onClick={()=>setBarra(!barra)}>
            <svg width="" height="" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 1.25C0 0.835786 0.335786 0.5 0.75 0.5H17.25C17.6642 0.5 18 0.835786 18 1.25C18 1.66421 17.6642 2 17.25 2H0.75C0.335786 2 0 1.66421 0 1.25ZM0 5.75C0 5.33579 0.335786 5 0.75 5H17.25C17.6642 5 18 5.33579 18 5.75C18 6.16421 17.6642 6.5 17.25 6.5H0.75C0.335786 6.5 0 6.16421 0 5.75ZM0 10.25C0 9.83579 0.335786 9.5 0.75 9.5H17.25C17.6642 9.5 18 9.83579 18 10.25C18 10.6642 17.6642 11 17.25 11H0.75C0.335786 11 0 10.6642 0 10.25ZM0 14.75C0 14.3358 0.335786 14 0.75 14H17.25C17.6642 14 18 14.3358 18 14.75C18 15.1642 17.6642 15.5 17.25 15.5H0.75C0.335786 15.5 0 15.1642 0 14.75Z" fill="url(#paint0_linear_1906_48)"/>
            <defs>
            <linearGradient id="paint0_linear_1906_48" x1="-6" y1="9.5" x2="23.5" y2="9.5" gradientUnits="userSpaceOnUse">
            <stop stop-color="#0649E6"/>
            <stop offset="1" stop-color="#798192"/>
            </linearGradient>
            </defs>
            </svg>
        </button>
        {/* barra lateral */}
        <div className={`md:w-[20%] w-full ${barra ? ' h-full  opacity-100': ' opacity-0 h-[1px] md:h-full md:opacity-100'}  flex flex-col gap-2 overflow-auto p-3 transition-all mt-10 md:mt-0 `} >
            {/* buscador */}
            <button className='md:w-[16%] w-[90%] h-10 bg-white rounded-xl flex flex-row gap-2 items-center p-2 hover:scale-105 transition mb-5 fixed'>
                <img src={sheart} alt="" className='w-6 h-6'/>
                <p className='text-lg font-bold text-slate-300'>Que buscas...</p>
            </button>
            {/* opciones principales */}
            <div className='w-full h-full mt-20'>
                <button className='flex flex-row gap-2 items-center'>
                    <img src={grupo} alt="" className='w-6 h-6'/>
                    <p className='text-[16px] font-sans font-bold text-white'>Siagri</p>
                </button>
                {/* opciones de pagina de siagri */}
                <div className='w-full flex flex-col gap-3 p-2 px-10'>
                    <p className='text-slate-100'>Gantt</p>
                    <p className='text-slate-100'>Palnificacion</p>
                    <p className='text-slate-100'>Apuntamientos</p>
                    <p className='text-slate-100'>Siembra</p>
                    <p className='text-slate-100'>Cierres</p>
                    <p className='text-slate-100'>Otros costos</p>
                    <p className='text-slate-100'>Distribucion</p>
                </div>
                <button className='flex flex-row gap-2 items-center'>
                    <img src={grupo} alt="" className='w-6 h-6'/>
                    <p className='text-[16px] font-sans font-bold text-white'>Sigin</p>
                </button>
                {/* opciones de pagina de sigin */}
                <div className='w-full flex flex-col gap-3 p-2 px-10'>
                    <p className='text-slate-100'>Gantt</p>
                    <p className='text-slate-100'>Palnificacion</p>
                    <p className='text-slate-100'>Apuntamientos</p>
                    <p className='text-slate-100'>Siembra</p>
                    <p className='text-slate-100'>Cierres</p>
                    <p className='text-slate-100'>Otros costos</p>
                    <p className='text-slate-100'>Distribucion</p>
                </div>
                <button className='flex flex-row gap-2 items-center'>
                    <img src={grupo} alt="" className='w-6 h-6'/>
                    <p className='text-[16px] font-sans font-bold text-white'>Siman</p>
                </button>
                {/* opciones de pagina de sigin */}
                <div className='w-full flex flex-col gap-3 p-2 px-10'>
                    <p className='text-slate-100'>Gantt</p>
                    <p className='text-slate-100'>Palnificacion</p>
                    <p className='text-slate-100'>Apuntamientos</p>
                    <p className='text-slate-100'>Siembra</p>
                    <p className='text-slate-100'>Cierres</p>
                    <p className='text-slate-100'>Otros costos</p>
                    <p className='text-slate-100'>Distribucion</p>
                </div>
                <button className='flex flex-row gap-2 items-center'>
                    <img src={grupo} alt="" className='w-6 h-6'/>
                    <p className='text-[16px] font-sans font-bold text-white'>SiCap</p>
                </button>
            </div>
        </div>
        {/* main panel central */}
        <main className='md:w-[60%] w-full h-full flex flex-col gap-3 p-2 overflow-auto text-slate-200'>
            <p className='text-sky-700'>Siagri/Gantt</p>
            <div className='w-full h-auto flex flex-col'>
                {/* titulo ya sea principal o secundario */}
                <p className='text-4xl font-bold font-serif '>
                    Gantt
                </p>
                {/* descripcion */}
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione enim aperiam vitae porro nisi eius placeat temporibus consectetur voluptas tempore deleniti magni facere exercitationem sed voluptates quia, id minima quas!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione enim aperiam vitae porro nisi eius placeat temporibus consectetur voluptas tempore deleniti magni facere exercitationem sed voluptates quia, id minima quas!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione enim aperiam vitae porro nisi eius placeat temporibus consectetur voluptas tempore deleniti magni facere exercitationem sed voluptates quia, id minima quas!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione enim aperiam vitae porro nisi eius placeat temporibus consectetur voluptas tempore deleniti magni facere exercitationem sed voluptates quia, id minima quas!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione enim aperiam vitae porro nisi eius placeat temporibus consectetur voluptas tempore deleniti magni facere exercitationem sed voluptates quia, id minima quas!
                </p>
                {/* recomendacion */}
                <div className='w-full flex flex-col gap-2 mt-5 border p-2 rounded-xl'>
                    <p className='text-2xl text-slate-200 font-serif'>Recomendacion:</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui perferendis laboriosam eos natus repellat, excepturi, explicabo esse cupiditate recusandae tenetur aliquam necessitatibus animi minima maxime, vero expedita alias placeat! Autem!</p>
                </div>
                {/* implementacion */}
                <div className='w-full h-auto flex flex-col gap-2 mt-5'>
                    <p className='text-2xl text-slate-200 font-serif'>Implementacion</p>
                    <p>1. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore expedita delectus quasi perferendis assumenda recusandae ratione, ipsum et nihil, sapiente rerum magnam repellendus dicta aspernatur voluptatem quaerat sequi voluptate nemo?</p>
                    <p>2. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore expedita delectus quasi perferendis assumenda recusandae ratione, ipsum et nihil, sapiente rerum magnam repellendus dicta aspernatur voluptatem quaerat sequi voluptate nemo?</p>
                    <p>3. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore expedita delectus quasi perferendis assumenda recusandae ratione, ipsum et nihil, sapiente rerum magnam repellendus dicta aspernatur voluptatem quaerat sequi voluptate nemo?</p>
                    <p>4. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore expedita delectus quasi perferendis assumenda recusandae ratione, ipsum et nihil, sapiente rerum magnam repellendus dicta aspernatur voluptatem quaerat sequi voluptate nemo?</p>
                </div>
                {/* galeria de imagenes */}
                <div className='w-full h-auto flex flex-col gap-3 justify-center items-center mt-5 p-3'>
                    <img src={gantt} alt="imagen de gantt" className='w-[500px] h-auto rounded-xl'/>
                    <h1 className='text-sm  text-sky-200'>Titulo de imagen</h1>
                    <img src={gantt} alt="imagen de gantt" className='w-[500px] h-auto rounded-xl'/>
                    <h1 className='text-sm  text-sky-200'>Titulo de imagen</h1>
                    <img src={gantt} alt="imagen de gantt" className='w-[500px] h-auto rounded-xl'/>
                    <h1 className='text-sm  text-sky-200'>Titulo de imagen</h1>
                    <img src={gantt} alt="imagen de gantt" className='w-[500px] h-auto rounded-xl'/>
                    <h1 className='text-sm  text-sky-200'>Titulo de imagen</h1>
                </div>
                {/* video */}
            </div>
             {/* idex de pagina  con relacionados*/}
            <div className='w-full h-full  text-start p-2'>
                <h1 className='text-xl font-bold font-serif text-slate-200'>Relacionados</h1>
                <p className='text-sm text-sky-300'>Gantt</p>
                <p className='text-sm text-sky-300'>Recomendacion</p>
                <p className='text-sm text-sky-300'>Implementacion</p>
                <p className='text-sm text-sky-300'>Galeria de imagenes</p>
            </div>
        </main>
        {/* idex de pagina  con relacionados*/}
        <div className='md:w-[20%] w-full h-full  text-start p-2'>
            <h1 className='text-xl font-bold font-serif text-slate-200'>Index</h1>
            <p className='text-sm text-sky-300'>Gantt</p>
            <p className='text-sm text-sky-300'>Recomendacion</p>
            <p className='text-sm text-sky-300'>Implementacion</p>
            <p className='text-sm text-sky-300'>Galeria de imagenes</p>
        </div>
    </section>
  )
}
