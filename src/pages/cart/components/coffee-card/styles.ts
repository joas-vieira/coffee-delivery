import styled from 'styled-components';
import { mixins } from '../../../../styles/mixins';

export const CoffeeCardContainer = styled.div`
  display: flex;
  justify-content: space-between;

  > div {
    display: flex;
    gap: 1.25rem;

    img {
      width: 4rem;
      height: 4rem;
    }

    > div {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
  }
`;

export const Title = styled.span`
  color: ${(props) => props.theme['base-subtitle']};
`;

export const Actions = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.375rem 0.5rem;
  background-color: ${(props) => props.theme['base-button']};
  border: none;
  border-radius: 6px;

  &:hover {
    background-color: ${(props) => props.theme['base-hover']};
  }

  span {
    ${mixins.fonts.buttonM}
    color: ${(props) => props.theme['base-text']};
    text-transform: uppercase;
  }
`;

export const Price = styled.span`
  font-weight: 700;
`;
