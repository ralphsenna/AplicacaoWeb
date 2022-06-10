import '../../Estilos/Templates/cabecalho.css'

/*Cabelho quer usar um contexto*/
import { useContext } from 'react';
import { ContextoUsuario } from '../../Contexto/ProvedorContextoUsuario';

export function Cabecalho(props)
{
    /*Qual contexto?*/
    /*Este daqui!*/
    const {usuario, setUsuario} = useContext(ContextoUsuario);

    return(
        <div className="cabecalho">
            <div className="titulo">
                <h1>{props.titulo}</h1>
            </div>
            <div className="usuario">
                <p>Usuário: <img src={usuario.avatar}/> {usuario.nome}</p>
            </div>
        </div>
    );
}