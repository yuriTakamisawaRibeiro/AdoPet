import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Footer } from "../../components/Footer";
import {
  Commands,
  Container,
  Content,
  FilterDate,
  FilterDiv,
  Filters,
  ListDiv,
  MotherNew,
  New,
  SearchDiv,
  Topics,
} from "./styles";
import { BiSearchAlt } from "react-icons/bi";
import { GrCluster } from "react-icons/gr";
import imageExample from "../../assets/images/educapetExample.png";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useEffect, useState } from "react";
import Post from "../../components/Post";
import { db } from "../../services/firebaseConfig";
import { useNavigate } from "react-router-dom";

export function EducaPet() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [motherNew, setMotherNew] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "posts"));
        const fetchedPosts = querySnapshot.docs.map((doc) => ({
          id: doc.id,
         ...doc.data(),
        }));
        setPosts(fetchedPosts);
      } catch (error) {
        console.error("Error fetching documents:", error);
      } finally {
        setLoading(false);
      }
    };

    const fetchMotherNew = async () => {
      try {
        const docRef = doc(db, "posts", "OU1hauBUWLcS1eafqYdC");
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setMotherNew({ id: docSnap.id,...docSnap.data() });
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching document:", error);
      }
    };

    fetchData();
    fetchMotherNew();
  }, []);

  const categoryTranslations = {
    trainment: "Treinamento",
  };

  const filteredPosts = posts.filter(
    (post) => post.id!== (motherNew? motherNew.id : null)
  );

  const sortedPosts = filteredPosts.sort((a, b) => {
    const searchTermLower = searchTerm.toLowerCase();
    const aMatches =
      a.title.toLowerCase().includes(searchTermLower) ||
      a.description.toLowerCase().includes(searchTermLower) ||
      a.author.toLowerCase().includes(searchTermLower);
    const bMatches =
      b.title.toLowerCase().includes(searchTermLower) ||
      b.description.toLowerCase().includes(searchTermLower) ||
      b.author.toLowerCase().includes(searchTermLower);

    if (aMatches &&!bMatches) {
      return -1; 
    } else if (!aMatches && bMatches) {
      return 1;
    } else {
      return 0; 
    }
  });

  return (
    <Container>
      <Header />
      <SearchDiv>
        <div>
          <h1> EducaPet </h1>
          <h3> Conteúdos novos toda semana </h3>

          <Input
            icon={BiSearchAlt}
            placeholder="Pesquise aqui o conteúdo"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </SearchDiv>

      <Content>
        <FilterDiv>
          {motherNew? (
            <MotherNew>
              <img src={motherNew.image_url || imageExample} alt="" />
              <div>
                <GrCluster />
                <h5>
                  {categoryTranslations[motherNew.category] ||
                    motherNew.category}
                </h5>
                <p>{motherNew.date}</p>
              </div>
              <h1>{motherNew.title}</h1>
              <p>{motherNew.description}</p>
              <div>
                <p>Autor | {motherNew.author}</p>
              </div>
            </MotherNew>
          ) : (
            <p>Loading...</p>
          )}
          <Filters>
            <Topics>
              <ul>
                <p> Tópicos </p>
                <li> Treinamento </li>
                <li>Cuidados</li>
                <li>Saúde</li>
                <li>Notícias</li>
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
          {loading? (
            <p>Loading...</p>
          ) : (
            sortedPosts.map((post) => (
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
          <button>
            <IoIosArrowBack />
          </button>
          <button> 1 </button>
          <button> 2 </button>
          <button>
            <IoIosArrowForward />
          </button>
        </Commands>
      </Content>
      <Footer />
    </Container>
  );
}
