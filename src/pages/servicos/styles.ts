import styled from 'styled-components';

interface Props {
  index: number;
}

export const Container = styled.div`
  display: flex;
  position: relative;
  width: 100vw;
  min-height: 100vh;
  background: white;
`;

export const ServicesContent = styled.ul`
  display: flex;
  height: 100vh;
  align-items: center;

  >section {
    display: flex;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;

    >div {
      display: flex;
      flex-direction: column;
      height: fit-content;
      min-width: 50%;
      width: 100%;
      justify-content: center;
      align-items: center;

      > img {
        display: flex;
        height: 100%;
        z-index: 1;
      }
      >div {
        max-width: 500px;
        height: fit-content;
        padding: 0px var(--margin-width) 0px 70px;
        z-index: 3;

        h1 {
          margin-bottom: 15px;
          position: relative;

          strong {
            font-size: 3.6rem;
            position: relative;

            ::after {
              content: '';
              position: absolute;
              height: 15px;
              width: 100%;
              bottom: 0;
              left: 0;
              mix-blend-mode: multiply;
              background: var(--secundary-color);
            }
          }
        }
      }
    }
    @media(max-width: 800px) {
      flex-direction: column;
      padding: 80px 0px;

      div {
        height: 50vh;
        >div {
          padding: 0px var(--margin-width);
        }
      }
    }
  }
`;

export const ServicesNav = styled.ul<Props>`
  display: flex;
  list-style: none;
  position: absolute;
  right: var(--margin-width);
  top: 30px;
  z-index: 5;

  li {
    display: flex;

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      background: none;
      border: 1px solid var(--primary-color);
      border-radius: 50%;
      width: 45px;
      height: 45px;
      transition: 1s;

    }

    :nth-child(${props => props.index + 1}) {
      button {
        color: white;
        border: 1px solid var(--secundary-color);
        background: var(--secundary-color);
      }
    }
  }

  li + li {
    margin-left: 15px;
  }

  @media(max-width: 800px) {
    top: 33px;

    li {
      button {
        width: 35px;
        height: 35px;
      }
    }
  }
`;

