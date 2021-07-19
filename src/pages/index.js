import * as React from "react";
import { Helmet } from "react-helmet";
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "../components/Layout";

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
      <section>
        <h1>This is where the hero page will be.</h1>
      </section>
    </Layout>
  );
};

export default IndexPage;
