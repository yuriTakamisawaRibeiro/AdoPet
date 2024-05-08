import { Container } from "./styles";

export function FileInput({ onChange }) {
    return (
        <Container>
            <input type="file" onChange={(e) => onChange(e.target.files)} multiple />
        </Container>
    );
}