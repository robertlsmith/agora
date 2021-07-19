import React, { useState, useContext } from 'react';
import { Form, Row, Col, Button, Container } from "react-bootstrap";
import Layout from "../components/Layout";
import { Helmet } from "react-helmet";
import "./styles.css";
import styled from "styled-components";
import firebase from 'gatsby-plugin-firebase';
import { AuthContext } from '../context/auth';
import { navigate } from "gatsby-link";

require('firebase/auth')

// Styles
const StyledContainer = styled(Container) `
    display: block;
`

const StyledToSomething = styled.a `
    text-decoration: none;
`

const StyledH3 = styled.h3 `
    color: #175570;
    text-align: center;
    
    &:hover {
        text-decoration: underline;
    }
`

const StyledLoginBtnDiv = styled.div `
    text-align: center;
`

const StyledLoginBtn = styled(Button) `
    background-color: #064763;
    color: #fff;
    margin-top: 10px;
    margin-bottom: 30px;
    border-style: none;
    transition: all 0.25s;

    &:hover {
        background-color: #000;
        color: #fff;
    }
`

const StyledH2 = styled.h2 `
    width: 100%; 
    text-align: center; 
    border-bottom: 1px solid #000; 
    line-height: 0.1em;
    margin: 10px 0 20px; 
`

const StyledSpan = styled.span `
    background: #fff; 
    padding: 0 10px; 
`

const StyledAltBtns = styled.div `
    text-align: center;
    margin-top: 40px;
`

const StyledGoogleBtn = styled(Button) `
    background-color: #D84635;
    color: #fff;
    margin-right: 30px;
    border-style: none;
    transition: all 0.25s;

    &:hover {
        background-color: #000;
        color: #fff;
    }
`

const StyledFacebookBtn = styled(Button) `
    background-color: #3B5998;
    color: #fff;
    margin-left: 30px;
    border-style: none;
    transition: all 0.25s;

    &:hover {
        background-color: #000;
        color: #fff;
    }
`

const Login = () => {
    const [data, setData] = useState({
        email: '',
        password: '',
        error: null,
    })

    const { setUser } = useContext(AuthContext)

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setData({ ...data, error: null })
        try {
            const result = await firebase
                .auth()
                .signInWithEmailAndPassword(data.email, data.password)
            setUser(result)
            navigate("/")
        } catch (err) {
            setData({ ...data, error: err.message })
        }
    }

    console.log(firebase.auth) // Undefined
    console.log(firebase.default.auth) // Function

    return (
        <Layout>
            <Helmet>
                <meta charSet="utf-8" name="viewport" content="width=device-width,initial-scale=1.0"/>
                <title>Agora | Login</title>
            </Helmet>
            <StyledContainer>
                <h1>Login</h1>
                <h2>Log in Below</h2>
                <Form onSubmit={handleSubmit}>
                    <Row>
                        <Col>
                            <Form.Group className="mb-4" controlId="formBasicEmail">
                                <Form.Control size="md" name="email" type="email" value={data.email} onChange={handleChange} placeholder="Your email address" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-4" controlId="formBasicPassword">
                                <Form.Control size="md" name="password" type="password" value={data.password} onChange={handleChange} placeholder="Your password" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Form.Group className="mb-3">
                        <StyledToSomething href="/forgot_password">
                            <StyledH3 id="forgot-password">Forgot your password? Click here.</StyledH3>
                        </StyledToSomething>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <StyledToSomething href="/signup">
                            <StyledH3>Don’t have an account yet? Click here to join.</StyledH3>
                        </StyledToSomething>
                    </Form.Group>
                    
                    <StyledLoginBtnDiv>
                        <StyledLoginBtn type="submit">
                            Log In
                        </StyledLoginBtn>
                    </StyledLoginBtnDiv>
                    {data.error ? <p style={{color: 'red', textAlign: 'center', fontSize: 14, marginBottom: 40}}>{data.error}</p> : null}
        
                    <StyledH2><StyledSpan>Or</StyledSpan></StyledH2>
        
                    <StyledAltBtns>
                        <StyledGoogleBtn>
                            Log in with Google
                        </StyledGoogleBtn>
                        <StyledFacebookBtn>
                            Log in with Facebook
                        </StyledFacebookBtn>
                    </StyledAltBtns>
                </Form>
            </StyledContainer>
        </Layout>
    )
}

export default Login
