import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import "../components/card.css";
import FarmerIco from "../assets/farmer.png"

export default function Card() {
  return (
    <div className = "card">
      <img id="icon" src={FarmerIco} alt="icon" class = "center"></img>
      <h1 id="name">Name</h1>
      <h2 id="desc">Hello, this is a description of a farmer</h2>
      <Button id="btn" class = "center">Learn More</Button>
    </div>
  );
}