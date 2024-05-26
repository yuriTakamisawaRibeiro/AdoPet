import { Container } from "./styles";

// eslint-disable-next-line react/prop-types
export function FileInput({ onChange }) {
    return (
        <Container>
            <input type="file" placeholder="Selecione um arquivo" onChange={(e) => onChange(e.target.files)} multiple />
        </Container>
    );
}