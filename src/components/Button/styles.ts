import styled from 'styled-components';

interface ContainerProps {
  color: string;
}

export const Container = styled.button<ContainerProps>`
  display: flex;
  border-radius: 10px;
  width: 200px;
  height: 40px;
  background-color: rgba(0,0,0,0);
  border: 1px solid ${props => props.color};
  justify-content: center;
  align-items: center;
  color: ${props => props.color};

  :hover {
    background: ${props => props.color};
    color: white;
  }
`;
