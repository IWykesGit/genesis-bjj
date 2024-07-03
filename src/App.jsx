import './App.css';

import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import GenesisLogo from './app/assets/genesis-bjj-center-wendel-gabetta.svg';

function App() {
  return (
    <div className="App">
        <Navbar expand='lg' className='bg-navbar'>
            <Container>
                <Navbar.Brand href='#home'>
                    <img src={GenesisLogo} alt='Genesis BJJ Logo' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='me-auto'>
                        <Nav.Link href='#home'>Home</Nav.Link>
                        <Nav.Link href='#about'>About</Nav.Link>
                        <Nav.Link href='#schedule'>Schedule</Nav.Link>
                        <Nav.Link href='#contact'>Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        Let's do this
    </div>
  );
}

export default App;
