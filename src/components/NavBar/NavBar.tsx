import { Nav, Navbar } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";

const NavBar: React.FC = () => {
    const { isAuthenticated } = useAuth0();

    return (
        <Navbar>
            <Nav>
                <Nav.Link href="/dashboard">Home | </Nav.Link>
                {isAuthenticated &&
                    <>
                        <Nav.Link href="/addTask">Add a Task | </Nav.Link>
                        <Nav.Link href="/viewTask">Task View | </Nav.Link>
                        <Nav.Link href="/editTask">Edit To Do List | </Nav.Link>
                        <Nav.Link href="/profile">Profile </Nav.Link>
                    </>
                }
            </Nav>
        </Navbar>
    )
}

export default NavBar;
