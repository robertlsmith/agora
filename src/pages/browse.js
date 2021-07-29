import * as React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";

const browse = () => {
    return (
        <Layout>
            <Helmet>
                <meta charSet="utf-8" name="viewport" content="width=device-width,initial-scale=1.0"/>
                <title>Agora | Browse</title>
            </Helmet>
            <div>
                <h1>Browse</h1>
            </div>
        </Layout>
    )
}

export default browse