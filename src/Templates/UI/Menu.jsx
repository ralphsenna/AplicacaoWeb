import {Link} from 'react-router-dom'
import '../../Estilos/Templates/menu.css'

export function Menu(props)
{
    //vários itens em que um item = {rotulo:"Home", url:"caminho ou href"}
    return(
        <div className="menu">
            <ul>
                {
                    props.itens.map(({rotulo,url}, i) =>{
                        return <li key={i}><Link to={url}>{rotulo}</Link></li>         
                    })
                }
            </ul>    
        </div>
    );
}