import React, { useCallback, useEffect, useState } from 'react';

import { Container, NavList} from './styles';

interface Props {
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
}

const Nav: React.FC<Props> = ({index, setIndex}) => {


  const handleChangePage = useCallback((page) => {
    setIndex(page);
  }, []);

  return (
    <Container>
      <NavList index={index}>
        <li><a onClick={() => handleChangePage(1)}>Home</a></li>
        <li><a onClick={() => handleChangePage(2)}>Sobre Mim</a></li>
        <li><a onClick={() => handleChangePage(3)}>Serviços</a></li>
        <li><a onClick={() => handleChangePage(4)}>Portfólio</a></li>
      </NavList>
    </Container>
  );
}

export default Nav;
