import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  position: relative;
  width: 100vw;
  min-height: 100vh;
`;

export const ImageMan = styled.div`
  display: flex;
  position: absolute;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: flex-end;
  z-index: 1;

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
  }
`;

export const WhiteBlockEffect = styled.section`
  display: flex;
  position: absolute;
  top: 0;
  right: 50%;
  width: 50%;
  height: 100%;
  background: white;
  mix-blend-mode: difference;
  z-index: 2;
`;

export const WhiteDivision = styled.div`
  display: flex;
  height: 100%;
  width: 50%;
  background: white;
  align-items: center;
  padding-left: 50px;

  >div {
    display: flex;
    flex-direction: column;
    width: fit-content;
    height: fit-content;
    justify-content: center;
    z-index: 3;

    h1 {
      font-family: "Anton";
      font-size: 72px;
    }

    h1 + h1 {
      @keyframes AnimationDesign {
        from {
          margin-top: -109px;
        }
        to {
          margin-top: -50px;
        }
      }
      animation: AnimationDesign 2s ease-in-out;
      margin-top: -50px;
      color: rgba(0,0,0,0);
      -webkit-text-stroke-width: 0.01px;
      -webkit-text-stroke-color: var(--primary-color);
    }
  }
`;

export const BlackDivision = styled.div`
  display: flex;
  height: 100%;
  width: 50%;
  background: black;
  justify-content: center;
  align-items: center;

  >div {
    transform: translate(10%);
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    height: fit-content;
    justify-content: center;
    z-index: 3;

    h1 {
      display: flex;
      flex-wrap: wrap;
      font-family: "Anton";
      color: white;
      font-size: 72px;
      mix-blend-mode: difference;
      z-index: 4;
    }

    span {
      color: var(--secundary-color);
      font-size: 18px;
      margin-top: -10px;
      margin-bottom: 10px;
      /* identical to box height, or 28px */
      letter-spacing: 1.6em;
    }
  }
`;

export const Stack = styled.ul`
  display: flex;
  position: absolute;
  top: 30px;
  right: 50px;
  width: fit-content;
  height: fit-content;
  list-style: none;

  li + li {
    margin-left: 15px;
  }
`;

export const About = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
  height: 100vh;
  scroll-snap-type: y mandatory;
  overflow-x: hidden;
  overflow-y: auto;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const AboutLeftDivision = styled.div`
  flex: 1;
  min-width: 50%;
  height: 100vh;
  scroll-snap-align: start;

  div {
    @keyframes AnimationText {
      from {
        transform: translateX(-100%);
      }
      to {
        transform: translateX(0);
      }
    }
    animation: AnimationText 4s;
    display: flex;
    flex-direction: column;
    padding: 0px 50px;

    h1 {
      @keyframes AnimationH1 {
        from {
          opacity: 0;
        }
        to {
          opacity: 100;
        }
      }
      animation: AnimationH1 4s;
      margin-bottom: 30px;
      position: relative;
      width: fit-content;

      ::after {
        content: "";
        position: absolute;
        bottom: -10px;
        left: 0;
        width: 100%;
        height: 10px;
        background: var(--secundary-color);
      }
    }
    p {
      @keyframes AnimationP {
        from {
          opacity: 0;
        }
        to {
          opacity: 100;
        }
      }
      animation: AnimationP 4s;
      text-align: justify;
      line-height: 153.19%;
      max-width: 500px;

      strong {
        color: var(--secundary-color);
      }
    }
  }
`;

export const AboutRightDivision = styled.div`
  flex: 1;
  position: relative;
  min-width: 600px;
  height: 100vh;
  overflow: hidden;
  scroll-snap-align: start;

  >div {
    display: flex;
    height: 100%;
  }

  ul {
    display: flex;
    flex-direction: column;
    flex: 1;
    max-width: 700px;
    padding: 0px 70px 0px 50px;
    list-style: none;
    align-items: center;

    li {
      display: flex;
      width: 100%;

      h2 {
        display: flex;
        width: 100%;
        font-weight: 500;
        margin-bottom: 15px;
        color: var(--text-color);
      }

      p {
        color: var(--text-color);
      }
    }
    li + li {
        margin-top: 15px;
      }
  }

  >div {
    @keyframes AnimationImg {
      from {
        right: -100%;
      }
      to {
        right: -350px;
      }
    }
    animation: AnimationImg 4s;
    display: flex;
    position: absolute;
    right: -350px;
  }
`;

export const AboutSymbols = styled.section`

  @keyframes AnimationSymbols {
    from {
      opacity: 0;
    }
    to {
      opacity: 100;
    }
  }
  animation: AnimationSymbols 4s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90px;


`;

export const AboutDivisionSymbols = styled.div`
  @keyframes AnimationDiv {
    from {
      opacity: 0;
    }
    to {
      opacity: 100;
    }
  }
  display: flex;
  flex: 1;
  animation: AnimationDiv 4s;
  z-index: 2;


  >div {
    display: flex;
    flex: 1;
    flex-wrap: wrap;
    background: rgba(255, 255, 255, 0.8);
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.15);
    backdrop-filter: blur(10px);
    padding: 0px 30px;
    align-items: center;
    height: 150px;
    border-radius: 10px;
    z-index: 2;
    transition: box-shadow 1s;

    :hover {
        box-shadow: 0px 30px 20px rgba(0, 0, 0, 0.15);

        h2 {
          color: var(--secundary-color);
        }

        p {
          color: var(--primary-color);
        }
      }
  }

`;

export const Services = styled.div`
  display: flex;
  position: relative;
  width: 100vw;
  height: 100vh;
`;

export const ServicesContent = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;

  >div {
    display: flex;
    flex: 1;
    flex-direction: column;
    min-width: 50%;
    justify-content: center;
    align-items: center;

    >div {
      max-width: 500px;
      padding: 0px 50px 0px 70px;

      h1 {
        margin-bottom: 15px;
        position: relative;

        strong {
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
`;

export const Portfolio = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

export const PortfolioImg = styled.div`
  display: flex;
  flex: 1;
  padding: 50px;
  justify-content: center;
  align-items: center;
  min-width: 50%;

  >div {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 100%;
    max-height: 500px;
  }
`;

export const PortfolioOptions = styled.ul`
  display: flex;
  list-style: none;
  flex: 1;
  align-items: center;
  padding: 0px 50px 0px 0px;
  min-width: 50%;

  li {
    display: flex;
    cursor: pointer;
    flex: 1;
    flex-direction: column;
    max-width: 600px;
    min-height: 150px;
    border-radius: 10px;
    justify-content: center;
    background: #FDFDFD;
    padding: 30px;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);

    div {
      display: flex;
      flex-direction: column;
      justify-content: center;

      h2 {
        margin-bottom: 15px;
      }
    }
  }
`;
