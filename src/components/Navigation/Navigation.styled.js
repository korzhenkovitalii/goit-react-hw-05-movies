import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Link = styled(NavLink)`
  color: black;
  text-decoration: none;

  &.active {
    color: blue;
  }
`;

export const NavList = styled.ul`
  padding: 10px 15px;
  margin: 0 0 15px;
  box-shadow: -5px 1px 15px 1px;
  list-style-type: none;

  display: flex;
  gap: 10px;

  font-size: 24px;
`;
