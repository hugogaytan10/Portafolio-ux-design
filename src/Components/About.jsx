import React from 'react'
import me from '../assets/Me.jpg';
export const About = () => {
  return (
    <div className='min-h-screen md:flex md:flex-wrap md:justify-around '>
        <img src={me} alt="me" className='object-cover md:inline-block md:w-1/3 md:h-1/4 md:mr-4'/>
        <div className='md:w-1/3'>
            <p className='font-extrabold mt-10'>Hola, soy Hugo Gaytán</p>
            <div className='h-96 overflow-y-auto mt-5 relative'>
                <span className='absolute w-1 bg-cyan-600 h-96 left-0'></span>
                <p className='text-gray-500 font-thin text-justify p-2 '>El mundo está en constante evolución gracias a los diseñadores que ponen al usuario en el centro de su proceso. Los creativos diseñan una experiencia a través de una serie de puntos de contacto que crean el marco para tener interacciones significativas. Todo comienza con comprender las necesidades del usuario y concebir una solución innovadora para satisfacerlas.</p>
            </div>
        </div>
    </div>
  )
}
