import React from "react";
import styled from "styled-components";
import { Instagram, LinkedIn, GitHub } from "@mui/icons-material";
import { Divider } from "@mui/material";

const Footer = () => {
  return (
    <FooterContainer>
        <Divider sx={{backgroundColor:"#64AE2F"}}/>
      <FooterContent>
        <h3>Greek</h3>
        <p>
          Made with <HeartIcon>&#10084;</HeartIcon> by Greek Team
        </p>
        <SocialsList>
          <li>
            <a href="https://www.instagram.com">
              <Instagram sx={{ fontSize: 30, color: "#C13584" }} />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/">
              <LinkedIn sx={{ fontSize: 30, color: "#0077B5" }} />
            </a>
          </li>
          <li>
            <a href="https://github.com/Web-Greek">
              <GitHub sx={{ fontSize: 30, color: "#000000" }} />
            </a>
          </li>
        </SocialsList>
      </FooterContent>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background-color: #fff;
  height: auto;
  padding-top: 40px;
  margin-top: 50px;
  color: #000;
  bottom: 0;
  left: 0;
  right: 0;
`;

const FooterContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;

  h3 {
    font-size: 2.1rem;
    font-weight: 500;
    text-transform: capitalize;
    line-height: 3rem;
  }

  p {
    max-width: 500px;
    margin: 10px auto;
    line-height: 28px;
    font-size: 14px;
    color: #000;
  }
`;

const HeartIcon = styled.span`
  color: red;
`;

const SocialsList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem 2rem 3rem 0;

  li {
    margin: 0 15px;
  }

`;

export default Footer;
