import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const HeaderStyled = styled.header`
  background-color: #6bb7c6;
`;

export const UlStyled = styled.ul`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const NavLinkStyled = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: #2a363b;
  &.active {
    color: blue;
  }
`;
