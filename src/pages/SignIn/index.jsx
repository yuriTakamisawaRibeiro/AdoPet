import React from 'react';
import { Container, Title, Form, Logo, Cat,Content} from './styles';
import AdopetImg from '../../assets/images/AdopetLogo.png';
import CatImg from '../../assets/images/CatImage.png';
import { Button } from '../../components/Button';
import Input from '../../components/Input';

export const SignIn = () => {
  return (
  <Container>
      <Logo src={AdopetImg} alt="Logo do site" />
        <Content>
        <Title>Acesse sua conta</Title>
            <Form>
              <Input type="email" placeholder="E-mail" />
              <Input type="password" placeholder="Senha" />
              <Button title="Entrar" type="submit"/>
              <a href=''>Esqueceu sua senha?</a>
            </Form>
        </Content>
      <Cat src={CatImg} alt="Imagem de um gato" />
</Container>
  );
};


