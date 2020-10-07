import React from 'react';

import { Container } from './styles';

interface Props {
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
}

const ServicesNav: React.FC<Props> = ({index, setIndex}) => {
  return (
    <Container index={index}>
      <li><button onClick={() => setIndex(1)}>1</button></li>
      <li><button onClick={() => setIndex(2)}>2</button></li>
      <li><button onClick={() => setIndex(3)}>3</button></li>
      <li><button onClick={() => setIndex(4)}>4</button></li>
    </Container>
  );
}

export default ServicesNav;
