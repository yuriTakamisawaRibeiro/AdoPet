import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../services/firebaseConfig";
import {
  AdoptionTerms,
  Container,
  Content,
  GridInfos,
  InfosAdopet,
  InfosPet,
  Line1,
  Line2,
  SendForm,
  Info1,
  Info2
} from "./styles";
import { Header } from "../../components/Header";
import { IoMdHeartEmpty } from "react-icons/io";
import { Footer } from "../../components/Footer";
import { ButtonOrange } from "../../components/ButtonOrange";
import { useNavigate } from "react-router-dom";

export function AboutPet() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pet, setPet] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPet = async () => {
      try {
        const docRef = doc(db, "pets", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setPet(docSnap.data());
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching pet:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPet();
  }, [id]);

  const navigateToFormAdotante = () => {
    navigate("/formadotante");
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!pet) {
    return <p>Pet not found</p>;
  }

  return (
    <Container>
      <Header />
      <Content>
        <InfosPet>
          <Line1>
            <img
              src={
                pet.fileUrls
                  ? pet.fileUrls[0]
                  : "https://via.placeholder.com/150"
              }
              style={{borderRadius: '10px'}}
              alt={pet.name}
            />
            <div>
              <h2>{pet.species}</h2>
              <IoMdHeartEmpty />
            </div>
            <div>
              <p>{pet.breed}</p>
              <p>{pet.gender}</p>
              <p>{pet.size}</p>
            </div>
          </Line1>
          <Line2>
            <h2> Mais informações </h2>
            <GridInfos>
              <div>
                <Info1>
                  <h4>Informações</h4>
                  <p>{pet.history}</p>
                  <br />
                  <h4>Cuidados especiais</h4>
                  <p>{pet.specialCare}</p>
                </Info1>
                
              </div>
              <Info2>
              <h4>Contato Responsável</h4>
              <p>E-mail: {pet.tutorEmail}</p>
              
              </Info2>
            </GridInfos>
          </Line2>
        </InfosPet>

        <InfosAdopet>
          <SendForm>
            <h2>Interessado em me Adotar?</h2>
            <h5>Envie um formulário para meu responsável</h5>
            <ButtonOrange
              title="Enviar Formulário"
              onClick={navigateToFormAdotante}
            />
          </SendForm>

          <AdoptionTerms>
            <div>
              <h2>Adoção Responsável</h2>
              <p>
                Adotar um animal de estimação é mais do que simplesmente trazer
                um novo membro para a família; é assumir a responsabilidade de
                cuidar de uma vida que depende totalmente de nós. Aqui estão
                alguns princípios-chave da adoção responsável: Ao adotar um
                animal, comprometa-se a cuidar dele por toda a vida do animal,
                que pode durar muitos anos. Isso inclui prover alimentação
                adequada, cuidados veterinários regulares, exercício, e carinho
                constante. Ofereça um ambiente seguro e confortável para o
                animal em sua casa. Isso inclui fornecer abrigo adequado,
                brinquedos e estimulação mental, além de proteger o animal de
                perigos externos. Mantenha em dia as vacinações, desparasitações
                e consultas veterinárias regulares. Esteja preparado para
                enfrentar desafios de saúde que possam surgir ao longo da vida
                do animal.
              </p>
            </div>
            <div>
              <h2>Isenção de Responsabilidade</h2>
              <p>
                A Adopet é uma plataforma que conecta potenciais adotantes a
                animais de estimação em busca de um lar, e a abrigos e
                organizações de adoção. Não garantimos a precisão das
                informações sobre os animais, que são fornecidas pelas
                organizações responsáveis. Os usuários devem verificar as
                informações diretamente com os abrigos antes de adotar. A Adopet
                não é responsável por problemas decorrentes da adoção. Não
                realizamos processos de adoção diretamente. Estamos
                comprometidos com a adoção responsável e o bem-estar animal.
              </p>
            </div>
          </AdoptionTerms>
        </InfosAdopet>
      </Content>
      <Footer />
    </Container>
  );
}
