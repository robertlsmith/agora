import * as React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";

const privacy = () => {
    return (
        <Layout>
            <Helmet>
                <meta charSet="utf-8" name="viewport" content="width=device-width,initial-scale=1.0"/>
                <title>Agora | Privacy Policy</title>
            </Helmet>
            <h1>Privacy Policy</h1>
        </Layout>
    )
}

export default privacy