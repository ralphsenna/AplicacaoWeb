import {createContext, useState} from 'react'

/*O contexto do usuário precisa ser exportado para
  que outros componentes possam acessá-lo
*/
export const ContextoUsuario = createContext({});

export default function ProvedorContextoUsuario(props)
{
    const [usuario, setUsuario] = useState({
        nome:"Não logado",
        avatar:"https://faepi.edu.br/wp-content/uploads/2021/04/profile.png"
    });
  
    const dadosCompartilhados = {usuario,setUsuario}
    return(
        /*
        ContextoUsuario carrega consigo valores (value=...)
        */
        <ContextoUsuario.Provider value={dadosCompartilhados}>
            {props.children}
        </ContextoUsuario.Provider>
    );
}