import { Container, ButtonFile } from "./styles";

export function FileInput() {
    return(
        <Container>
            <input />
            <ButtonFile type="file">Escolher arquivo</ButtonFile>
        </Container>
    )
}