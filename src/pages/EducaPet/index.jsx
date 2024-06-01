import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Commands, Container, Content, FilterDate, FilterDiv, Filters, ListDiv, MotherNew, New, SearchDiv, Topics } from "./styles";
import { BiSearchAlt } from "react-icons/bi";
import { GrCluster } from "react-icons/gr";
import imageExample from "../../assets/images/educapetExample.png";
import { collection, getDocs } from "firebase/firestore"; // Updated import
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useEffect, useState } from "react";
import Post from "../../components/Post";
import { db } from "../../services/firebaseConfig";

export function EducaPet() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'posts')); // Use db and specify the collection path
                const fetchedPosts = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setPosts(fetchedPosts);
            } catch (error) {
                console.error('Error fetching documents:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <Container>
            <Header />
            <SearchDiv>
                <div>
                    <h1> EducaPet </h1>
                    <h3> Conteúdos novos toda semana </h3>

                    <Input icon={BiSearchAlt} placeholder="Pesquise aqui o conteúdo" />
                </div>
            </SearchDiv>

            <Content>
                <FilterDiv>
                    <MotherNew>
                        <img src={imageExample} alt="" />
                        <div>
                            <GrCluster />
                            <h5>Treinamento</h5>
                            <p> 28 Mar, 2024</p>
                        </div>
                        <h1>Guiando o Caminho: Como Educar um Filhote de Cachorro - 6 Pontos Fundamentais</h1>
                        <p>Educar um filhote de cachorro pode ser uma jornada recompensadora, mas requer paciência, consistência e conhecimento.
                            Neste artigo, exploramos os seis pontos essenciais para criar um filhote feliz, saudável e bem-comportado.
                            Desde estabelecer uma rotina sólida até socialização adequada e treinamento básico, cada ponto é crucial
                            para o desenvolvimento positivo do seu novo companheiro canino.</p>

                        <div>
                            <p>Autor | Gabriel Maia</p>
                        </div>
                    </MotherNew>
                    <Filters>
                        <Topics>
                            <ul>
                                <p> Tópicos </p>
                                <li> Treinamento </li>
                                <li>Cuidados</li>
                                <li>Saúde</li>
                                <li>Nóticias</li>
                            </ul>
                        </Topics>

                        <FilterDate>

                            <label htmlFor="selectDate">Filtrar por</label>
                            <select id="selectDate">
                                <option value="latest">Mais Recente</option>
                                <option value="oldest">Mais antigos</option>
                            </select>
                        </FilterDate>
                    </Filters>

                </FilterDiv>
                <ListDiv>
                    {loading ? (
                        <p>Loading...</p>
                    ) : (
                        posts.map(post => (
                            <Post
                                key={post.id}
                                title={post.title}
                                date={post.date}
                                description={post.description}
                                content={post.content}
                                author={post.author}
                                category={post.category}
                                image_url={post.image_url}
                            />
                        ))
                    )}
                </ListDiv>
                <Commands>
                    <button><IoIosArrowBack /></button>
                    <button> 1 </button>
                    <button> 2 </button>
                    <button><IoIosArrowForward /></button>

                </Commands>
            </Content>
        </Container>
    )
}
