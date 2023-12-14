import styled from 'styled-components';

export const CastBox = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
`;

export const CastItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const ActorPhoto = styled.img`
  display: block;
  width: 100px;
`;

export const ActorName = styled.p`
  font-size: 12px;
  text-align: center;
`;
