import * as React from "react"
import Navbar from "../components/Navbar";
import { Link } from "gatsby"
import { Button } from "react-bootstrap";

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
const buttonStyles = {
  marginTop: 30,
}
const fofStyles = {
  fontSize: 200,
  fontWeight: 600,
  color: "#064763",
}

// markup
const NotFoundPage = () => {
  return (
    <main style={pageStyles}>
      <Navbar/>
      <title>404 | Page Not found</title>
      <h1 style={fofStyles}>404</h1>
      <h1 style={headingStyles}>Page not found</h1>
      <p style={paragraphStyles}>
        Uh oh! We can't seem to find what you're looking for.<br />
        Please return home by clicking the button below!
        <br />
        <Link to="/"><Button style={buttonStyles} variant="signup" size="lg">Agora Home</Button></Link>
      </p>
    </main>
  )
}

export default NotFoundPage
