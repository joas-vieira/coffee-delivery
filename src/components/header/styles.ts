import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
`;

export const Aside = styled.div`
  display: flex;
  gap: 0.75rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    padding: 0.5rem;
    background: ${(props) => props.theme['purple-light']};
    border-radius: 6px;
    font-size: 0.875rem;
    color: ${(props) => props.theme['purple-dark']};

    svg {
      color: ${(props) => props.theme['purple']};
    }
  }

  a {
    display: flex;
    align-items: center;
    padding: 0.5rem;
    background: ${(props) => props.theme['yellow-light']};
    border-radius: 6px;

    svg {
      color: ${(props) => props.theme['yellow-dark']};
    }
  }
`;
