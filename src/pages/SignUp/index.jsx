import { Container, Logo, Content, Cat, Title, Form} from './styles';
import AdopetImg from '../../assets/images/AdopetLogo.svg';
import CatImg from '../../assets/images/CatImage.png';
import { Button } from '../../components/Button';
import {Input} from '../../components/Input';
import {FaUser, FaLock  } from "react-icons/fa"
import {MdEmail} from "react-icons/md"

import {createUserWithEmailAndPassword} from 'firebase/auth'
import { doc, serverTimestamp, setDoc } from "firebase/firestore"
import { useState } from 'react';
import { auth, firestore } from '../../services/firebaseConfig';

const SignUp = () => {
    const [name, setName] = useState('')
    const [cpf, setCpf] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const handleSignUp = async (e) => {
        e.preventDefault();

        try {

            const userCredential = await createUserWithEmailAndPassword(auth, email, password)
            const user = userCredential.user

            await setDoc(doc(firestore, "users", user.uid), {
                name: name,
                cpf: cpf,
                email: email,
                created_at:  serverTimestamp()
            })
            console.log("User criado com sucesso")
            window.location.href = '/home';
            
        } catch (error) {
            console.log("Erro ao criar usuario:" + error)
        }
    }
    return (
        <Container>
            <Logo src={AdopetImg} alt="Logo do site" />
            <Content>
            
            <Form>
            <Title>Crie sua conta</Title>
                <Input  type="text" placeholder="Nome" icon={FaUser} onChange={e => setName(e.target.value)}/>
                <Input type= "text" placeholder="CPF" icon={FaUser } onChange={e => setCpf(e.target.value)}/>
                <Input type= "email" placeholder="E-mail" icon={MdEmail} onChange={e => setEmail(e.target.value)}/>
                <Input type= "password" placeholder="Senha" icon={FaLock} onChange={e => setPassword(e.target.value)}/>
                <Button title="Cadastrar" onClick={handleSignUp}/>
                <a href='/'>Já tem uma conta?</a>
            </Form>
            </Content>
            <Cat src={CatImg} alt="Imagem de um gato" />
        </Container>
    )
}
export default SignUp;

