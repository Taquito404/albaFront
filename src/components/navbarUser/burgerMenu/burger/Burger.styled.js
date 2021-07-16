import styled from "styled-components";

export const StyledBurger = styled.button`
  transform: rotate(90deg)
    ${({ open }) => (open ? "rotate(90deg)" : "rotate(0)")};
  width: 2rem;
  height: 2rem;
  border: none;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
`;
