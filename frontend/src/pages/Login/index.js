import React, {useState} from 'react';
import api from '../../services/api';


export default function Login({history }) {
  localStorage.clear();
    const [email,setemail] = useState('');
const [senha,setsenha] = useState('');
 async function handleSubimit(event) {
    event.preventDefault();
  const response = await  api.post('/login',{email,senha});
  const {_id} = response.data;
  localStorage.setItem("id",_id);
  if(_id != null){
  history.push('/equipamentos')
  console.log(response)
}
  else{
    window.alert("login invalido")
  }
 }
 function cadastro(){
     history.push('/cadastro');
 }

   return (
       <>
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

   <label htmlFor="senha">Senha *</label>
    <input 
    type="password" 
    id="senha" 
    placeholder = "Sua Senha"
    value= {senha}
    onChange = {event =>setsenha (event.target.value)}/>

    <button type="submit" className= "btn"> Fazer Login</button>
    <button  className= "btn" onClick={cadastro} > Fazer Cadastro </button>
  </form>
  </>
   )
}