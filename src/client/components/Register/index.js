import React, { useState } from "react";
import { FormGroup, Button, Input } from "reactstrap";
import { Container, Row, Col } from "reactstrap";

export default ({ handleEnterChat }) => {
  const [username, setUsername] = useState("");

  const handleChange = ({ target }) => {
    const { value } = target;
    setUsername(value);
  };

  const handleSubmit = () => {
    handleEnterChat(username);
    setUsername("");
  };

  return (
    <Container>
      <Row>
        <Col>
          <FormGroup>
            <Input
              type="text"
              name="username"
              id="username"
              value={username}
              onChange={handleChange}
              placeholder="usuario"
            />
          </FormGroup>
        </Col>
        <Col>
          <Button outline color="primary" onClick={handleSubmit}>
            Entrar
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
