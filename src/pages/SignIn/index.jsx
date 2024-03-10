import { Container, Title, Form, Logo, Cat,Content,Linha} from './styles';
import AdopetImg from '../../assets/images/AdopetLogo.svg';
import CatImg from '../../assets/images/CatImage.png';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import {FaUser, FaLock  } from "react-icons/fa";



export const SignIn = () => {
  return (
  <Container>
      <Logo src={AdopetImg} alt="Logo do site" />
        <Content>
        <Title>Acesse sua conta</Title>
            <Form>
              <Input type="email" placeholder="E-mail" icon={FaUser}/>
              <Input type="password" placeholder="Senha"icon={FaLock }/>
              <Button title="Entrar" type="submit"/>
              <a href=''>Esqueceu sua senha?</a>
              <Linha href=''>Ou</Linha>
              <a href=''>Crie sua Conta</a>
            </Form>
        </Content>
      <Cat src={CatImg} alt="Imagem de um gato" />
</Container>
  );
};


