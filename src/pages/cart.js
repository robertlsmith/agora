import * as React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";

const cart = () => {
    return (
        <Layout>
            <Helmet>
                <meta charSet="utf-8" name="viewport" content="width=device-width,initial-scale=1.0"/>
                <title>Agora | Cart</title>
            </Helmet>
            <h1>Cart</h1>
        </Layout>
    )
}

export default cart