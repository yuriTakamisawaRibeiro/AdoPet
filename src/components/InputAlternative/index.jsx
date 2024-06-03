import { Container } from "./styles";

export function InputAlternative({ label, title, value, onChange, ...rest }) {
    return (
        <Container>
            <label htmlFor={label}>
                {title}
            </label>
            <input 
                id={label} 
                name={label}
                value={value}
                onChange={onChange}
                {...rest} 
            />
        </Container>
    );
}