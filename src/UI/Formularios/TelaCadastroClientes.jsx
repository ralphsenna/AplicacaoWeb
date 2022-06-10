import {useState} from "react";
import FormCadClientes from "./FormCadClientes";
import TabelaCadastroClientes from "./TabelaCadastroClientes";
import {CLIENTES} from "../../Dados/Clientes";

export default function TelaCadastroClientes(props)
{
    const [mostrarTabela, setMostrarTabela] = useState(true);
    return(
        <div>
           {mostrarTabela ? <TabelaCadastroClientes onTabela={setMostrarTabela} clientes={CLIENTES}/>:
                            <FormCadClientes onTabela={setMostrarTabela}/>}
        </div>
    );
}