import styled from 'styled-components'

interface Props {
  offsetYPos: number;
}

interface SpanProps {
  index: number;
}

export const Container = styled.div`
  display: flex;
  position: relative;
  width: 100vw;
  min-height: 100vh;
`;

export const Home = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
  height: 100vh;

  scroll-snap-type: y mandatory;
  overflow-x: hidden;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 5px;
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: #cfcfcf;
    width: 5px;
    border-radius: 20px;
  }

  ::-webkit-scrollbar-track-piece {
    background: transparent;
  }

  @media (max-width: 800px) {
    ::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const ImageMan = styled.div`
  display: flex;
  position: absolute;
  width: fit-content;
  bottom: 0;
  left: 30%;
  z-index: 1;

  @media (max-width: 800px) {
    left: 45%;
  }

  >div {
    @keyframes AnimationMan {
      from {
        transform: translateX(10%);
      }
      to {
        transform: translateX(0);
      }
    }
    animation: AnimationMan 20s;

    >div {
      display: flex;
      height: 90vh;
      width: fit-content;
      min-width: 600px;
    }
  }
`;

export const WhiteDivision = styled.div<Props>`
  display: flex;
  flex: 1;
  height: 100vh;
  min-width: 50%;
  background: white;
  align-items: center;
  padding-left: var(--margin-width);
  z-index: 2;
  mix-blend-mode: difference;
  scroll-snap-align: start;

  >div {
    display: flex;
    flex-direction: column;
    >div {
      display: flex;
      flex-direction: column;
      width: fit-content;
      height: fit-content;
      justify-content: center;
      z-index: 3;
      height: 300px;

      h1 {
        font-family: "Anton";
        font-size: 8.2rem;

        @media (max-width: 800px) {
          font-size: 7.2rem;
        }
      }

      h1 + h1 {
        margin-top: ${props => props.offsetYPos}px;
        color: rgba(0,0,0,0);
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: var(--primary-color);
      }
    }
  }

  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const BlackDivision = styled.div`
  display: flex;
  height: 100vh;
  position: relative;
  min-width: 650px;
  background: black;
  align-items: center;
  padding: 0px 0px 0px 15vw;
  flex: 1;
  z-index: 2;
  mix-blend-mode: exclusion;
  scroll-snap-align: start;

  @media(max-width: 1300px) {
    padding: 0px var(--margin-width);
  }

  >div {
    display: flex;
    flex-direction: column;
    height: fit-content;
    z-index: 3;

    > h1 {
      display: flex;
      font-family: "Anton";
      color: white;
      font-size: 7.2rem;
      mix-blend-mode: difference;
      z-index: 4;
      @media(max-width: 800px) {
        font-size: 5.2rem;
      }
    }
  }
  @media(max-width: 800px) {
    min-width: 100%;
  }
`;

export const Spans = styled.div<SpanProps>`
  display: flex;

  > span{
      display: none;
      color: var(--secundary-color);
      flex-wrap: nowrap;
      white-space: nowrap;
      overflow: hidden;
      position: relative;
      font-size: 1.8rem;
      margin-top: -10px;
      margin-bottom: 10px;
      letter-spacing: 1.6em;

      @media(max-width: 800px) {
        font-size: 1.3rem;
        margin-top: 0px;
        letter-spacing: 2.1rem;
      }
      @keyframes AnimationSpan {
        from {
          border-right: 1px solid white;
        }
        to {
          border-right: transparent;
        }
      }

      @keyframes TypingAnimation {
        from {
          width: 0;
        }
        50% {
          width: 100%
        }
        70% {
          width: 100%;
        }
        to {
          width: 0;
        }
      }

      :nth-child(${props => props.index}) {
        display: flex;
        animation: AnimationSpan 500ms infinite, TypingAnimation 3s steps(200) 0s normal ;
      }
    }

`;

export const Stack = styled.ul`
  display: flex;
  position: absolute;
  top: 30px;
  right: var(--margin-width);
  width: fit-content;
  height: fit-content;
  list-style: none;

  li + li {
    margin-left: 15px;
  }

  @media(max-width: 800px) {
    top: 32px;

    li + li {
      margin-left: 1px;
    }
  }
`;
