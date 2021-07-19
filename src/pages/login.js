import * as React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import Layout from "../components/Layout";
import { Helmet } from "react-helmet";
import "./styles.css";

const login = () => {
    return (
        <Layout>
            <Helmet>
                <meta charSet="utf-8" name="viewport" content="width=device-width,initial-scale=1.0"/>
                <title>Agora | Login</title>
            </Helmet>
            <h1>Login</h1>
            <h2>Log in Below</h2>
            <Form>
                <Row>
                    <Col>
                        <Form.Group className="mb-4" controlId="formBasicEmail">
                            <Form.Control size="md" type="email" placeholder="Your email address" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-4" controlId="formBasicPassword">
                            <Form.Control size="md" type="password" placeholder="Your password" />
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group className="mb-3">
                    <a href="/forgot_password" className="toLogin">
                        <h3 id="forgot-password">Forgot your password? Click here.</h3>
                    </a>
                </Form.Group>
                <Form.Group className="mb-3">
                    <a href="/signup" className="toLogin">
                        <h3 id="new-account">Don’t have an account yet? Click here to join.</h3>
                    </a>
                </Form.Group>
                
                <Button variant="signup" type="submit">
                    Sign Up
                </Button>

                <div>
                    <hr></hr>
                    <h3>Or</h3>
                </div>
                <div className="alt-btns">
                    <Button variant="google">
                        Sign up with Google
                    </Button>
                    <Button variant="facebook">
                        Sign up with Facebook
                    </Button>
                </div>
            </Form>
        </Layout>
    )
}

export default login
