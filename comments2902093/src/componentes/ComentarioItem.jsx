import {React, useState} from 'react'
import Card from './Card'
import {FaTimes} from 'react-icons/fa' 

const ComentarioItem = ({comentario, calificacion, id, handleDelete}) => {
  //Manejo del estado de un comentario
  //comentario y calificacion como atributos
  //mediante el uso de ESTADOS
  const [comment, setComment] = useState(comentario)
  const [rating, setRating] = useState(calificacion)
  const [identificacion, setIdentificacion] = useState(id)

  
  const cambiarRating = () => {
    //Cambia la calificación del comentario
    setRating((prev)=> prev + 1 )
  }


    return (
      <Card reverse={false}>
        <div className='num-display'>{rating}</div>
        <button onClick={() => handleDelete(identificacion)} 
        className='close'>
        <FaTimes color='purple'/>     
        </button>
        <div className='text-display'>{comentario}</div>
      </Card>
    
  );
}

export default ComentarioItem
