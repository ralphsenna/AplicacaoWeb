import {useContext} from "react";
import {ContextoUsuario} from "../Contexto/ProvedorContextoUsuario";
import {Pagina} from "../Templates/UI/Pagina";
import TelaCadastroProdutos from "./Formularios/TelaCadastroProdutos";
import TelaCadastroClientes from "./Formularios/TelaCadastroClientes";
import logado from "../Imagens/icone.jpg"

export function PaginaHome(props)
{
    return(
        /*Usando o template página */
        <Pagina>
            <h1>Bem-vindo ao sistema de controle financeiro.</h1>
            <h2>blá blá blá</h2>
        </Pagina>
    );
}

export function PaginaProduto(props)
{
    return(
        <Pagina>
            <TelaCadastroProdutos/>
        </Pagina>
    );
}

export function PaginaCliente(props)
{
    return(
        <Pagina>
            <TelaCadastroClientes/>
        </Pagina>
        
    );
}

export function PaginaContato(props)
{
    const {setUsuario} = useContext(ContextoUsuario);
    
    function fazerLogin()
    {
        setUsuario({
                    nome:"Rafael", 
                    avatar: logado
                });
    }

    return(
        <Pagina>
            <span><strong>Entre em contato pelos telefones:</strong></span>
            <p>TEL:   (18)-2222-3333</p>
            <p>FAX:   (18)-2222-4444</p>
            <p>EMAIL: <a href="mailto:contato@empresa.com">contato@empresa.com</a></p>
            <button onClick={fazerLogin} type="button">Logar</button>
        </Pagina>
    );
}

export function Pagina404(props)
{
    return(
        <Pagina>
            <h1>Opss!! Página não existe!</h1>
        </Pagina>
    );
}