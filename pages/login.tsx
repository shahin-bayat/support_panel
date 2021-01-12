import { FC } from 'react';
import { AppProps } from 'next/app';
import { Container } from '@chakra-ui/react';
import LoginForm from 'app/modules/user/containers/LoginForm';

const login: FC<AppProps> = function () {
  return (
    <Container maxW="sm" h="100vh" centerContent>
      <LoginForm />
    </Container>
  );
};

export default login;
