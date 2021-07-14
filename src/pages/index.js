import * as React from "react";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet";
import 'bootstrap/dist/css/bootstrap.min.css';

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
