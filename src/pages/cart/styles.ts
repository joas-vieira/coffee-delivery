import styled from 'styled-components';
import { mixins } from '../../styles/mixins';

export const CartContainer = styled.main`
  display: flex;
  padding: 2.5rem 10rem;
  gap: 2rem;
  justify-content: space-between;
  /* max-width: 70rem; */
  /* margin: 0 auto; */
`;

export const Info = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h2 {
    ${mixins.fonts.titleXS}
    color: ${(props) => props.theme['base-subtitle']};
  }
`;

export const CartForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
  min-width: 40rem;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px;
  padding: 2.5rem;
`;

export const CardHeader = styled.header`
  display: flex;
  gap: 0.5rem;

  div {
    h3 {
      ${mixins.fonts.textM}
      color: ${(props) => props.theme['base-subtitle']};
    }

    p {
      ${mixins.fonts.textS}
      color: ${(props) => props.theme['base-text']};
    }
  }
`;

export const AddressForm = styled.div`
  display: grid;
  grid-template-columns: 12.5rem 1fr 3.75rem;
  grid-template-areas:
    'cep . .'
    'street street street'
    'number complement complement'
    'neighborhood city state';
  gap: 1rem 0.75rem;
`;

export const PaymentForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
`;

export const PaymentErrorMessage = styled.p`
  ${mixins.fonts.textXS};
  font-weight: 400;
  color: red;
`;

export const CartSummary = styled.div`
  width: 100%;
  min-width: 28rem;
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 44px 6px 44px;
  padding: 2.5rem;
`;

export const CartTotal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    span:first-child {
      ${mixins.fonts.textS}
    }

    span:last-child {
      ${mixins.fonts.textM}
    }
  }

  div:last-child {
    span {
      ${mixins.fonts.textL}
      font-weight: 700;
    }
  }
`;

export const CheckoutButton = styled.button`
  margin-top: 1.5rem;
  width: 100%;
  padding: 0.75rem;
  border-radius: 6px;
  background: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.white};
  ${mixins.fonts.buttonG}
  text-transform: uppercase;

  transition: all 0.2s;

  &:hover {
    background: ${(props) => props.theme['yellow-dark']};
  }
`;
