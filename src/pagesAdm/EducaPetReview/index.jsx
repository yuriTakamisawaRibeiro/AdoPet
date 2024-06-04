import { useEffect, useState } from "react";
import { SideBarAdmin } from "../../components/SideBarAdmin";
import { Brand, Container, Content, New, Search, Section, CustomModal } from "./styles";
import AdopetImg from '../../assets/images/AdopetLogo.svg';
import { Input } from "../../components/Input";
import { FiSearch, FiTrash } from "react-icons/fi";
import { collection, getDocs, query, doc, deleteDoc } from "firebase/firestore";
import { firestore } from "../../services/firebaseConfig";
import Modal from 'react-modal';

Modal.setAppElement('#root');

const categoryTranslations = {
    'trainment': 'Treinamento',
    'pet-health': 'Saúde',
    'fun': 'Diversão',
    'care': 'Cuidados',
};

const customStyles = {
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    content: {
        width: '400px',
        height: 'fit-content',
        padding: '30px',
        margin: 'auto',
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        textAlign: 'center'
    }
};

const DeleteConfirmationModal = ({ isOpen, onCancel, onConfirm }) => {
    return (
        <Modal isOpen={isOpen} style={customStyles}>
            <h2 style={{ marginBottom: '8px' }}>Tem certeza que deseja excluir?</h2>
            <div className="button-container" style={{ display: 'flex', justifyContent: 'space-around', gap: '30px' }}>
                <button onClick={onConfirm} className="confirm-button" style={{ backgroundColor: 'red', color: 'white', border: 'none', borderRadius: '10px', padding: '20px' }}>Sim</button>
                <button onClick={onCancel} className="cancel-button" style={{ border: 'none', padding: '20px', borderRadius: '10px' }}>Cancelar</button>
            </div>
        </Modal>
    );
};

export function EducaPetReview() {
    const [posts, setPosts] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedPost, setSelectedPost] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);

    useEffect(() => {
        const fetchPosts = async () => {
            const postsCollection = collection(firestore, 'posts');
            const q = query(postsCollection);
            const querySnapshot = await getDocs(q);
            const postsData = [];
            querySnapshot.forEach((doc) => {
                postsData.push({ id: doc.id, ...doc.data() });
            });
            setPosts(postsData);
        };

        fetchPosts();
    }, []);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handlePostClick = (post) => {
        setSelectedPost(post);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedPost(null);
    };

    const handleDeletePost = async (postId) => {
        setDeleteConfirmationOpen(true);
        setSelectedPost(postId);
    };

    const confirmDeletePost = async () => {
        try {
            await deleteDoc(doc(firestore, 'posts', selectedPost));
            setPosts(posts.filter(post => post.id !== selectedPost));
            setDeleteConfirmationOpen(false);
            setSelectedPost(null);
        } catch (error) {
            console.error("Error deleting document: ", error);
        }
    };

    const cancelDeletePost = () => {
        setDeleteConfirmationOpen(false);
        setSelectedPost(null);
    };

    return (
        <Container>
            <Brand>
                <img src={AdopetImg} alt="Logo do site" />
            </Brand>
            <SideBarAdmin />
            <Content>
                <Search>
                    <div>
                        <Input
                            placeholder="Pesquisar pelo título"
                            icon={FiSearch}
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                    </div>
                    <a href="/postregister">Criar post</a>
                </Search>

                <Section>
                    <h2>Materias Educapet</h2>

                    {posts.map(post => (
                        <New key={post.id} onClick={() => handlePostClick(post)}>
                            <div
                                className="left-box"
                                style={{ cursor: "pointer" }}
                            >
                                <h1>{post.title}</h1>
                                <footer style={{marginTop: '5px', marginBottom: '10px'}}>
                                    <span style={{backgroundColor: '#f2d193', color: '#d69826', padding: '5px', borderRadius: '5px'}}>{categoryTranslations[post.category]}</span>
                                </footer>
                                <p>({post.id})</p>
                            </div>
                            <button className="delete" onClick={(e) => { e.stopPropagation(); handleDeletePost(post.id); }}>
                                <FiTrash />
                            </button>
                        </New>
                    ))}
                </Section>
            </Content>
            {selectedPost && (
                <CustomModal
                    isOpen={isModalOpen}
                    onRequestClose={closeModal}
                    contentLabel="Detalhes do post"
                >
                    <div>
                        <h2>Detalhes do Post</h2>
                        <p><strong>Título:</strong> {selectedPost.title}</p>
                        <p><strong>Descrição:</strong> {selectedPost.description}</p>
                        <p><strong>Categoria:</strong> {selectedPost.category}</p>
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: '10px', marginBottom: '10px' }}>
                            <p><strong>Imagem:</strong><img style={{ maxHeight: '100px', marginLeft: '15px' }} src={selectedPost.image_url} alt="" /></p>
                        </div>
                        <p><strong>Autor:</strong> {selectedPost.author}</p>
                        <button onClick={closeModal} style={{ border: 'none', float: 'right', backgroundColor: 'lightgray', padding: '10px', borderRadius: '10px', marginTop: '5px' }}>Fechar</button>
                    </div>
                </CustomModal>
            )}
            { }
            <DeleteConfirmationModal
                isOpen={deleteConfirmationOpen}
                onCancel={cancelDeletePost}
                onConfirm={confirmDeletePost}
            />
        </Container>
    );
}
