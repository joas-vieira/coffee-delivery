import styled from 'styled-components';
import { mixins } from '../../styles/mixins';

export const HeadingContainer = styled.section`
  position: relative;

  #heroBg {
    position: absolute;
    top: 0;
    left: 0;
    max-height: 34rem;
    width: 100%;
    object-fit: cover;
    z-index: -1;
  }
`;

export const HeadingContent = styled.div`
  display: flex;
  padding: 5.875rem 10rem;
  gap: 3.5rem;

  > div {
    display: flex;
    flex-direction: column;
    gap: 4.125rem;
  }
`;

export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    ${mixins.fonts.titleXL}
    color: ${(props) => props.theme['base-title']};
  }

  span {
    ${mixins.fonts.textL}
    color: ${(props) => props.theme['base-subtitle']};
  }
`;

export const Info = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem 2.5rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    svg {
      padding: 0.5rem;
      border-radius: 50%;
    }
  }
`;

export const CoffeeList = styled.main`
  display: flex;
  flex-direction: column;
  padding: 2rem 10rem;
  gap: 3.375rem;

  h2 {
    ${mixins.fonts.titleL}
    color: ${(props) => props.theme['base-subtitle']};
  }

  > div {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
    gap: 2.5rem 2rem;
  }
`;
