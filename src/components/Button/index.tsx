import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  color: string;
}

const Button: React.FC<Props> = ({color, children, ...rest}) => {
  return (
    <Container color={color} {...rest}>
      {children}
    </Container>
  );
}

export default Button;
