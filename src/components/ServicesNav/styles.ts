import styled from 'styled-components';

interface Props {
  index: number;
}

export const Container = styled.ul<Props>`
  display: flex;
  list-style: none;
  position: absolute;
  right: 50px;
  top: 30px;

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

    :nth-child(${props => props.index}) {
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
`;
