import * as React from "react";
import Navbar from "../components/Navbar";
import { Form, Button } from "react-bootstrap";
import "./styles.css";

/*
    WIP:
    - Decrese width of forms.
    - Adjust spacing between alt buttons.
*/

const signup = () => {
  return (
    <div className="signup-page">
      <Navbar />
      <h1>Sign Up</h1>
      <Form>
        {/* <input type="text" id="name" name="register" placeholder="Name"></input>
        <input type="text" id="email" name="register" placeholder="Email Address"></input>
        <input type="text" id="password" name="register" placeholder="Password"></input>
        <input type="text" id="password2" name="register" placeholder="Re-enter Password"></input> */}

        <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Control size="md" type="name" placeholder="Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control size="md" type="email" placeholder="Email Address" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control size="md" type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control size="md" type="password" placeholder="Re-enter Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <h2>Account Type:</h2>
            <Form.Check type="checkbox" label="Customer" />
            <Form.Check type="checkbox" label="Farmer" />
        </Form.Group>
        <Form.Group className="mb-3">
            <a href="/login" className="toLogin">
                <h3 id="existing-account">Already have an account? Sign in here!</h3>
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
  );
};

export default signup;