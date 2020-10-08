import styled, {css} from 'styled-components';

interface Props {
  index: number;
}

export const Container = styled.div`
  display: flex;
  position: fixed;
  width: fit-content;
  height: 100vh;
  right: 25px;
  z-index: 4;

  @media(max-width: 800px) {
    height: 40px;
    width: 100vw;
    justify-content: center;
    align-items: center;
    right: 0;
    bottom: 0;
    background: white;

    >ul {
      flex-direction: row;
      flex: 1;
      padding: 0px 50px;
      height: fit-content;


      li {
        writing-mode: initial;
      }
    }
  }
`;

export const NavList = styled.ul<Props>`
  display: flex;
  list-style: none;
  flex-direction: column;
  justify-content: space-between;
  padding: 15vh 0px;
  height: 100vh;

  > li {
    display: flex;
    writing-mode: vertical-rl;
    font-size: 1.4rem;

    a {
      text-decoration: none;
      color: ${props => props.index === 1? "white" : "var(--primary-color)"};
      z-index: 3;
      cursor: pointer;

      :hover {
        color: var(--secundary-color);
      }
    }

    ${props => css`
      :nth-child(${props.index}) {
        a {
          color: var(--secundary-color);
        }
      }
    `}
  }
`;
