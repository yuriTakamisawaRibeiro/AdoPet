import { useState } from 'react';
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Container, Title, Form, Logo, Cat, Content, Linha } from './styles';
import AdopetImg from '../../assets/images/AdopetLogo.svg';
import CatImg from '../../assets/images/CatImage.png';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { FaUser, FaLock } from 'react-icons/fa';
import { auth } from '../../firebase/index';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log('Login bem-sucedido:', userCredential.user);
      // Redireciona o usuário para a rota '/home' após o login bem-sucedido
      // Use o useHistory para navegação programática se necessário
      window.location.href = '/home';
    } catch (error) {
      console.error('Erro ao fazer login:', error.message);
      setError('Erro ao fazer login. Verifique suas credenciais.');
    }
  };

  return (
    <Container>
      <Logo src={AdopetImg} alt="Logo do site" />
      <Content>
        <Title>Acesse sua conta</Title>
        <Form onSubmit={handleSignIn}>
          <Input
            type="email"
            placeholder="E-mail"
            icon={FaUser}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Senha"
            icon={FaLock}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button title="Entrar" type="submit" />
          {error && <p>{error}</p>}
          <Link to="/forgot-password">Esqueceu sua senha?</Link>
          <Linha>OU</Linha>
          <Link to="/register">Crie sua Conta</Link>
        </Form>
      </Content>
      <Cat src={CatImg} alt="Imagem de um gato" />
    </Container>
  );
};

export default SignIn;