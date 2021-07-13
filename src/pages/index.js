import * as React from "react";
// import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
// import 'bootstrap/dist/css/bootstrap.css';
import { Helmet } from "react-helmet";

// Styles

// Links

// Markup
const IndexPage = () => {
  return (
    <div className="app">
      <Helmet>
        <meta charSet="utf-8" name="viewport" content="width=device-width,initial-scale=1.0"/>
        <title>Agora</title>
      </Helmet>

      <section>
        <Navbar />
        <h1>This is where the hero page will be.</h1>
      </section>
    </div>
  );
};

export default IndexPage;
