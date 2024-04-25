import { Container } from "./styles";

export function Select({ options }) {
    if (!Array.isArray(options)) {
        return null; // Retorna null ou outra representação quando options não é um array válido
    }

    return (
        <Container>
            <select>
                {options.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </Container>
    );
}
