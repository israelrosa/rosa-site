import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
  height: 100vh;
  scroll-snap-type: y mandatory;
  overflow-x: hidden;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background: #cfcfcf;
    width: 5px;
    border-radius: 20px;
  }

  > div {
    display: flex;
  }
`;

export const AboutLeftDivision = styled.div`
  flex: 1;
  min-width: 50%;
  min-height: 100vh;
  scroll-snap-align: start;
  align-items: center;
  justify-content: center;
  background: white;

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
    padding: 0px var(--margin-width);

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
  @media (max-width: 800px) {
  }
`;

export const AboutRightDivision = styled.div`
  flex: 1;
  position: relative;
  min-width: 600px;
  height: 100vh;
  overflow: hidden;
  scroll-snap-align: start;
  align-items: center;
  justify-content: center;
  background: white;

  >div {
    display: flex;
    height: 100%;
  }

  ul {
    display: flex;
    flex-direction: column;
    flex: 1;
    max-width: 700px;
    padding: 0px var(--margin-width) 0px;
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
    position: absolute;
    right: -350px;
  }

  @media(max-width: 800px) {
    min-width: fit-content;
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
  width: 35px;
  margin-right: 30px;

  @media (max-width: 800px) {
      display: none;
  }
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
    min-height: 150px;
    border-radius: 10px;
    z-index: 2;
    transition: box-shadow 1s;

    @media (max-width: 800px) {
      min-height: 110px;
    }

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
