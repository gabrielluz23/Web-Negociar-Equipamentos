import React from 'react';

import './App.css';
import logo from './images/logo.jpg';
function App() {
  return (
   <div className="container">
     <img src={logo} alt=""/>
     <div className="content">
       <p>
         Faça <strong> Trocas</strong> e <strong>Vendas</strong> de equipamentos usados, Desapegue.
       </p>
      
       <form >
       <label htmlFor="nome">Nome *</label>
         <input type="nome" 
         id="nome" 
         placeholder = "Seu Nome"/>

         <label htmlFor="email">E-MAIL *</label>
         <input type="email" 
         id="email" 
         placeholder = "Seu Email"/>

        <label htmlFor="senha">Senha *</label>
         <input 
         type="password" 
         id="senha" 
         placeholder = "Sua Senha"/>

          <label htmlFor="confsenha">Confirmar Senha *</label>
         <input 
         type="password" 
         id="confsenha" 
         placeholder = "Confirmar Senha"/>

         <label htmlFor="telefone">Telefone *</label>
         <input 
         type="telefone" 
         id="telefone" 
         placeholder = "Seu Telefone "/>
         <button type="submit" className= "btn"> Cadastrar-se </button>
         <button  className= "btn"> Ja Sou Cadastrado </button>
       </form>
     </div>
   </div>
  );
}

export default App;
