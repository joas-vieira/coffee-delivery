import styled from 'styled-components';
import { mixins } from '../../styles/mixins';

export const SuccessContainer = styled.main`
  display: flex;
  flex-direction: column;
  padding: 5rem 10rem;
  gap: 2.5rem;
`;

export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  h1 {
    ${mixins.fonts.titleL}
    color: ${(props) => props.theme['yellow-dark']};
  }

  span {
    ${mixins.fonts.textL}
    color: ${(props) => props.theme['base-subtitle']};
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const InfoBackground = styled.div`
  border-radius: 6px 36px;
  min-width: 32rem;

  border: 1px solid transparent;
  background-origin: border-box;
  background-image: linear-gradient(
    to bottom right,
    ${(props) => props.theme['yellow']},
    ${(props) => props.theme['purple']}
  );
`;

export const Info = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  padding: 2.5rem;
  border-radius: 6px 36px;
  background: ${(props) => props.theme['white']};

  > div {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    > svg {
      padding: 0.5rem;
      border-radius: 50%;
      color: ${(props) => props.theme['white']};
    }

    > div {
      display: flex;
      flex-direction: column;
    }
  }
`;
