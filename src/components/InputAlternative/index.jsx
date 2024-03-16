import { Container } from "./syles";

export function InputAlternative({label, title, ...rest}){
    return(
        <Container>
            <label htmlFor={label}>
                {title}
            </label>

            <input 
            id={label} 
            {...rest} 
            />
        </Container>
    )
}