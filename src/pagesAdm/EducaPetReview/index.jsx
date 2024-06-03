import { useEffect, useState } from "react";
import { SideBarAdmin } from "../../components/SideBarAdmin";
import { Brand, Container, Content, New, Search, Section } from "./styles";
import AdopetImg from '../../assets/images/AdopetLogo.svg';
import { Input } from "../../components/Input";
import { FiSearch } from "react-icons/fi";
import { collection, getDocs, query, where, orderBy } from "firebase/firestore";
import { firestore } from "../../services/firebaseConfig";

export function EducaPetReview() {
    const [posts, setPosts] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const fetchPosts = async () => {
            const postsCollection = collection(firestore, "posts");
            const q = query(
                postsCollection,
                orderBy("title"),
                where("title_lowercase", ">=", searchTerm.toLowerCase())
            );
            const postsSnapshot = await getDocs(q);
            const postsData = [];

            postsSnapshot.forEach(doc => {
                const postData = doc.data();
                postsData.push({ id: doc.id, ...postData });
            });

            setPosts(postsData);
        };

        fetchPosts();
    }, [searchTerm]);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <Container>
            <Brand>
                <img src={AdopetImg} alt="Logo do site" />
            </Brand>
            <SideBarAdmin />
            <Content>
                <Search>
                    <Input
                        placeholder="Pesquisar pelo título"
                        icon={FiSearch}
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                </Search>

                <Section>
                    <h2>Materias Educapet</h2>

                    {posts.map(post => (
                        <New key={post.id}>
                            <h1>{post.title} ({post.id})</h1>
                            <footer>
                                <span>{post.category}</span>
                            </footer>
                        </New>
                    ))}
                </Section>
            </Content>
        </Container>
    );
}