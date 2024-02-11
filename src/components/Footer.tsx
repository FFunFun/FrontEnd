import React from 'react';
import { Link, useLocation } from 'react-router-dom';
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

const StyledLink = styled(Link)<{ isCurrentPage: boolean }>`
    color: ${({ isCurrentPage }) => (isCurrentPage ? '#fff' : '#999')};
    text-decoration: none;
    font-weight: ${({ isCurrentPage }) => (isCurrentPage ? 'bold' : 'normal')};
`;

const Footer: React.FC = () => {
    const location = useLocation();

    return (
        <FooterContainer>
            <FooterButtons>
                <StyledLink to="/" isCurrentPage={location.pathname === '/'}>Home</StyledLink>
                <StyledLink to="/register" isCurrentPage={location.pathname === '/register'}>Register</StyledLink>
                <StyledLink to="/timeline" isCurrentPage={location.pathname === '/timeline'}>Timeline</StyledLink>
                <StyledLink to="/chatlist" isCurrentPage={location.pathname === '/chatlist'}>Chatlist</StyledLink>
            </FooterButtons>
        </FooterContainer>
    );
};

export default Footer;