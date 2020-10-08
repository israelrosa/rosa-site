import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
`;

export const Main = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
`

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  width: 220px;
  height: fit-content;
  left: 50px;
  top: 30px;
  z-index: 3;
  mix-blend-mode: exclusion;

  > section {
    display: block;
    width: 50px;
    height: 2px;
    background: var(--primary-color);
  }

  > strong {
    font-size: 1.4rem;
  }

  @media (max-width: 800px) {
    > section {
      display: none;
    }
    > strong {
      display: none;
    }
  }
`;

export const SocialMedia = styled.ul`
  display: flex;
  position: absolute;
  list-style: none;
  width: fit-content;
  align-items: center;
  bottom: 30px;
  left: 50px;
  z-index: 3;

  >li {
    display: flex;
    padding-right: 20px;

    p {
      display: flex;
    }
  }

  @media (max-width: 800px) {
    display: none;
  }
`
