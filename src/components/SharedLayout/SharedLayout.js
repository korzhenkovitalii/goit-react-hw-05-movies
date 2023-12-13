import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 960px;
  height: 100vh;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  height: 30px;
  gap: 12px;
  padding: 8px 0;
  border-bottom: 1px solid black;

  > nav {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: orange;
  }
`;
export const Main = styled.main`
  flex: 1 0 auto;
`;

export const Footer = styled.footer`
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  height: 54px;
  background-color: orange;
`;
