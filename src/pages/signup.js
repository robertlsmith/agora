import * as React from "react";
import { Form, Button, Container } from "react-bootstrap";
import Layout from "../components/Layout";
import { Helmet } from "react-helmet";
import styled from "styled-components";

// Styles
const StyledContainer = styled(Container) `
    display: block;
`

const StyledAccountType = styled(Form.Group) `
    text-align: center;
`

const StyledToLogin = styled.a `
    text-decoration: none;
`

const StyledExistingAccount = styled.h3 `
    color: #175570;
    text-align: center;
    
    &:hover {
        text-decoration: underline;
    }
`

const StyledSignUpBtnDiv = styled.div `
    text-align: center;
`

const StyledSignupBtn = styled(Button) `
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
    margin-bottom: 40px;
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

const StyledSignupFooter = styled.div `
    padding: 0 24px;
    display: block;
`

const StyledFooterP = styled.p `
    text-align: center;
    color: #000;
    direction: ltr;
    font-size: 14px;
    line-height: 16px;
    margin-bottom: 24px;
    margin-top: 0;
`

const StyledFooterLinks = styled.a `
    color: #064763;
    font-variant: normal;
    font-weight: 400;
    text-decoration: none;

    &:hover {
        color: #064763;
        text-decoration: underline;
    }
`

// Markdown
const signup = () => {
  return (
    <Layout>
        <Helmet>
            <meta charSet="utf-8" name="viewport" content="width=device-width,initial-scale=1.0"/>
            <title>Agora | Sign Up</title>
        </Helmet>
        <StyledContainer>
            <h1>Sign Up</h1>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Control size="md" name="name" type="text" placeholder="Name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control size="md" name="email" type="email" placeholder="Email Address" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control size="md" name="password" type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control size="md" name="password" type="password" placeholder="Re-enter Password" />
              </Form.Group>
              <StyledAccountType className="mb-3" controlId="formBasicCheckbox">
                  <h2>Account Type:</h2>
                  <Form.Check inline type="checkbox" label="Customer" />
                  <Form.Check inline type="checkbox" label="Farmer" />
              </StyledAccountType>
              <Form.Group className="mb-3">
                  <StyledToLogin href="/login">
                      <StyledExistingAccount>Already have an account? Sign in here!</StyledExistingAccount>
                  </StyledToLogin>
              </Form.Group>
              <StyledSignUpBtnDiv>
                <StyledSignupBtn type="submit">
                    Sign Up
                </StyledSignupBtn>
              </StyledSignUpBtnDiv>

              <StyledH2><StyledSpan>Or</StyledSpan></StyledH2>

              <StyledAltBtns>
                  <StyledGoogleBtn>
                      Sign up with Google
                  </StyledGoogleBtn>
                  <StyledFacebookBtn>
                      Sign up with Facebook
                  </StyledFacebookBtn>
              </StyledAltBtns>
            </Form>
            <StyledSignupFooter>
                <StyledFooterP>By continuing, you are indicating that you accept our <br></br> 
                    <StyledFooterLinks href="/tos" target="_blank">Terms of Service
                    </StyledFooterLinks> and {' '}
                    <StyledFooterLinks href="/privacy" target="_blank">Privacy Policy
                    </StyledFooterLinks>.
                </StyledFooterP>
            </StyledSignupFooter>
        </StyledContainer>
    </Layout>
  );
};

export default signup;