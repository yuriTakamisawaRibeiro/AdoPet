import { FiArrowLeft, FiMail, FiUser } from "react-icons/fi";
import { FaLocationDot } from "react-icons/fa6";
import { Container, Form} from "./styles";
import { Link} from "react-router-dom";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { IoColorFilter } from "react-icons/io5";
import { TbMoodSearch } from "react-icons/tb";
import { SelectAlternative } from "../../components/SelectAlternative";


export function Profile(){

const optionsSpecies = [
        { label: 'Preferências de Espécie', value: '' },
        { label: 'Cachorro', value: 'cachorro' },
        { label: 'Gato', value: 'gato' },
]

const optionsSize= [
  { label: 'Preferências de Tamanho', value: '' },
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
        
      </header>
      <Form>
        <Input placeholder="Nome" type="text" icon={FiUser}/>
        <Input placeholder="E-mail" type="text" icon={FiMail}  />
        <Input placeholder="CEP" type="text" icon={FaLocationDot} />
        <SelectAlternative options={optionsSpecies}/>
        <Input placeholder="Preferências de Cor" type="text" icon={IoColorFilter} />
        <Input placeholder="Preferências de Temperamento " type="text" icon={TbMoodSearch} />
        <SelectAlternative options={optionsSize}/>
        <Button title="Salvar" />
      </Form>
    </Container>
    )
}