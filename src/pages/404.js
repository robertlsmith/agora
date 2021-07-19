import * as React from "react"
import { Link } from "gatsby"
import { Button } from "react-bootstrap";
import Layout from "../components/Layout";
import styled from "styled-components";

// styles
const pageStyles = {
  color: "#232129",
  textAlign: "center",
}
const headingStyles = {
  textAlign: "center",
  fontSize: 50,
  marginTop: -50,
  fontWeight: 600
}

const paragraphStyles = {
  marginBottom: 48,
  fontSize: 21
}

const StyledButton = styled(Button) `
  margin-top: 30px;
  background: #064763;
  border-style: none;
  font-size: 18px;
  transition: all 0.25s;

  &:hover {
    background: #000;
  }
`

const fofStyles = {
  fontSize: 200,
  fontWeight: 600,
  color: "#064763",
}

// markup
const NotFoundPage = () => {
  return (
    <Layout>
      <main style={pageStyles}>
        <title>404 | Page Not found</title>
        <h1 style={fofStyles}>404</h1>
        <h1 style={headingStyles}>Page not found</h1>
        <p style={paragraphStyles}>
          Uh oh! We can't seem to find what you're looking for.<br />
          Please return home by clicking the button below!
          <br />
          <Link to="/">
            <StyledButton size="lg">Go Home</StyledButton>
          </Link>
        </p>
      </main>
    </Layout>
  )
}

export default NotFoundPage
