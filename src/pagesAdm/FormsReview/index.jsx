import { SideBarAdmin } from "../../components/SideBarAdmin";
import { Brand, Buttons, Container, Content, CustomModal, Pagination, SearchDiv, TableForms } from "./styles";
import AdopetImg from '../../assets/images/AdopetLogo.svg';
import { Input } from "../../components/Input";
import { BiSearchAlt } from "react-icons/bi";
import { useEffect, useState } from "react";
import { addDoc, collection, deleteDoc, doc, getDocs, setDoc } from "firebase/firestore"; // Certifique-se de que o caminho esteja correto para sua configuração
import { firestore } from "../../services/firebaseConfig";
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Ajuste conforme necessário para o ambiente de sua aplicação

export function FormsReview() {
    const [formsData, setFormsData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [formType, setFormType] = useState("pets");
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedForm, setSelectedForm] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const formsPerPage = 10;

    useEffect(() => {
        const fetchData = async () => {
            const collectionName = formType === "pets" ? "formsPets" : "formsPartner";
            const formRef = collection(firestore, collectionName);

            try {
                const snapshot = await getDocs(formRef);
                const formsData = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setFormsData(formsData);
            } catch (error) {
                console.error(`Error fetching ${formType} forms:`, error);
            }
        };

        fetchData();
    }, [formType]);

    const indexOfLastForm = currentPage * formsPerPage;
    const indexOfFirstForm = indexOfLastForm - formsPerPage;

    const filteredForms = formsData.filter(form => {
        const searchTermLower = searchTerm.toLowerCase();
        if (formType === "pets") {
            return (
                form.id.toLowerCase().includes(searchTermLower) ||
                form.tutorName.toLowerCase().includes(searchTermLower) ||
                form.species.toLowerCase().includes(searchTermLower) ||
                form.breed.toLowerCase().includes(searchTermLower) ||
                form.tutorPhone.toLowerCase().includes(searchTermLower) ||
                form.tutorEmail.toLowerCase().includes(searchTermLower)
            );
        } else {
            return (
                form.id.toLowerCase().includes(searchTermLower) ||
                form.companyName.toLowerCase().includes(searchTermLower) ||
                form.email.toLowerCase().includes(searchTermLower) ||
                form.contact.toLowerCase().includes(searchTermLower)
            );
        }
    });

    const currentForms = filteredForms.slice(indexOfFirstForm, indexOfLastForm);

    const totalPages = Math.ceil(filteredForms.length / formsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleFormTypeChange = (event) => {
        setFormType(event.target.value);
        setCurrentPage(1); // Reset to first page when changing form type
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
        setCurrentPage(1); // Reset to first page when changing search term
    };

    const handleRowClick = (form) => {
        setSelectedForm(form);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedForm(null);
    };

    const handleApprove = async () => {
        try {
            // Determinar a coleção de destino com base no tipo de formulário
            const targetCollection = formType === "pets" ? "pets" : "partners";
    
            // Adicionar os dados ao documento de pet ou parceiro na coleção de destino
            const targetCollectionRef = collection(firestore, targetCollection);
            const formData = { ...selectedForm }; // Copia os dados do formulário
            delete formData.type; // Remove a propriedade "type" dos dados
    
            const docRef = doc(targetCollectionRef, selectedForm.id);
            await setDoc(docRef, formData);
    
            // Remover o formulário aprovado da coleção de formulários
            const formTypeCollection = formType === "pets" ? "formsPets" : "formsPartner";
            const formDocRef = doc(firestore, formTypeCollection, selectedForm.id);
            await deleteDoc(formDocRef);
    
            alert('Aprovado com sucesso!');
            closeModal();
            window.location.reload()
        } catch (error) {
            console.error('Erro ao aprovar o formulário:', error);
        }
    };

    const handleReject = async () => {
        const formTypeCollection = formType === "pets" ? "formsPets" : "formsPartner";
        const formDocRef = doc(firestore, formTypeCollection, selectedForm.id);
        await deleteDoc(formDocRef);
        
        alert('Reprovado com sucesso!');
        closeModal();
        window.location.reload()
    };

    return (
        <Container>
            <Brand>
                <img src={AdopetImg} alt="Logo do site" />
            </Brand>
            <SideBarAdmin />
            <Content>
                <h2>Formulários</h2>
                <SearchDiv>
                    <Input
                        icon={BiSearchAlt}
                        placeholder="Faça aqui sua pesquisa"
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                    <select className="dropdown" value={formType} onChange={handleFormTypeChange}>
                        <option value="pets">Pets</option>
                        <option value="parceiros">Parceiros</option>
                    </select>
                </SearchDiv>

                <TableForms>
                    <thead>
                        <tr>
                            {formType === "pets" ? (
                                <>
                                    <th>ID Pet</th>
                                    <th>Tutor</th>
                                    <th>Espécie Pet</th>
                                    <th>Raça</th>
                                    <th>Contato Tutor</th>
                                    <th>Email Tutor</th>
                                </>
                            ) : (
                                <>
                                    <th>ID Parceiro</th>
                                    <th>Nome Parceiro</th>
                                    <th>Contato</th>
                                    <th>Email</th>
                                    <th>Endereço</th>
                                </>
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        {currentForms.map(form => (
                            <tr key={form.id} onClick={() => handleRowClick(form)}>
                                {formType === "pets" ? (
                                    <>
                                        <td>{form.id}</td>
                                        <td>{form.tutorName}</td>
                                        <td>{form.species}</td>
                                        <td>{form.breed}</td>
                                        <td>{form.tutorPhone}</td>
                                        <td>{form.tutorEmail}</td>
                                    </>
                                ) : (
                                    <>
                                        <td>{form.id}</td>
                                        <td>{form.companyName}</td>
                                        <td>{form.contact}</td>
                                        <td>{form.email}</td>
                                        <td>{form.address}</td>
                                    </>
                                )}
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
                contentLabel="Form Details"
            >
                <h2>{formType === "pets" ? 'Detalhes do Pet' : 'Detalhes do Parceiro'}</h2>
                <div>
                    {formType === "pets" ? (
                        <>
                            <p><strong>ID Pet:</strong> {selectedForm.id}</p>
                            <p><strong>Nome do Tutor:</strong> {selectedForm.tutorName}</p>
                            <p><strong>Espécie:</strong> {selectedForm.species}</p>
                            <p><strong>Raça:</strong> {selectedForm.breed}</p>
                            <p><strong>Cor:</strong> {selectedForm.color}</p>
                            <p><strong>Gênero:</strong> {selectedForm.gender}</p>
                            <p><strong>História:</strong> {selectedForm.history}</p>
                            <p><strong>Tamanho:</strong> {selectedForm.size}</p>
                            <p><strong>Cuidados Especiais:</strong> {selectedForm.specialCare}</p>
                            <p><strong>Temperamento:</strong> {selectedForm.temperament}</p>
                            <p><strong>CEP do Tutor:</strong> {selectedForm.tutorCep}</p>
                            <p><strong>Email do Tutor:</strong> {selectedForm.tutorEmail}</p>
                            <p><strong>Telefone do Tutor:</strong> {selectedForm.tutorPhone}</p>
                            <p><strong>Redes Sociais do Tutor:</strong> {selectedForm.tutorSocialMedia}</p>
                        </>
                    ) : (
                        <>
                            <p><strong>ID Parceiro:</strong> {selectedForm.id}</p>
                            <p><strong>Nome da Empresa:</strong> {selectedForm.companyName}</p>
                            <p><strong>Segmento de Negócio:</strong> {selectedForm.businessSegment}</p>
                            <p><strong>CNPJ:</strong> {selectedForm.cnpj}</p>
                            <p><strong>Descrição da Empresa:</strong> {selectedForm.companyDescription}</p>
                            <p><strong>Contato:</strong> {selectedForm.contact}</p>
                            <p><strong>Email:</strong> {selectedForm.email}</p>
                            <p><strong>Endereço:</strong> {selectedForm.address}</p>
                            <p><strong>Data/Hora:</strong> {new Date(selectedForm.timestamp).toLocaleString()}</p>
                        </>
                    )}
                </div>
                <Buttons>
                <button id="approve" onClick={handleApprove}>Aprovar</button>
                <button id="reject" onClick={handleReject}>Reprovar</button>
                <button id="close" onClick={closeModal}>Fechar</button>
                </Buttons>
            </CustomModal>
            )}
        </Container>
    );
}