import * as React from "react";
import Navbar from "../components/Navbar";
import { Form, Row, Col, Button } from "react-bootstrap";
import "./styles.css";

const login = () => {
    return (
        <div className="login-page">
            <Navbar/>
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
        </div>
    )
}

export default login
