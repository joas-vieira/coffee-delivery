import styled from 'styled-components';
import { mixins } from '../../../styles/mixins';

export const RadioContainer = styled.label`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  border-radius: 6px;
  border: 1px solid transparent;
  background: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-text']};
  ${mixins.fonts.buttonM}
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: ${(props) => props.theme['base-hover']};
  }

  &[data-state='true'] {
    background: ${(props) => props.theme['purple-light']};
    border: 1px solid ${(props) => props.theme.purple};
  }

  input {
    display: none;
  }

  svg {
    color: ${(props) => props.theme.purple};
  }
`;
