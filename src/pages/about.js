import * as React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import Catherine from "../assets/catherine.jpeg";
import Anoushka from "../assets/anoushka.png";
import Bri from "../assets/bri.jpg";
import Jefrin from "../assets/jefrin.jpg";
import Jen from "../assets/jen.jpg";
import Robert from "../assets/robert.png";

const about = () => {
    return (
        <Layout>
            <Helmet>
                <meta charSet="utf-8" name="viewport" content="width=device-width,initial-scale=1.0"/>
                <title>Agora | About Us</title>
            </Helmet>
            <h1>About Us</h1>
            <br></br>
            <div style = {{backgroundColor: `#FEFAE0`}}>
                <h1>The Problem</h1>
                <h3 class = "center">Farm fresh food is often difficult to find in most cities. Existing resources often offer limited information on vendor availabilities, making it less accessible to people.</h3>
                <br></br>
            </div>
            
            <div>
                <h1>Our Solution</h1> 
                <h3 class = "center">Agora is the Latin word for marketplace. And that’s exactly what we are. </h3>
                <h3 class = "center">We’re here to bridge the gap between farmers growing incredibly fresh food and consumers who are looking for a streamlined platform to purchase that kind of produce. </h3>
                <br></br>
            </div>
            
            <div style = {{backgroundColor: '#b5ca46'}} >
                <h1>Meet the Team</h1>
                <div class = "container">
                <div class = "about">
                    <img src = {Catherine} alt="Catherine"></img>
                    <h3>Catherine Hu</h3> 
                    <h3>Product Manager</h3>
                </div>
                <div class = "about">
                    <img src = {Anoushka} alt="Anoushka"></img>
                    <h3>Anoushka Gupta</h3> 
                    <h3>Designer</h3>
                 </div>
                <div class = "about">
                    <img src = {Robert} alt="Robert"></img>
                    <h3>Robert Smith</h3>
                    <h3>Software Engineer</h3> 
                </div>
                <div class = "about">   
                    <img src = {Jefrin} alt="Jefrin"></img>
                    <h3>Jefrin Jojan</h3>
                    <h3>Software Engineer</h3> 
                </div>
                <div class = "about">
                    <img src = {Bri} alt="Brianna"></img>
                    <h3>Brianna Higgins</h3>
                    <h3>Software Engineer</h3> 
                </div>
                <div class = "about">
                    <img src = {Jen} alt="Jennifer"></img>
                    <h3>Jennifer Vesper</h3>
                    <h3>Software Engineer</h3> 
                </div>
                </div>
                <br></br>
            </div>

        </Layout>
    )
}

export default about