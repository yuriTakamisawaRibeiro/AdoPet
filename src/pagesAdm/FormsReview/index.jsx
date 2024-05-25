import { SideBarAdmin } from "../../components/SideBarAdmin";
import { Brand, Container, Content, Pagination, SearchDiv, TableForms } from "./styles";
import AdopetImg from '../../assets/images/AdopetLogo.svg';
import { Input } from "../../components/Input";
import { BiSearchAlt } from "react-icons/bi";


export function FormsReview() {
    return (
        <Container>
            <Brand>
                <img src={AdopetImg} alt="Logo do site" />
            </Brand>
            <SideBarAdmin />
            <Content>
                <h2>Formulários</h2>
                <SearchDiv>
                    <Input icon={BiSearchAlt} placeholder="Faça aqui sua pesquisa" />
                    <select class="dropdown">
                        <option value="pets">Pet's</option>
                        <option value="parceiros">Parceiros</option>
                    </select>
                </SearchDiv>

                <TableForms>
                    <thead>
                        <tr>
                            <th>Usuário</th>
                            <th>Empresa</th>
                            <th>Espécie Pet</th>
                            <th>Raça</th>
                            <th>Contato</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Bruno Bertolini</td>
                            <td>Inataa</td>
                            <td>Cachorro</td>
                            <td>Labrador</td>
                            <td>11 XXXX-XXXX</td>
                            <td>b.bertolini@gmail.com</td>
                        </tr>
                        <tr>
                            <td>Gabriel Maia</td>
                            <td>N/A</td>
                            <td>Gato</td>
                            <td>Persa</td>
                            <td>11 XXXX-XXXX</td>
                            <td>gabrielmaia22@gmail.com</td>
                        </tr>
                    </tbody>
                </TableForms>
                <Pagination>
                    <button class="page-button">1</button>
                    <button class="page-button">2</button>
                    <button class="page-button">3</button>
                    <span>Mostrando linha 1 até 10 de 30</span>
                </Pagination>
            </Content>

        </Container>
    )
}