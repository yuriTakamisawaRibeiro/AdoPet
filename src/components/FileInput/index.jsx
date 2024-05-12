import { Container } from "./styles";

// eslint-disable-next-line react/prop-types
export function FileInput({ onChange }) {
    return (
        <Container>
            <input type="file" onChange={(e) => onChange(e.target.files)} multiple />
        </Container>
    );
}