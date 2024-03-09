import { Container, Logo, Content, Cat, Title, Form} from './styles';
import AdopetImg from '../../assets/images/AdopetLogo.svg';
import CatImg from '../../assets/images/CatImage.png';
import { Button } from '../../components/Button';
import {Input} from '../../components/Input';
import {FaUser, FaLock  } from "react-icons/fa"
import {MdEmail} from "react-icons/md"

export const SignUp = () => {
    return (
        <Container>
            <Logo src={AdopetImg} alt="Logo do site" />
            <Content>
            <Title>Crie sua conta</Title>
            <Form>
                <Input  type="text" placeholder="Nome" icon={FaUser} />
                <Input type= "text" placeholder="CPF" icon={FaUser }/>
                <Input type= "email" placeholder="E-mail" icon={MdEmail}/>
                <Input type= "password" placeholder="Senha" icon={FaLock }/>
                <Button title="Cadastrar" type="submit"/>
                <a href='/'>Já tem uma conta?</a>
            </Form>
            </Content>
            <Cat src={CatImg} alt="Imagem de um gato" />
        </Container>
    )
}

