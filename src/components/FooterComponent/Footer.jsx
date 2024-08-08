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
                            <Col lg={2} className='pt-2 pt-lg-0'>
                                <h3>Gym</h3>
                                <a href='#about'>About</a>
                                <br />
                                <a href='#schedule'>Schedule</a>
                            </Col>
                            <Col lg={2} className='pt-2 pt-lg-0'>
                                <h3>Contact</h3>
                                <a href='tel:+17727662313'>
                                    <i className='fa fa-phone' /> (772) 766-2313
                                </a>
                                <br />
                                <a href='tel:+17727662315'>
                                    <i className='fa fa-phone' /> (772) 766-2315
                                </a>
                                <br />
                                <a href='mailto:genesisbjj20@gmail.com'>
                                    <i className='fa fa-envelope-o' /> genesisbjj20@gmail.com
                                </a>
                            </Col>
                            <Col lg={2} className='pt-2 pt-lg-0'>
                                <h3>Social</h3>
                                <Row>
                                    <Col className='footer-social-col'>
                                        <a href='https://www.instagram.com/genesisbjjcenter/'>
                                            <i className='fa fa-instagram fa-2x' style={{ color: '#000000' }}></i>
                                        </a>
                                        <a href='https://www.facebook.com/genesisbjjcenter'>
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