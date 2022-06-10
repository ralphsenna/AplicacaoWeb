import '../../Estilos/Templates/cabecalho.css'

export function Rodape(props)
{
    return(
        <div className="rodape">
            <p>{props.informacao}</p>
        </div>
    );
}