import React, {useState} from 'react';
import api from '../../services/api';


export default function Cadastro({history}) {
    const [email,setemail] = useState('');
const [senha,setsenha] = useState('');
const [nome,setnome] = useState('');
const [telefone,settelefone] = useState('');

 async function handleSubimit(event) {
    event.preventDefault();
 
    await  api.post('/sessions',{email,nome,senha,telefone});
 }
 
 function login(){
    history.push('/');
}
   return <> 
     <p>
    Faça <strong> Trocas</strong> e <strong>Vendas</strong> de equipamentos usados, Desapegue.
  </p>
 
  <form  onSubmit = {handleSubimit}>
    <label htmlFor="email">E-MAIL *</label>
    <input type="email" 
    id="email" 
    placeholder = "Seu Email"
    value = {email}
    onChange = {event =>setemail (event.target.value)}
    />

     <label htmlFor="nome">Nome *</label>
    <input type="nome" 
    id="nome" 
    placeholder = "Seu Nome"
    value = {nome}
    onChange = {event =>setnome (event.target.value)}
    />
     
     <label htmlFor="Telefone">Telefone *</label>
    <input type="Telefone" 
    id="Telefone" 
    placeholder = "Seu Telefone"
    value = {telefone}
    onChange = {event =>settelefone (event.target.value)}
    />
    

   <label htmlFor="senha">Senha *</label>
    <input 
    type="password" 
    id="senha" 
    placeholder = "Sua Senha"
    value= {senha}
    onChange = {event =>setsenha (event.target.value)}/>
    <button type="submit" className= "btn" > Fazer Cadastro </button>
    <button className= "btn" onClick={login}> Fazer Login</button>
  </form>
   </>
}