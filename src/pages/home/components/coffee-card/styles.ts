import styled from 'styled-components';
import { mixins } from '../../../../styles/mixins';

export const CoffeeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 16rem;
  background: ${(props) => props.theme['base-card']};
  padding: 0 1.25rem 1.25rem;
  border-radius: 0.375rem 2.25rem;
  text-align: center;
`;

export const CoffeeImage = styled.img`
  max-width: 7.5rem;
  max-height: 7.5rem;
  align-self: center;
  margin-top: -1.25rem;
`;

export const Tags = styled.div`
  margin-top: 0.75rem;
  margin-bottom: 1rem;

  display: flex;
  align-items: center;
  align-self: center;
  gap: 0.25rem;

  span {
    ${mixins.fonts.tag}
    color: ${(props) => props.theme['yellow-dark']};
    background: ${(props) => props.theme['yellow-light']};
    padding: 0.25rem 0.5rem;
    text-transform: uppercase;
    border-radius: 6.25rem;
  }
`;

export const Title = styled.h3`
  ${mixins.fonts.titleS}
  color: ${(props) => props.theme['base-subtitle']};
  margin-bottom: 0.5rem;
`;

export const Description = styled.p`
  ${mixins.fonts.textS}
  color: ${(props) => props.theme['base-label']};
  margin-bottom: 2rem;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Price = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.25rem;

  span:first-child {
    ${mixins.fonts.textS}
    color: ${(props) => props.theme['base-text']};
  }

  span:last-child {
    ${mixins.fonts.titleM}
    color: ${(props) => props.theme['base-text']};
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const ShoppingCartButton = styled.button`
  display: flex;
  background: ${(props) => props.theme['purple-dark']};
  border-radius: 0.375rem;
  padding: 0.5rem;
  transition: background 0.2s;

  &:hover {
    background: ${(props) => props.theme['purple']};
  }
`;
