import { Button, Card, CardImg, CardText, CardTitle, Container, Img, Text, Title } from "./styles";

export function ModalSucess(){
    <Container>
    <Card>
        <CardImg>
            <Img src="https://i.imgur.com/4niebFr.jpg" alt="Success Image" />
        </CardImg>
        <CardTitle>
            <Title>Success!</Title>
        </CardTitle>
        <CardText>
            <Text>Yay! It's a nice order!<br />It will arrive soon.</Text>
        </CardText>
        <Button>Track delivery</Button>
    </Card>
</Container>
}