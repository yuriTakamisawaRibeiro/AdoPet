import { Container, ButtonFile } from "./styles";

export function FileInput() {
    return(
        <Container>
            <input type="file"/>
            <ButtonFile type="file">Escolher arquivo</ButtonFile>
        </Container>
    )
}