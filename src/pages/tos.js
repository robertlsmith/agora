import * as React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";

const tos = () => {
    return (
        <Layout>
            <Helmet>
                <meta charSet="utf-8" name="viewport" content="width=device-width,initial-scale=1.0"/>
                <title>Agora | Terms of Service</title>
            </Helmet>
            <h1>Terms of Service</h1>
        </Layout>
    )
}

export default tos