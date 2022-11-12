import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const MovieLink = styled(NavLink)`
  color: #2a2a2a;

  text-decoration: none;

  &.active {
    color: red;
  }

  &:hover {
    color: red;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Item = styled.li``;
