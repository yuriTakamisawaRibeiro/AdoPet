import { SideBarAdmin } from "../../components/SideBarAdmin";
import { Brand, Container, Content, Pagination, SearchDiv, TableForms } from "./styles";
import AdopetImg from '../../assets/images/AdopetLogo.svg';
import { Input } from "../../components/Input";
import { BiSearchAlt } from "react-icons/bi";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore"; // Certifique-se de que o caminho esteja correto para sua configuração
import { firestore } from "../../services/firebaseConfig";

export function FormsReview() {
    const [formsData, setFormsData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [formType, setFormType] = useState("pets");
    const [searchTerm, setSearchTerm] = useState("");
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
                form.partnerName.toLowerCase().includes(searchTermLower) ||
                form.partnerPhone.toLowerCase().includes(searchTermLower) ||
                form.partnerEmail.toLowerCase().includes(searchTermLower) ||
                form.partnerAddress.toLowerCase().includes(searchTermLower)
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
                        <option value="pets">Pet's</option>
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
                            <tr key={form.id}>
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
                                        <td>{form.partnerName}</td>
                                        <td>{form.partnerPhone}</td>
                                        <td>{form.partnerEmail}</td>
                                        <td>{form.partnerAddress}</td>
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
        </Container>
    );
}
