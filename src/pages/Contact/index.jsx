import { useState } from "react";
import { Header } from "../../components/Header";
import { InputAlternative } from "../../components/InputAlternative";
import { ContactForm, ContactInfo, Container, Content, Form, Form2, Line, Select, Textarea } from "./styles";
import { ButtonOrange } from "../../components/ButtonOrange";
import { Footer } from "../../components/Footer";
import { MdLocalPhone, MdOutlineLocationOn } from "react-icons/md";
import { FaGoogle, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { firestore } from "../../services/firebaseConfig"; // Import the configured Firestore instance
import { addDoc, collection } from "firebase/firestore"; // Import Firestore methods

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        topic: 'none',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const supportCollection = collection(firestore, 'support');
            await addDoc(supportCollection, formData);
            alert('Sua mensagem foi enviada com sucesso!');
            setFormData({
                name: '',
                email: '',
                topic: 'none',
                message: ''
            });
        } catch (error) {
            console.error('Erro ao enviar a mensagem:', error);
            alert('Ocorreu um erro ao enviar sua mensagem. Tente novamente.');
        }
    };

    return (
        <Container>
            <Header />
            <Content>
                <ContactForm>
                    <h1>Estamos aqui para te ajudar</h1>
                    <p>Envie sua mensagem para qualquer dúvida ou sugestão</p>
                    <Form onSubmit={handleSubmit}>
                        <Form2>
                            <InputAlternative
                                title="Nome"
                                label="name"
                                type="text"
                                required
                                placeholder="Digite seu nome"
                                value={formData.name}
                                onChange={handleChange}
                            />
                            <InputAlternative
                                title="Email"
                                label="email"
                                type="email"
                                required
                                placeholder="Digite seu E-mail"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </Form2>
                        <Select>
                            <label htmlFor="topic">Assunto do seu contato</label>
                            <select
                                name="topic"
                                value={formData.topic}
                                onChange={handleChange}
                                required
                            >
                                <option value="none">Escolha um tópico</option>
                                <option value="adoption">Ajuda com adoção</option>
                                <option value="petRegister">Cadastro de Pets</option>
                                <option value="products">Produtos Adopet</option>
                                <option value="partnership">Parceirias</option>
                            </select>
                        </Select>
                        <Textarea>
                            <label htmlFor="message">Mensagem</label>
                            <textarea
                                name="message"
                                placeholder="Escreva sua mensagem"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </Textarea>
                        <ButtonOrange onClick={handleSubmit} title="Enviar" />
                    </Form>
                </ContactForm>
                <ContactInfo>
                    <div>
                        <h1>
                            Fale conosco
                        </h1>
                        <p>
                            Estamos sempre aqui para ouvir você e responder ás suas perguntas sobre adoção, nossa plataforma e como você pode ajudar a fazer diferença na vida de animais em busca de um lar amoroso.
                        </p>
                    </div>
                    <Line />
                    <div>
                        <h1>
                        Endereço
                        </h1>
                        <p>
                         <MdOutlineLocationOn/>   Av. Águia de Haia, 2983 - Cidade Antônio Estêvão de Carvalho, São Paulo - SP
                        </p>
                    </div>
                    <Line />
                    <div>
                        <h1>
                        Telefone
                        </h1>
                        <p>
                         <MdLocalPhone/>   +55 (11) 95158-0560 <br/> +55 (11) 95158-0560
                        </p>
                    </div>
                    <Line />
                    <div>
                        <h1>
                        Redes   
                        </h1>
                        <p>
                        Você também pode se conectar conosco através das nossas redes sociais para uma resposta rápida e interativa. Estamos ansiosos para ouvir você
                        </p>
                        <ul>
                            <FaInstagram/>
                            <FaTwitter />
                            <FaLinkedin/>
                            <FaGoogle/>
                        </ul>
                    </div>
                    <Line />
                </ContactInfo>
            </Content>
            <Footer />
        </Container>
    );
}
