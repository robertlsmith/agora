import * as React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";

const forgot_password = () => {
    return (
        <Layout>
            <Helmet>
                <meta charSet="utf-8" name="viewport" content="width=device-width,initial-scale=1.0"/>
                <title>Agora | Forgot Password</title>
            </Helmet>
            <h1>Forgot your password?</h1>
            <h2>No worries! We can help.</h2>
        </Layout>
    )
}

export default forgot_password