import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import Login from './pages/Login';
import Contato from './pages/Contato';
import Cadastro from './pages/Cadastro';
import Equipes from './pages/Equipes';
import CadEquipes from './pages/CadEquip';


const Routes = createAppContainer(
    createSwitchNavigator({
        Login,
    Contato,
    Cadastro,
    Equipes,
    CadEquipes
    })
    

);
export default Routes;