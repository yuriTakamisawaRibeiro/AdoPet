import { useEffect, useState } from 'react';
import { BiSearchAlt } from "react-icons/bi";
import Modal from 'react-modal';
import { Input } from "../../components/Input";
import { Brand, Buttons, Container, Content, CustomModal, Pagination, SearchDiv, TableForms } from "./styles";
import AdopetImg from '../../assets/images/AdopetLogo.svg';
import { SideBarAdmin } from "../../components/SideBarAdmin";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { firestore } from "../../services/firebaseConfig";

Modal.setAppElement('#root');

export function SupportCentral() {
    const [forms, setForms] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedForm, setSelectedForm] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const formsPerPage = 10; // Define the number of forms per page

    useEffect(() => {
        const fetchForms = async () => {
            const formsCollection = collection(firestore, 'support');
            const formsSnapshot = await getDocs(formsCollection);
            const formsData = formsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setForms(formsData);
        };

        fetchForms();
    }, []);

    // Filter forms based on the search term
    const filteredForms = forms.filter(form => {
        const searchTermLower = searchTerm.toLowerCase();
        return (
            form.id.toLowerCase().includes(searchTermLower) ||
            form.name.toLowerCase().includes(searchTermLower) ||
            form.email.toLowerCase().includes(searchTermLower) ||
            form.topic.toLowerCase().includes(searchTermLower) ||
            form.message.toLowerCase().includes(searchTermLower)
        );
    });

    // Pagination logic
    const indexOfLastForm = currentPage * formsPerPage;
    const indexOfFirstForm = indexOfLastForm - formsPerPage;
    const currentForms = filteredForms.slice(indexOfFirstForm, indexOfLastForm);
    const totalPages = Math.ceil(filteredForms.length / formsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const openModal = (form) => {
        setSelectedForm(form);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedForm(null);
        setIsModalOpen(false);
    };

    const handleDeleteForm = async (formId) => {
        const formDoc = doc(firestore, 'support', formId);
        await deleteDoc(formDoc);
    };

    const handleApprove = async () => {
        if (selectedForm) {
            window.location.href = `mailto:${selectedForm.email}?subject=Resposta ao seu contato&body=Olá, ${selectedForm.name},%0D%0A%0D%0A`;
            const confirmed = window.confirm("Esse chamado foi finalizado?");
            if (confirmed) {
                await handleDeleteForm(selectedForm.id);
                window.location.reload();
            } else {
                closeModal();
            }
        }
    };

    const handleReject = async () => {
        if (selectedForm) {
            await handleDeleteForm(selectedForm.id);
            closeModal();
            window.location.reload();
        }
    };

    return (
        <Container>
            <Brand>
                <img src={AdopetImg} alt="Logo do site" />
            </Brand>
            <SideBarAdmin />
            <Content>
                <h2>Formulários de Contato</h2>
                <SearchDiv>
                    <Input
                        icon={BiSearchAlt}
                        placeholder="Faça aqui sua pesquisa"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </SearchDiv>

                <TableForms>
                    <thead>
                        <tr>
                            <th>ID do Chamado</th>
                            <th>Nome</th>
                            <th>Email</th>
                            <th>Tópico</th>
                            <th>Mensagem</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentForms.map((form) => (
                            <tr key={form.id} onClick={() => openModal(form)}>
                                <td>{form.id}</td>
                                <td>{form.name}</td>
                                <td>{form.email}</td>
                                <td>{form.topic}</td>
                                <td>{form.message}</td>
                            </tr>
                        ))}
                    </tbody>
                </TableForms>
                <Pagination>
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index + 1}
                            className="page-button"
                            onClick={() => handlePageChange(index + 1)}
                        >
                            {index + 1}
                        </button>
                    ))}
                    <span>Mostrando linha {indexOfFirstForm + 1} até {Math.min(indexOfLastForm, filteredForms.length)} de {filteredForms.length}</span>
                </Pagination>
            </Content>
            {selectedForm && (
                <CustomModal
                    isOpen={isModalOpen}
                    onRequestClose={closeModal}
                    contentLabel="Detalhes do Formulário"
                >
                    <h2>Detalhes do Contato</h2>
                    <div>
                        <p><strong>ID do Chamado:</strong> {selectedForm.id}</p>
                        <p><strong>Nome:</strong> {selectedForm.name}</p>
                        <p><strong>Email:</strong> {selectedForm.email}</p>
                        <p><strong>Tópico:</strong> {selectedForm.topic}</p>
                        <p><strong>Mensagem:</strong> {selectedForm.message}</p>
                    </div>
                    <Buttons>
                        <button id='approve' onClick={handleApprove}>Atender</button>
                        <button id='reject' onClick={handleReject}>Reprovar</button>
                        <button id='close' onClick={closeModal}>Fechar</button>
                    </Buttons>
                </CustomModal>
            )}
        </Container>
    );
}
