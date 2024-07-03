import './header.css';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import GenesisLogo from '../../app/assets/genesis-bjj-center-wendel-gabetta.png';

const Header = () => {
    return (
        <Container>
            <Navbar sticky='top' expand='lg' className='bg-navbar'>
                <Navbar.Brand href='#home'>
                    <img href='#home' src={GenesisLogo} aria-label='Genesis Black Belt Logo' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse>
                    <Nav>
                        <Nav.Link href='#home'>Home</Nav.Link>
                        <Nav.Link href='#about'>About</Nav.Link>
                        <Nav.Link href='#schedule'>Schedule</Nav.Link>
                        <Nav.Link href='#contact'>Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
}

export default Header;