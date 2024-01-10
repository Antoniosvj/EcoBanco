// CadastroPage.js
import React from "react";
import { Form, Col, Row, Button } from "react-bootstrap";

function CadastroPage() {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Cadastre-se</h2>
      <Form style={{ maxWidth: "800px", margin: "auto" }}>
        <Row>
          <Col md={6} sm={12}>
            <Form.Group controlId="formBasicName">
              <Form.Label>Nome</Form.Label>
              <Form.Control type="text" placeholder="Digite seu nome" />
            </Form.Group>
          </Col>
          <Col md={3} sm={6}>
            <Form.Group controlId="formBasicPhone">
              <Form.Label>Telefone</Form.Label>
              <Form.Control type="text" placeholder="Telefone" />
            </Form.Group>
          </Col>
          <Col md={3} sm={6}>
            <Form.Group controlId="formBasicBirth">
              <Form.Label>Data de Nascimento</Form.Label>
              <Form.Control type="date" placeholder="Data de Nascimento" />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6} sm={12}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Digite seu email" />
            </Form.Group>
          </Col>
          <Col md={6} sm={12}>
            <Form.Group controlId="formBasicConfirmEmail">
              <Form.Label>Confirme seu Email</Form.Label>
              <Form.Control type="email" placeholder="Confirme seu email" />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={4} sm={12}>
            <Form.Group controlId="formBasicCPF">
              <Form.Label>CPF</Form.Label>
              <Form.Control type="text" placeholder="Digite seu CPF" />
            </Form.Group>
          </Col>
        </Row>

        <hr />

        <Row>
          <Col md={4}>
            <Form.Group controlId="formBasicCEP">
              <Form.Label>CEP</Form.Label>
              <Form.Control type="text" placeholder="CEP" />
            </Form.Group>
          </Col>
          <Col md={8}>
            <Form.Group controlId="formBasicStreet">
              <Form.Label>Rua/Logradouro</Form.Label>
              <Form.Control type="text" placeholder="Rua/Logradouro" />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={2}>
            <Form.Group controlId="formBasicNumber">
              <Form.Label>Número</Form.Label>
              <Form.Control type="text" placeholder="Número" />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="formBasicComplement">
              <Form.Label>Complemento</Form.Label>
              <Form.Control type="text" placeholder="Complemento" />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formBasicNeighborhood">
              <Form.Label>Bairro</Form.Label>
              <Form.Control type="text" placeholder="Bairro" />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={4}>
            <Form.Group controlId="formBasicCity">
              <Form.Label>Cidade</Form.Label>
              <Form.Control type="text" placeholder="Cidade" />
            </Form.Group>
          </Col>
          <Col md={2}>
            <Form.Group controlId="formBasicState">
              <Form.Label>Estado</Form.Label>
              <Form.Control type="text" placeholder="Estado" />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formBasicReference">
              <Form.Label>Ponto de Referência</Form.Label>
              <Form.Control type="text" placeholder="Ponto de referência" />
            </Form.Group>
          </Col>
        </Row>

        <div className="text-center mt-3">
          <Button variant="success" type="submit">
            Cadastrar
          </Button>
        </div>
      </Form>
      <br />
    </div>
  );
}

export default CadastroPage;
