import {Center} from "../Center";
import {Container} from "./style";

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <Container>
            <Center>
                <a href="github.com/arief-github"> Arief Kurniawan </a> { currentYear }
            </Center>
        </Container>
    )
};
