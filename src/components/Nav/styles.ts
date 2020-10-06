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
    font-size: 14px;

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
