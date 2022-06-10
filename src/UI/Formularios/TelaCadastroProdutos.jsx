import {useState} from "react";
import FormCadProdutos from "./FormCadProdutos";
import TabelaCadastroProdutos from "./TabelaCadastroProdutos";
import {PRODUTOS} from "../../Dados/Produtos";

const localRecursos = "http://localhost:4000/produtos";

export default function TelaCadastroProdutos(props)
{
    const [mostrarTabela, setMostrarTabela] = useState(true);

    function buscarProdutos() 
    {
        fetch(localRecursos,{method:"GET"}).then(resposta => resposta.json()).then(produtos => {
            return produtos;
        });
    }

    return(
        <div>
           {mostrarTabela ? <TabelaCadastroProdutos onTabela={setMostrarTabela} produtos={buscarProdutos()}/>:
                            <FormCadProdutos onTabela={setMostrarTabela}/>}
        </div>
    );
}