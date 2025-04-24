import styled from 'styled-components';
import { mixins } from '../../styles/mixins';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 10rem;
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
    color: ${(props) => props.theme['purple-dark']};
    ${mixins.fonts.textS}

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
