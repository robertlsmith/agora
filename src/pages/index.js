import * as React from "react";
import { Helmet } from "react-helmet";
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "../components/Layout";
import Card from "../components/Card"; 

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
      
    {/* <div>
        <div>
        <h1>Local, sustainable food — just one click away</h1>
        <h3>Just enter your location below to access local farmers near you</h3>
      </div>

      <div>

        <h1>How it Works</h1>
        <div class = "container" >
          
          <div>
            <h3>Input your location to help us find options most convient to you</h3>
          </div>
          
        <div>
          <h3>Search for a specific item or browse through our extensive bank of products, farms, and farmer’s markets  </h3>
        </div>

        <div>
          <h3>Finished shopping? <br>Just add to cart, pick your preferred deliery option, and voila! </br>  </h3>
        </div>
        </div>
        </div>

      <div>
      <h1>Featured</h1>
      </div>
      </div>  */}
      
      
    </Layout>
  );
};

export default IndexPage;
