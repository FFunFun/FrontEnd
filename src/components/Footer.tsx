import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Styled components
const FooterContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: black;
  padding: 10px 0;
`;

const FooterButtons = styled.div`
  display: flex;
  justify-content: space-around;
`;

const StyledLink = styled(Link)`
  color: #ffffff;
  text-decoration: none;
`;

const Footer: React.FC = () => {
    return (
        <FooterContainer>
            <FooterButtons>
                <StyledLink to="/">Home</StyledLink>
                <StyledLink to="/register">Register</StyledLink>
                <StyledLink to="/timeline">Timeline</StyledLink>
                <StyledLink to="/chatlist">Chatlist</StyledLink>
            </FooterButtons>
        </FooterContainer>
    );
};

export default Footer;