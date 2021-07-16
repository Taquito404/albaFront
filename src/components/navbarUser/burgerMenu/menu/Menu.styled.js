import styled from "styled-components";

export const StyledMenu = styled.nav`
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  background-color: #ffe5d9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-height: 60vh;
  text-align: left;
  padding: 1rem 0;
  position: absolute;
  top: 42px;
  left: 0;
  width: 55%;
  transition: transform 0.3s ease-in-out;
  z-index: 999;
  a {
    font-family: Playfar;
    font-size: 0.9rem;
    padding: 0.5rem 0.5rem;
    text-decoration: none;
    width: 100%;
  }
`;
