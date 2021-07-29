import * as React from "react";
import { Container, Form, Button } from "react-bootstrap";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import Layout from "../components/Layout";

const StyledDropText = styled.h2 `
    font-size: 20px;
    text-align: center;
    padding-left: 10px;
`

const StyledDropdown = styled.div `
    border: 1px solid transparent;
    border-radius: 10px;
    background: #5C85A6;
    padding: 10px 10px;
    margin-bottom: 10px;
    width: 100%;
`

const StyledH2 = styled.h2 `
    font-size: 20px;
`

const StyledBtnDiv = styled.div `
    margin-top: 20px;
    text-align: center;
`

const StyledPubBtn = styled(Button) `
    background-color: #064763;
    color: #fff;
    border-style: none;
    transition: all 0.25s;

    &:hover {
        background-color: #000;
        color: #fff;
    }
`

const farmer_profile = () => {
    return (
        <Layout>
            <Helmet>
                <meta charSet="utf-8" name="viewport" content="width=device-width,initial-scale=1.0"/>
                <title>Agora | Farmer Profile</title>
            </Helmet>
            <Container>
                <div>
                    <h1>Farmer Profile</h1>
                    <StyledDropdown>
                        <StyledDropText>Basic Info</StyledDropText>
                    </StyledDropdown>
                    
                    <Container>
                        <div>
                            <StyledH2>Location:</StyledH2>
                        </div>

                        <div>
                            <textarea id="Agora" name="Agora" rows="1" cols="25"> 
                            </textarea>
                        </div>
                    </Container>

                    <Container>
                        <div>
                            <StyledH2>Phone:</StyledH2>
                        </div>
                        <div>
                            <textarea id="Agora" name="Agora" rows="1" cols="25"> 
                            </textarea>
                        </div>
                    </Container>

                    <Container>
                        <div>
                            <StyledH2>Website:</StyledH2>
                        </div>
                        <div>
                            <textarea id="Agora" name="Agora" rows="1" cols="25"> 
                            </textarea>
                        </div>
                    </Container>

                    <Container>
                        <div>
                            <StyledH2>Farmer's Market:</StyledH2>
                        </div>
                        <div>
                            <textarea id="Agora" name="Agora" rows="1" cols="25"> 
                            </textarea>
                        </div>
                    </Container>

                    <Container>
                        <div>
                            <StyledH2>Farm Description:</StyledH2>
                        </div>

                        <div>
                            <textarea id="Agora" name="Agora" rows="1" cols="25"> 
                            </textarea>
                        </div>
                    </Container>

                    <StyledDropdown>
                        <StyledDropText>Shipping/Delivery</StyledDropText>
                    </StyledDropdown>

                    <Container>
                        <div>
                            <StyledH2>Delivery Type: </StyledH2>
                        </div>

                        <div>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Deliver" />
                             </Form.Group>
                        </div>

                        <div>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Pickup" />
                             </Form.Group>
                        </div>

                        <div>
                            <StyledH2>Other:</StyledH2>
                        </div>

                        <div>
                        <textarea id="Agora" name="Agora" rows="1" cols="15"> 
                        </textarea>
                        </div>

                    </Container>
                    
                    
                    <Container>
                        <div> 
                            <StyledH2>Cost:</StyledH2>
                        </div>
                       
                        <div>
                            <textarea id="Agora" name="Agora" rows="1" cols="15"> 
                            </textarea>
                        </div>
                   </Container>

                   <Container>
                       <div> 
                           <StyledH2>Notes:</StyledH2>
                        </div>

                        <div>
                            <textarea id="Agora" name="Agora" rows="1" cols="15"> 
                            </textarea>
                        </div>
                   </Container>

                    <StyledBtnDiv>
                        <StyledPubBtn>Publish</StyledPubBtn>
                    </StyledBtnDiv>

              
                </div>

            </Container>
        </Layout>
    )
}

export default farmer_profile