import styled from 'styled-components';

export const InputNumberContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  border-radius: 0.375rem;
  background: ${({ theme }) => theme['base-button']};

  button {
    display: flex;
    align-items: center;
    background: transparent;

    svg {
      color: ${({ theme }) => theme.purple};

      transition: color 0.2s;

      &:hover {
        color: ${({ theme }) => theme['purple-dark']};
      }
    }
  }

  span {
    color: ${({ theme }) => theme['base-title']};
  }
`;
