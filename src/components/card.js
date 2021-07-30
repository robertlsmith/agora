import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import "../components/card.css";
import { CardItems } from "./CardItems";
import FarmerIco from "../assets/farmer.png"

export default function Card() {
    return (
      <div className = "card">
        <img id="icon" src={FarmerIco} alt="icon"></img>
        <h1 id="name">Name</h1>
        <h2 id="desc">Desc</h2>
        <Button id="btn">Learn More</Button>
      </div>
    );
  }