import * as React from "react";
import { Helmet } from "react-helmet";
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "../components/Layout";
import Card from "../components/card"; 
import HowItWorks from "../assets/how_it_works.png"
import SearchIco from "../assets/search_ico.png"
import GirlShopping from "../assets/girl_with_shoppingbag.png"

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
          <img src={GirlShopping} alt="Girl with shopping bag."></img>
          <h1>Local, sustainable food — just one click away</h1>
          <h3>Just enter your location below to access local farmers near you</h3>
          <form class="address-search">
            <div id="submit-box">
              <a type="submit" value="Submit"><img id="search-ico" src={SearchIco} alt="search"></img></a>
            </div>
            <input id="textbox" type="text" placeholder="Enter Address Here"></input>
          </form>
        </div>
        {/* TODO here 

        add search bar
        move text and search bar div over to the right side
        
        */}
        
        <br></br>
        <div class = "landing-middle">
          <h1>How it works</h1>
          <img src = {HowItWorks} alt="icons"></img>
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
            <h3 style = {{textAlign: `center`}} class = "center">Farmer</h3>
            <h3 style = {{textAlign: `center`}} class = "center">Produce</h3>
            <h3 style = {{textAlign: `center`}} class = "center">Farmer's Market</h3>
          </div>
          <div class = "container">
          <Card></Card>
          <Card></Card>
          <Card></Card>
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
