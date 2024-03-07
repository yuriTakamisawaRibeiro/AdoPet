import React from 'react';
import { Container, Logo, Content, Cat, Title, Form} from './styles';
import AdopetImg from '../../assets/images/AdopetLogo.png';
import CatImg from '../../assets/images/CatImage.png';
import { Button } from '../../components/Button';
import Input from '../../components/Input';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <Container>
            <Logo src={AdopetImg} alt="Logo do site" />
            <Content>
            <Title>Crie sua conta</Title>
            <Form>
                <Input type= "text" placeholder="Nome completo"/>
                <Input type= "text" placeholder="CPF"/>
                <Input type= "email" placeholder="E-mail"/>
                <Input type= "text" placeholder="Senha"/>
                <Button title="Cadastrar" type="submit"/>
                <Link to="/login">Já tem uma conta?</Link>
            </Form>
            </Content>
            <Cat src={CatImg} alt="Imagem de um gato" />
        </Container>
    )
}

export default SignUp;
