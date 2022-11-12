import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;

  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;

  > nav {
    display: flex;
    gap: 12px;
    justify-content: space-between;
  }
`;
