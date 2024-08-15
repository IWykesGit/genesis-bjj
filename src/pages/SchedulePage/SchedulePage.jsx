import Schedule from '../../components/ScheduleComponent/Schedule';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SchedulePage = ({ schedule }) => {

    return(
        <Container>
            <Row>
                <Schedule schedule={schedule} />
            </Row>
        </Container>
    );
}

export default SchedulePage;