import React from 'react';
import ComentarioItem from './ComentarioItem';
import Header from './Header';
import Card from './Card';

function ComentarioLista({ comments, handleDelete }) {
    

    // Verificamos primero si comments está definido y es un arreglo
    if (!comments || comments.length === 0) {
        return <p>No hay comentarios</p>;
    }

    return (
        <div className='container'>       
            <div className='comments'>
                <ul>
                    {comments.map(comentario => (
                        <ComentarioItem
                            key={comentario.id}
                            comentario={comentario.comentario}
                            calificacion={comentario.calificacion} 
                            id={comentario.id}
                            handleDelete={(handleDelete)}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ComentarioLista;
