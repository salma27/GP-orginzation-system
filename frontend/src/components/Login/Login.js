import React, {useState} from "react";
import {BsButton, LoginImg} from "utils";
import {Container, Row, Col, Form} from "react-bootstrap";
import "./Login.css";
import {useValidation} from "hooks";
import loginFormValidations from "./loginFormValidations";

function Login() {
    const [user, setUser] = useState({id: "", password: ""});
    const {errors, validate} = useValidation(loginFormValidations);

    const onChangeHandler = ({target: {name, value}}) => {
        const newUser = {...user, [name]: value};
        validate(user, name).catch((e) => {});
        setUser(newUser);
    };
    function submit(event) {
        event.preventDefault();
        validate(user)
            .then(() => {})
            .catch((e) => {});
    }

    return (
        <>
            <Container fluid id="login-container">
                <Row id="form">
                    <Col sm={12} className="centerImg">
                        <LoginImg id="img" />
                    </Col>
                    <Col sm={12}>
                        <Container fluid id="loginForm">
                            <Form onSubmit={submit}>
                                <Form.Group size="lg" controlId="id">
                                    <Form.Label>ID</Form.Label>
                                    <Form.Control
                                        placeholder="ID"
                                        name="id"
                                        autoFocus
                                        type="text"
                                        value={user.id}
                                        onChange={onChangeHandler}
                                        isInvalid={errors.id}
                                    />
                                    {errors.id && (
                                        <Form.Control.Feedback type="invalid">
                                            {errors.id}
                                        </Form.Control.Feedback>
                                    )}
                                </Form.Group>
                                <Form.Group size="lg" controlId="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        autoFocus
                                        type="password"
                                        name="password"
                                        placeholder="*****"
                                        value={user.password}
                                        onChange={onChangeHandler}
                                        isInvalid={errors.password}
                                    />
                                    {errors.password && (
                                        <Form.Control.Feedback type="invalid">
                                            {errors.password}
                                        </Form.Control.Feedback>
                                    )}
                                </Form.Group>
                                <BsButton
                                    size="lg"
                                    type="submit"
                                    id="loginBtn"
                                    label="Login"
                                />
                            </Form>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Login;
