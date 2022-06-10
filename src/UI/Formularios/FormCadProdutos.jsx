import { useState } from "react";
import { Button, Col, Container, Form, FormControl, Row } from "react-bootstrap";

export default function FormCadProdutos(props)
{
    const [produto, setProduto] = useState({
        codigo:0,
        desc:"",
        qtdEstoque:0,
        precoCusto:0,
        precoVenda:0
    });

    //formulário validado?
    const [formValidado, setFormValidado] = useState(false);


    //trata a submissão dos dados quando eles forem enviados (submit) 
    function manipularSubmissaoDados(e)
    {
        const formulario = e.currentTarget;
        if (formulario.checkValidity() === false)
        {
            e.preventDefault();
            e.stopPropagation();
        }
        setFormValidado(true);
    }

    /*Função genérica para manipular as entradas do formulário */         
    function manipularMudanca(e)
    {
        /*o evento "e" traz quem disparou o evento (target) */
        const componente = e.target;
        /*valor trazido pelo componente no momento em que o evento é disparado */
        const valor = componente.value;
        /*identificação do componente */
        const nome = componente.name;
        setProduto({...produto,[nome]:valor});
    }

    function verificarNumeroValido(e)
    {
        const componente = e.target;
        if(isNaN(Number(componente.value)))
        {
            componente.setCustomValidity("Erro");
            setFormValidado(false);
        }
        else
        {
            componente.setCustomValidity("");
        }
    }

    function verificarTexto(e) 
    {
        const componente = e.target;
        const texto = componente.value;
        if (texto.length < 5)
        {
            componente.setCustomValidity("Erro");
            setFormValidado(false);
        }
        else
        {
            componente.setCustomValidity("");
        }
    }

    return(
        <Container>
            <Form noValidate validated={formValidado} onSubmit={manipularSubmissaoDados} method="get" action="#">
                <fieldset className="border bg-light p-5 m-2">
                    <legend>Cadastro de Produtos</legend>
                    {/* Código */}
                    <Row className="m-3">
                        <Col xs={12} md={3}>
                            <Form.Label>Código do Produto:</Form.Label>
                        </Col>
                        <Col xs={12} md={2}>
                            <Form.Control 
                            type="text" 
                            id="codigo" 
                            name="codigo"
                            value={produto.codigo}
                            onChange={manipularMudanca}
                            onBlur={verificarNumeroValido}/>
                            <Form.Control.Feedback type="invalid">
                                Código do produto inválido!
                            </Form.Control.Feedback>
                        </Col>
                    </Row>
                    {/* Descrição do Produto */}
                    <Row className="m-3">
                        <Col xs={12} md={3}>
                            <Form.Label>Descrição do Produto:</Form.Label>
                        </Col>
                        <Col xs={12} md={6}>
                            <Form.Control 
                            type="text" 
                            id="desc" 
                            name="desc" 
                            placeholder="Digite a descrição do Produto"
                            value={produto.desc}
                            onChange={manipularMudanca}
                            onBlur={verificarTexto}/>
                            <FormControl.Feedback type="invalid">
                                A descrição do produto deve possuir pelo menos 5 caracaters!
                            </FormControl.Feedback>
                        </Col>
                    </Row>
                    {/* Qtd em estoque */}
                    <Row className="m-3">
                        <Col xs={12} md={3}>
                            <Form.Label>Qtd em Estoque:</Form.Label>
                        </Col>
                        <Col xs={12} md={3}>
                            <Form.Control 
                            type="number" 
                            id="qtdEstoque" 
                            name="qtdEstoque" 
                            min={0}
                            value={produto.qtdEstoque}
                            onChange={manipularMudanca}
                            onBlur={verificarNumeroValido}/>
                            <FormControl.Feedback type="invalid">
                                Quantidade de produto em estoque inválida!
                            </FormControl.Feedback>
                        </Col>
                    </Row>
                    {/* Preço de custo */}
                    <Row className="m-3">
                        <Col xs={12} md={3}>
                            <Form.Label>Preço de Custo R$:</Form.Label>
                        </Col>
                        <Col xs={12} md={3}>
                            <Form.Control 
                            type="text" 
                            id="precoCusto" 
                            name="precoCusto"
                            value={produto.precoCusto}
                            onChange={manipularMudanca}
                            onBlur={verificarNumeroValido}/>
                            <FormControl.Feedback type="invalid">
                                Preço de custo inválido!
                            </FormControl.Feedback>
                        </Col>
                        {/* Preço de venda */}
                        <Col xs={12} md={3}>
                            <Form.Label>Preço de Venda R$:</Form.Label>
                        </Col>
                        <Col xs={12} md={3}>
                            <Form.Control 
                            type="text" 
                            id="precoVenda" 
                            name="precoVenda"
                            value={produto.precoVenda}
                            onChange={manipularMudanca}
                            onBlur={verificarNumeroValido}/>
                            <FormControl.Feedback type="invalid">
                                Preço de venda inválido!
                            </FormControl.Feedback>
                        </Col>
                    </Row>
                    {/* Botões */}
                    <Row className="m-3">
                        <Col xs={12} md={{offset:5}}>
                            <Button variant="success" type="submit">Gravar</Button>
                        </Col>
                        <Col><Button variant="secondary" onClick={()=>{
                                props.onTabela(true);
                            }}>Voltar</Button>
                        </Col>
                    </Row>
                </fieldset>
            </Form>
        </Container>
    );
}