import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import Login from './pages/Login';
import Contato from './pages/Contato';
import Cadastro from './pages/Cadastro';
import Equipes from './pages/Equipes';


const Routes = createAppContainer(
    createSwitchNavigator({
        Login,
    Contato,
    Cadastro,
    Equipes
    })
    

);
export default Routes;