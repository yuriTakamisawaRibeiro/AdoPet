import { FiArrowLeft, FiMail, FiUser } from "react-icons/fi";
import { FaLocationDot } from "react-icons/fa6";
import { Container, Form, InputWrapper} from "./styles";
import { Link} from "react-router-dom";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { IoColorFilter } from "react-icons/io5";
import { TbMoodSearch } from "react-icons/tb";
import { SelectAlternative } from "../../components/SelectAlternative";
import { Footer } from "../../components/Footer"


export function Profile(){

const optionsSpecies = [
        { label: 'Escolha uma opção', value: '' },
        { label: 'Cachorro', value: 'cachorro' },
        { label: 'Gato', value: 'gato' },
]

const optionsSize= [
  { label: 'Escolha uma opção', value: '' },
  { label: 'Pequeno Porte', value: 'pequeno' },
  { label: 'Médio Porte', value: 'medio' },
  { label: 'Grande Porte', value: 'grande' }
]

    return(
        <Container>
      <header>
        <Link to="/home">
          <FiArrowLeft />
        </Link>
        <div>
        <h3>
          Importante!!
        </h3>
        <p>Preencha todos os campos para que o sistema encontre os pet´s ideais para você</p>
        </div>

        <div></div>
        
      </header>
      <Form>
        <InputWrapper>
        <label htmlFor="name">Nome: </label>
        <Input id="name" placeholder="Digite seu Nome Completo" type="text" icon={FiUser}/>
        <label htmlFor="email">E-mail: </label>
        <Input id="email" placeholder="Digite seu E-mail" type="text" icon={FiMail}  />
        <label htmlFor="cep">CEP: </label>
        <Input id="cep" placeholder="00000-000" type="text" icon={FaLocationDot} />
        </InputWrapper>
        <InputWrapper>
        <label htmlFor="specie"> Preferências de Espécie: </label>
        <SelectAlternative id="specie" options={optionsSpecies}/>
        <label htmlFor="color"> Preferências de Cor: </label>
        <Input id="color" placeholder="Preferências de Cor" type="text" icon={IoColorFilter} />
        <label htmlFor="mood"> Preferências de Temperamento: </label>
        <Input  id="mood" placeholder="Preferências de Temperamento " type="text" icon={TbMoodSearch} />
        </InputWrapper>
        
        <label htmlFor="size"> Preferências de Porte: </label>
        <SelectAlternative id="size" options={optionsSize}/>
        <Button title="Salvar" />
      </Form>
      <Footer/>
      
    </Container>
    )
}