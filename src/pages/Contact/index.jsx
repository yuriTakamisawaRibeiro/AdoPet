import { Header } from "../../components/Header";
import { InputAlternative } from "../../components/InputAlternative";
import { Button } from "../../components/Button";
import { ContactForm, ContactInfo, Container, Form, Form2,Select, Textarea } from "./styles";
import { ButtonOrange } from "../../components/ButtonOrange";


export  default function Contact() {
    return (
        <Container>
            <Header />
            <ContactForm>
                <h1>Estamos aqui para te ajudar</h1>
                <p>Envie sua mensagem para qualquer dúvida ou sugestão</p>
                <Form>
                    <Form2>
                    <InputAlternative title="Nome" label="name" type="text" required placeholder="Digite seu nome" />
                    <InputAlternative title="Email" label="email" type="text" required placeholder="Digite seu E-mail" />
                    </Form2>
                    <Select >
                        <label htmlFor="">Assunto do seu contato</label>
                        <select onChange={e => setCategory(e.target.value)}>
                            <option value="none">Escolha um tópico</option>
                            <option value="adoption">Ajuda com adoção</option>
                            <option value="petRegister">Cadastro de Pets</option>
                            <option value="products">Produtos Adopet</option>
                            <option value="partnership">Parceirias</option>
                        </select>
                    </Select>

                    <Textarea >
                        <label htmlFor="">Mensagem</label>
                        <textarea onChange={e => setCategory(e.target.value)} placeholder="Escreva sua mensagem" />
                    </Textarea>
                    <ButtonOrange title="Enviar" />
                </Form>
            </ContactForm>
            <ContactInfo>

            </ContactInfo>
        </Container>
    )
}