import React,{useState,useMemo} from 'react';

import './styles.css';
import camera from '../../images/camera.jpg';
import api from '../../services/api';

export default function New({history}) {
   const [imagem,setimagem] = useState(null);
   const [titulo,settitulo] = useState('');
   const [descricao,setdescricao] = useState('');
   const [categoria,setcategoria] = useState('');
   const [valor,setvalor] = useState('');

   const preview = useMemo( () =>{
      return imagem ? URL.createObjectURL(imagem) : null;
   },[imagem]
   );

   async function handleSubmit(event) {
      event.preventDefault();
      const data  = new FormData();
      const user_id = localStorage.getItem('id');
      data.append('imagemEquip',imagem)
      data.append('titulo',titulo)
      data.append('descricao',descricao)
      data.append('categorias',categoria)
      data.append('valor',valor)
      await api.post('/equipamento',data,{headers:{user_id}})
      history.push('/equipamentos')
   }
   return (
      <form onSubmit={handleSubmit}>
         <label id = "imagem" 
         style= {{backgroundImage: `url(${preview})`}}
         className= {imagem ? 'has-imagem':''}
         >
         <input type="file" onChange= {event => setimagem(event.target.files[0])}/> 
         <img  className="iconimg" src={camera}alt="select img"/>        
         </label>

         <label htmlFor="titulo">Titulo*</label>

         <input id= "titulo"
         placeholder= "Titulo do Equipamento"
         value={titulo}
         onChange = {event => settitulo(event.target.value)} />

         <label htmlFor="descricao">Descrição*</label>

         <textarea id= "descricao"
         placeholder= " Descrição do Equipamento" 
         value={descricao}
         onChange = {event => setdescricao(event.target.value)}/>

         <label htmlFor="categoria">Categorias* <span>(separadas por virgula)</span></label>

         <input id= "categoria"
         placeholder= "categorias do Equipamento"
         value={categoria}
         onChange = {event => setcategoria(event.target.value)} />
      
         <label htmlFor="valor">Valor <span>(em branco caso seja apenas para troca)</span></label>

         <input id= "valor"
         placeholder= "Valor do Equipamento"
         value={valor}
         onChange = {event => setvalor(event.target.value)} />
         <button type= "submit" className= "btn"> Cadastar </button>
      </form>

   )

      
   
}