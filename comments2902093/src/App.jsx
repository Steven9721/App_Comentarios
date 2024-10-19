import {React, useState} from 'react';
import Header from './componentes/Header';
import ComentarioItem from './componentes/ComentarioItem';
import comentarios from './data/Comentarios';
import ComentarioLista from './componentes/ComentarioLista';
import Card from './componentes/Card';
import ComentarioStats from './componentes/ComentarioStats';
import ComentarioForm from './componentes/ComentarioForm';
function App() {
    const [comments, setComments] = useState(comentarios);
;

const borrarItem= id => {
    if (window.confirm
        ("¿Esta seguro de borrar el comentario?")){
            //Asignar nuevo estado a comments
            //filter: Para quitar comentarios cuyo ID concuerden
            //Con el parametro
            setComments(comments.filter((c)=> 
                c.id !== id ))
    }
 }


    const titulo = "App de Comentarios";
    const autor = "Porther López";
    const ficha = "2902093";
    const CentroFormacion = "Centro De Mercados y Logistica"
  

    const loading = false;
    const showComments = true; 

    if(loading === true) return (<h1>Cargando Comentarios...</h1>);

    <Card reverse={true}></Card>
    const addComentario = (newComentario) => {
        const id = comments.length ? Math.max(...comments.map(c => c.id)) + 1 : 1;
        const comentarioConId = { id, ...newComentario };
        setComments([...comments, comentarioConId]);
    };



    return (
        <div className='container'>
        <Header
        titulo={titulo}
        autor={autor}
        ficha={ficha}
        CentroFormacion={CentroFormacion} />

<ComentarioForm handleAdd={addComentario} />        
        <ComentarioStats comentarios={comments}/>        
        
       <ComentarioLista 
       comments={comments}
       handleDelete={borrarItem}/>

    
        </div>
    );
}

export default App;