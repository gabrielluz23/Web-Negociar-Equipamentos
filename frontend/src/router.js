import React from 'react';

import {BrowserRouter,Switch,Route} from 'react-router-dom';

import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import New from './pages/New';
import Equipamento from './pages/Equipamentos';

export default function router(){
    return (
        <BrowserRouter>
        <Switch>
            <Route path= "/" exact component ={Login}/>
            <Route path= "/cadastro" component ={Cadastro}/>
            <Route path= "/new" component ={New}/>
            <Route path= "/equipamentos" component = {Equipamento}/>
        </Switch>
        </BrowserRouter>
    )
}