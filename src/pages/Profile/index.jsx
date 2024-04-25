import { FiArrowLeft, FiLock, FiMail, FiUser } from "react-icons/fi";
import { Avatar, Container, Form} from "./styles";
import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";


export function Profile(){
    return(
        <Container>
      <header>
        <Link to="/home">
          <FiArrowLeft />
        </Link>
      </header>
      <Form>
        <Avatar>

        </Avatar>
        <Input placeholder="Nome" type="text" icon={FiUser}/>
        <Input placeholder="E-mail" type="text" icon={FiMail}  />
        <Input placeholder="Senha atual" type="password" icon={FiLock} />
        <Input placeholder="Nova senha" type="password" icon={FiLock} />
        <Button title="Salvar" />
      </Form>
    </Container>
    )
}