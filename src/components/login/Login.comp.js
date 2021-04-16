import React from "react";
import {Container, Row, Col, Form, Button} from "react-bootstrap";


export const LoginForm = () => {
        return (
            <Container>
                <Row>
                    <Col>
                        <h1>Client login</h1>
                        <hr/>
                        <Form>
                            <Form.Group>
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    placeholder="Enter Email"
                                    required
                                />
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
}