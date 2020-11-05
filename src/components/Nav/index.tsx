import React, { useCallback, useEffect, useState } from 'react';

import { navigate } from 'gatsby';

import { Container, NavList} from './styles';

interface Props {
  pageIndex: number;
}

const Nav: React.FC<Props> = ({ pageIndex }) => {
  const [index, setIndex] = useState(1);

  useEffect(() => {
    setIndex(pageIndex);
  }, [pageIndex]);

  return (
    <Container index={index}>
      <NavList index={index}>
        <li><a onClick={() => navigate('/')}>Home</a></li>
        <li><a onClick={() => navigate('/sobre/')}>Sobre Mim</a></li>
        <li><a onClick={() => navigate('/servicos/')}>Serviços</a></li>
        <li><a onClick={() => navigate('/portfolio/')}>Portfólio</a></li>
      </NavList>
    </Container>
  );
}

export default Nav;
