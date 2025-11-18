import { Col, Container } from "react-bootstrap";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

const LoginPage: React.FC = () => {
    return (
        <Container>
            <Col>
                <h1 style={{border: "3px solid black",}}>The JeniDub Task Management App</h1>
                <LoginButton />
                <LogoutButton />
            </Col>
        </Container>
    )
}

export default LoginPage;
