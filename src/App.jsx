import {BrowserRouter, Switch, Route} from 'react-router-dom'
import ProvedorContextoUsuario from './Contexto/ProvedorContextoUsuario';
import {PaginaHome, PaginaProduto, PaginaCliente, PaginaContato, Pagina404} from './UI/Paginas'

//importar o css bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'

export default function App(props)
{
    return(
        <div>
            <BrowserRouter>
                <ProvedorContextoUsuario>
                    <Switch>
                        <Route exact path="/" component={PaginaHome}/>
                        <Route path="/produtos" component={PaginaProduto}/>
                        <Route path="/clientes" component={PaginaCliente}/>
                        <Route path="/contato" component={PaginaContato}/>
                        <Route component={Pagina404}/>
                    </Switch>
                </ProvedorContextoUsuario>
            </BrowserRouter>            
        </div>
    );
}