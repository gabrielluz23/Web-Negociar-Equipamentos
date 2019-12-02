import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom'
import api from '../../services/api';
import './styles.css';

export default function Equipamento() {
    const [equips,setequips] = useState([]);
    useEffect(()=> {
        async function loadEquips(){
            const user_id = localStorage.getItem('id')
            const response = await api.get('/usuario',{
                headers: {user_id}
            });
            setequips(response.data);
        }
        loadEquips();
    },[]);
   return <> 
    <ul className= "equip-list">
        {equips.map(equips => (
    <li key= {equips._id}>
    <header style= {{backgroundImage: `url(${equips.imagemEquip_url})` }}/>
    <strong>{equips.titulo}</strong>
    <span className= "desc">Descrição: </span> <span> {equips.descricao}</span>
    <span>{equips.valor ? `R$${equips.valor}`:`Apenas Troca`}</span>
    </li>

        ))}

    </ul>
    <Link to= "/new">
          <button className= "btn"> Vender novo Equipamento </button>
    </Link>
   </>
}