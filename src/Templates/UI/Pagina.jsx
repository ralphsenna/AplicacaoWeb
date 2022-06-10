import {Cabecalho} from './Cabecalho'
import {Rodape} from './Rodape'
import {Menu} from './Menu'
import '../../Estilos/Templates/principal.css'

export function Pagina(props){
    return (
        <div>
            <Cabecalho titulo="Sistema de controle financeiro"/>
            <div className="corpo">
                <aside>
                    <Menu itens={[{rotulo:"Home",url:"/"},
                                  {rotulo:"Produtos",url:"/produtos"},
                                  {rotulo:"Clientes",url:"/clientes"},
                                  {rotulo:"Contato", url:"/contato"}  
                                ]}/>
                </aside>
                <div className="conteudo">
                    {props.children}
                </div>
            </div>
            <Rodape informacao="Av. das Capivaras, 123 - Vila Carrão - São Paulo/SP  - Fone: (11) 2566-5554"/>
        </div>
    );
}