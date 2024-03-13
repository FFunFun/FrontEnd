import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

import { MdChat, MdHomeFilled } from "react-icons/md";
import { IoMdSchool } from "react-icons/io";
import { BsPersonFill } from "react-icons/bs";

// Styled components
const FooterContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: white;
  padding: 10px 0;
  box-shadow: 0px -4px 7px rgba(0, 0, 0, 0.1); /* Add shadow above */
`;

const FooterButtons = styled.div`
  display: flex;
  justify-content: space-around;
`;

const StyledLink = styled(Link)<{ isCurrentPage: boolean }>`
  color: ${({ isCurrentPage }) => (isCurrentPage ? "#596AFF" : "black")};
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: ${({ isCurrentPage }) => (isCurrentPage ? "bold" : "normal")};
`;

const Footer: React.FC = () => {
  const location = useLocation();

  return (
    <FooterContainer>
      <FooterButtons>
        <StyledLink to="/" isCurrentPage={location.pathname === "/"}>
          <MdHomeFilled />
        </StyledLink>
        <StyledLink
          to="/chatlist"
          isCurrentPage={location.pathname === "/chatlist"}
        >
          <MdChat />
        </StyledLink>
        <StyledLink
          to="/timeline"
          isCurrentPage={location.pathname === "/timeline"}
        >
          <IoMdSchool />
        </StyledLink>
        <StyledLink
          to="/profile"
          isCurrentPage={location.pathname === "/profile"}
        >
          <BsPersonFill />
        </StyledLink>
      </FooterButtons>
    </FooterContainer>
  );
};

export default Footer;
