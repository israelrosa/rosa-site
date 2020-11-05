import styled from 'styled-components';

interface PortfolioProps {
  selected: number;
}

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background: white;
`;

export const PortfolioImg = styled.div`
  display: flex;
  flex: 1;
  padding: var(--margin-width);
  justify-content: center;
  align-items: center;
  min-width: 50vh;
  max-height: 50vh;
  background: white;
  object-fit: cover;

  >div {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    min-width: 30%;
    max-width: 50vh ;
    max-height: 100%;
    object-fit: cover;
  }
`;

export const PortfolioOptions = styled.ul<PortfolioProps>`
  display: flex;
  list-style: none;
  flex-direction: column;
  flex: 1;
  max-height: 100vh;
  overflow-y: scroll;
  padding: 20px 70px 20px var(--margin-width);
  overflow-y: auto;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  align-items: center;

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background: #cfcfcf;
    width: 5px;
    border-radius: 20px;
  }

  li {
    display: flex;
    flex: 1;
    cursor: pointer;
    scroll-snap-align: start;
    flex-direction: column;
    margin: 5px 0px;
    max-height: 150px;
    border-radius: 10px;
    justify-content: center;
    background: #FDFDFD;
    padding: 30px;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);

    :nth-child(${props => props.selected + 1}) {
      border: 1px solid var(--secundary-color);

      div {
        h2 {
          color: var(--secundary-color);
        }
      }
    }


    div {
      display: flex;
      flex-direction: column;
      justify-content: center;

      h2 {
        margin-bottom: 15px;
      }
    }
    :last-child {
      margin-bottom: 40px;
    }
  }

  @media(max-width: 800px) {
    max-height: 50vh;
    min-width: fit-content;
    padding: 20px var(--margin-width);

    li {

    }
  }
`;
