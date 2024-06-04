import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../services/firebaseConfig";
import {
  Container,
  Content,
  GridInfos,
  Info1,
  Info2,
  InfosPost,
  InfosPost2,
  Line1,
  Line2,

} from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";


export function AboutPost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const docRef = doc(db, "posts", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setPost(docSnap.data());
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching post:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  const categoryTranslations = {
    'trainment': 'Treinamento',
    'pet-health': 'Saúde',
    'fun': 'Diversão',
    'care': 'Cuidados',
};

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!post) {
    return <p>Pet not found</p>;
  }
    
  return (
    <Container>
      <Header />
      <Content>
        <InfosPost>
          <Line1>
          <img
              src={
                post.image_url
                  ? post.image_url
                  : "https://via.placeholder.com/150"
              }
              alt={post.name}
            />
            <div>
             
            </div>
            <div>
             <p> {categoryTranslations[post.category] || post.category} </p>
            </div>
          </Line1>
          <Line2>
            <GridInfos>
              <div>
                <Info1>
                  <p>{post.description}</p>
                </Info1>
                
              </div>
            </GridInfos>
          </Line2>
        </InfosPost>

        <InfosPost2>
        <h2>{post.title}</h2>
              <p>
          {post.content}
              </p>
              <p>{`Autor | ${post.author}`}</p>
        </InfosPost2>
      </Content>
      <Footer />
    </Container>
  );
}
