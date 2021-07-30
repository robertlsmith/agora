import * as React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import styled from "styled-components";
import SearchIco from "../assets/search_ico.png"
import Card from "../components/card"
import { Container, DropdownButton, Dropdown } from "react-bootstrap";
import { getFarmers } from "../util/farmers";

const StyledH2 = styled.h2 `
    font-size: 20px;
`

const Browse = () => {
    // React.useEffect(() => {
    //     getFarmers()
    // }, [])

    return (
        <Layout>
            <Helmet>
                <meta charSet="utf-8" name="viewport" content="width=device-width,initial-scale=1.0"/>
                <title>Agora | Browse</title>
            </Helmet>
          
            <div class = "browse-address">
                <h1>Browse</h1>
                <StyledH2>Current Location:</StyledH2><br/>
            </div>    
            
                    <div class = "container-browse">
                        
                            <div>
                                <StyledH2>Filter:</StyledH2>
                            </div>

                            <div class = "container-browse">
                                <div>
                                    <StyledH2 id="sort-label">Sort by:</StyledH2>
                                </div>
                            
                                <StyledH2>
                                <DropdownButton id="dropdown-label" title="Select">
                                <Dropdown.Item href="#/action-1">Distance</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Product</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Price</Dropdown.Item>
                                </DropdownButton>
                                </StyledH2>
                            </div>
                    </div>
                   

                  
                    <div class = "containerdivNL ">
                    
                        <form class="address-search">
                            <div id="submit-box">
                                <a type="submit" value="Submit"><img id="search-ico" src={SearchIco} alt="search"></img></a>
                            </div>
                                 <input id="textbox" type="text" placeholder="Search"></input>
                        </form>
                   
                    </div>
                  

                
                
            
        </Layout>
    )
}

export default Browse