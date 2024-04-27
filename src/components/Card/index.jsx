import { Container, IconBg } from "./styles";

export function Card({ icon: Icon, title}){
    return(
        <Container>
            <IconBg>
            {Icon && <Icon size={50} color={"#E8E8E0"} />}
            </IconBg>
            <h1>{title}</h1>
        </Container>
    )
}