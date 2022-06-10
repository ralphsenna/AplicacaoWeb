import { useState } from "react";
import { Button, Col, Container, Form, FormControl, Row } from "react-bootstrap";

export default function FormCadClilentes(props)
{
    const [cliente, setCliente] = useState({
        cpf:0,
        nome:"",
        dataNasc:"",
        endereco:"",
        bairro:"",
        cidade:"",
        uf:""
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
        setCliente({...cliente,[nome]:valor});
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

    function verificarCPF(e)
    {
        const componente = e.target;
        if(componente.value.length != 14)
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
                    <legend>Cadastro de Clientes</legend>
                    {/* CPF */}
                    <Row className="m-3">
                        <Col xs={12} md={3}>
                            <Form.Label>CPF:</Form.Label>
                        </Col>
                        <Col xs={12} md={2}>
                            <Form.Control 
                            type="text" 
                            id="cpf" 
                            name="cpf"
                            value={cliente.CPF}
                            onChange={manipularMudanca}
                            onBlur={verificarCPF}/>
                            <Form.Control.Feedback type="invalid">
                                CPF inválido!
                            </Form.Control.Feedback>
                        </Col>
                    </Row>
                    <Row className="m-3">
                        {/* Nome */}
                        <Col xs={12} md={3}>
                            <Form.Label>Nome:</Form.Label>
                        </Col>
                        <Col xs={12} md={4}>
                            <Form.Control 
                            type="text" 
                            id="nome" 
                            name="nome"
                            value={cliente.nome}
                            onChange={manipularMudanca}
                            onBlur={verificarTexto}/>
                            <FormControl.Feedback type="invalid">
                                A Nome deve possuir pelo menos 5 caracaters!
                            </FormControl.Feedback>
                        </Col>
                        {/* Data de Nascimento */}
                        <Col xs={12} md={3}>
                            <Form.Label>Data de Nascimento:</Form.Label>
                        </Col>
                        <Col xs={12} md={2}>
                            <Form.Control 
                            type="text" 
                            id="dataNasc" 
                            name="dataNasc"
                            value={cliente.dataNasc}
                            onChange={manipularMudanca}
                            onBlur={verificarTexto}/>
                            <FormControl.Feedback type="invalid">
                                Data de Nascimento inválida!
                            </FormControl.Feedback>
                        </Col>
                    </Row>
                    {/* Endereço */}
                    <Row className="m-3">
                        <Col xs={12} md={3}>
                            <Form.Label>Endereço</Form.Label>
                        </Col>
                        <Col xs={12} md={4}>
                            <Form.Control 
                            type="text" 
                            id="endereco" 
                            name="endereco"
                            value={cliente.endereco}
                            onChange={manipularMudanca}
                            onBlur={verificarTexto}/>
                            <FormControl.Feedback type="invalid">
                                Endereço inválido!
                            </FormControl.Feedback>
                        </Col>
                        {/* Bairro */}
                        <Col xs={12} md={3}>
                            <Form.Label>Bairro:</Form.Label>
                        </Col>
                        <Col xs={12} md={2}>
                            <Form.Control 
                            type="text" 
                            id="bairro" 
                            name="bairro"
                            value={cliente.bairro}
                            onChange={manipularMudanca}
                            onBlur={verificarTexto}/>
                            <FormControl.Feedback type="invalid">
                                Bairro inválido!
                            </FormControl.Feedback>
                        </Col>
                    </Row>
                    <Row className="m-3">
                        {/* Cidade */}
                        <Col xs={12} md={3}>
                            <Form.Label>Cidade:</Form.Label>
                        </Col>
                        <Col xs={12} md={5}>
                            <Form.Control 
                            type="text" 
                            id="cidade" 
                            name="cidade"
                            value={cliente.cidade}
                            onChange={manipularMudanca}
                            onBlur={verificarTexto}/>
                            <FormControl.Feedback type="invalid">
                                Cidade inválida!
                            </FormControl.Feedback>
                        </Col>
                        {/* UF */}
                        <Col xs={12} md={3}>
                            <Form.Label>UF:</Form.Label>
                        </Col>
                        <Col xs={12} md={1}>
                            <Form.Control 
                            type="text" 
                            id="uf" 
                            name="uf"
                            value={cliente.UF}
                            onChange={manipularMudanca}
                            onBlur={verificarTexto}/>
                            <FormControl.Feedback type="invalid">
                                Estado inválido!
                            </FormControl.Feedback>
                        </Col>
                    </Row>
                    {/*Botões */}
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