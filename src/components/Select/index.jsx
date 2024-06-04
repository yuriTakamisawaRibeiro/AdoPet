import { Container } from "./styles";

export function Select({ options, value, onChange }) {
    if (!Array.isArray(options)) {
        return null; // Return null or another representation when options is not a valid array
    }

    return (
        <Container>
            <select value={value} onChange={(e) => onChange(e.target.value)}>
                {options.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </Container>
    );
}