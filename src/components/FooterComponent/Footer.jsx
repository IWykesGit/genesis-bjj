import './footer.css';

import GenesisLogo from '../../app/assets/genesis-bjj-center-wendel-gabetta.png';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
    return (
        <footer id='footer'>
            <Container fluid>
                <Row>
                    <Col>
                        <Row className='p-3'>
                            <Col>
                                <a href='#home'>
                                    <img src={GenesisLogo} className='footer-logo' />
                                </a>
                            </Col>
                        </Row>
                        <Row className='justify-content-center'>
                            <Col sm={2} className='pt-2 pt-lg-0'>
                                <h3>Gym</h3>
                                <a href='#about'>About</a>
                                <br />
                                <a href='#schedule'>Schedule</a>
                                <br />
                                <a target='_blank' href='https://www.google.com/maps/place/Genesis+Brazilian+Jiu+Jitsu+Center/@27.2706485,-80.2990699,15z/data=!4m6!3m5!1s0x88dee917c9937f0b:0x71e2bdcefa83057b!8m2!3d27.2706485!4d-80.2990699!16s%2Fg%2F11nfpmmy_2?entry=ttu'>Location</a>
                            </Col>
                            <Col sm={2}className='pt-2 pt-lg-0'>
                                <h3>Contact</h3>
                                <a href='tel:+17727662313' aria-label='Phone'>
                                    <i className='fa fa-phone' /> (772) 766-2313
                                </a>
                                <br />
                                <a href='tel:+17727662315' aria-label='Phone'>
                                    <i className='fa fa-phone' /> (772) 766-2315
                                </a>
                                <br />
                                <a href='mailto:genesisbjj20@gmail.com' aria-label='Email'>
                                    <i className='fa fa-envelope-o' /> genesisbjj20@gmail.com
                                </a>
                            </Col>
                            <Col sm={2} className='pt-2 pt-lg-0'>
                                <h3>Social</h3>
                                <Row>
                                    <Col className='footer-social-col'>
                                        <a target='_blank' href='https://www.instagram.com/genesisbjjcenter/' aria-label='Instagram'>
                                            <i className='fa fa-instagram fa-2x' style={{ color: '#000000' }}></i>
                                        </a>
                                        <a target='_blank' href='https://www.facebook.com/genesisbjjcenter' aria-label='Facebook'>
                                            <i className='fa fa-facebook fa-2x' style={{ color: '#000000' }}></i>
                                        </a>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className='footer-tagline'>
                    <Col>
                        <b>Discipline - Respect - Confidence - Leadership</b>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;