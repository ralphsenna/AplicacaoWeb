import {Table, Button, Container} from "react-bootstrap";
import {IconeEdicao, IconeExclusao, IconeNovo} from "../Icones/icones";

export default function TabelaCadastroClientes(props)
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
                        <th>CPF</th>
                        <th>Nome</th>
                        <th>Data de Nascimento</th>
                        <th>Endereço</th>
                        <th>Bairro</th>
                        <th>Cidade</th>
                        <th>UF</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {props.clientes.map((cliente) =>{
                        return(
                            <tr key={cliente.cpf}>
                                <td className="text-center align-middle">{cliente.cpf}</td>
                                <td className="align-middle">{cliente.nome}</td>
                                <td className="text-center align-middle">{cliente.dataNasc}</td>
                                <td className="text-center align-middle">{cliente.endereco}</td>
                                <td className="text-center align-middle">{cliente.bairro}</td>
                                <td className="text-center align-middle">{cliente.cidade}</td>
                                <td className="text-center align-middle">{cliente.uf}</td>
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
                    }}><IconeNovo/>{' '}Novo Cliente
                </Button>
            </div>
        </Container>
    );
}