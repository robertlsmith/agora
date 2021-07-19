import * as React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";

const farmer_profile = () => {
    return (
        <Layout>
            <Helmet>
                <meta charSet="utf-8" name="viewport" content="width=device-width,initial-scale=1.0"/>
                <title>Agora | Farmer Profile</title>
            </Helmet>
            <h1>Farmer Profile</h1>
        </Layout>
    )
}

export default farmer_profile