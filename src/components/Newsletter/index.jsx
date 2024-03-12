import { Container, Content, EmailInput, Title4, ButtonNewsletter } from "./styles";
import { Input } from '../../components/Input';

export function Newsletter() {
    return (
        <Container>
            <Content>
                <Title4>Assine nossa Newsletter e receba novidades do Educapet!</Title4>
                <EmailInput>
                    <Input type="text" placeholder="Digite seu endereço de email"></Input>
                    <ButtonNewsletter>Inscreva-se</ButtonNewsletter>
                </EmailInput>
            </Content>
        </Container>
    )
}