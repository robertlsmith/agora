import * as React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import styled from "styled-components";
import SearchIco from "../assets/search_ico.png"

const StyledH2 = styled.h2 `
    font-size: 20px;
`

const browse = () => {
    return (
        <Layout>
            <Helmet>
                <meta charSet="utf-8" name="viewport" content="width=device-width,initial-scale=1.0"/>
                <title>Agora | Browse</title>
            </Helmet>
            <div>
                <h1>Browse</h1>
                <StyledH2>Current Location:</StyledH2>
                <div>
                    <StyledH2>Filter:</StyledH2>
                    <StyledH2>Sort by:</StyledH2>
                    <StyledH2>Distance</StyledH2>
                    <form class="address-search">
                        <div id="submit-box">
                            <a type="submit" value="Submit"><img id="search-ico" src={SearchIco} alt="search"></img></a>
                        </div>
                         <input id="textbox" type="text" placeholder="Enter Address Here"></input>
                    </form>
                </div>
            </div>
        </Layout>
    )
}

export default browse