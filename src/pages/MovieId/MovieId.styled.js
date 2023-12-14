import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Back = styled(NavLink)`
  border-radius: 4px;
  text-decoration: none;
  color: black;
  margin-bottom: 20px;
`;

export const MovieInfoWrapper = styled.div`
  display: flex;
  gap: 20px;
  padding: 8px 0;
`;

export const Poster = styled.img`
  display: block;
`;

export const Genre = styled.span`
  margin-right: 10px;
`;

export const MainMovieDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const AdditionalMovieDescription = styled.div`
  padding: '8px 0';
  bordertop: '2px solid rgba(0,0,0,0.5)';
  borderbottom: '2px solid rgba(0,0,0,0.5)';
`;

export const Link = styled(NavLink)`
  padding: 4px 8px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  margin-bottom20px &.active {
    color: white;
    background-color: orange;
  }
`;
