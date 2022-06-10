import {Table, Button, Container} from "react-bootstrap";
import {IconeEdicao, IconeExclusao, IconeNovo} from "../Icones/icones";

export default function TabelaCadastroProdutos(props)
{
    function formatarMoeda(valor) 
    {
        return new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(valor);    
    }

    return(
        <Container>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Descrição do Produto</th>
                        <th>Quantidade em Estoque</th>
                        <th>Preço de Custo</th>
                        <th>Preço de Venda</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {props.produtos.map((produto) =>{
                        return(
                            <tr key={produto.codigo}>
                                <td className="text-center align-middle">{produto.codigo}</td>
                                <td className="align-middle">{produto.descricao}</td>
                                <td className="text-center align-middle">{produto.qtdEstoque}</td>
                                <td className="text-end align-middle">{formatarMoeda(produto.precoCusto)}</td>
                                <td className="text-end align-middle">{formatarMoeda(produto.precoVenda)}</td>
                                <td>
                                    <Button variant="outline-secondary"><IconeEdicao/></Button>
                                    {' '}
                                    <Button variant="outline-danger"><IconeExclusao/></Button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
            <div>
                <Button onClick={()=>{
                        props.onTabela(false);
                    }}><IconeNovo/>{' '}Novo Produto
                </Button>
            </div>
        </Container>
    );
}