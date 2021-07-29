import * as React from "react";
import { Helmet } from "react-helmet";
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "../components/Layout";
import Card from "../components/Card"; 
import HowItWorks from "../assets/how_it_works.png"

// Styles

// Links

// Markup
const IndexPage = () => {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" name="viewport" content="width=device-width,initial-scale=1.0"/>
        <title>Agora | Home</title>
      </Helmet>
      
      <div>
      <br></br>
        <div class = "landing-top">
          <h1>Local, sustainable food — just one click away</h1>
          <h3>Just enter your location below to access local farmers near you</h3>
        </div>
        {/* TODO here 

        add search bar
        move text and search bar div over to the right side
        
        */}
        
        <br></br>
        <div class = "landing-middle">
          <h1>How it works</h1>
          <img src = {HowItWorks}></img>
        </div>

        <div class="container landing-middle">
          <div>
            <h3>Input your location to help us find options most convient to you</h3>
          </div>
          
          <div>
            <h3>Search for a specific item or browse through our extensive bank of products, farms, and farmer’s markets  </h3>
          </div>

          <div>
            <h3>Finished shopping? <br/> Just add to cart, pick your preferred deliery option, and voila!<br/></h3>
          </div>
        </div>
      <br></br>
        <div class = "landing-bottom">
          <h1>Featured</h1>
          <div class = "container">
            <h3 style = {{textAlign: `center`}}>Farmer<Card></Card></h3>
            <h3 style = {{textAlign: `center`}}>Produce<Card></Card></h3>
            <h3 style = {{textAlign: `center`}}>Farmer's Market<Card></Card></h3>
          </div>
          <br></br>
        </div>
        {/* TODO here 

        pass in appropriate image, name, and description text
        
        */}
        
      </div>
    </Layout>
  );
};

export default IndexPage;
