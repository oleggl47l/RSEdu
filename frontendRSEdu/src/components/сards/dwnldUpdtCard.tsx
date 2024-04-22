import {Button, Card, Container} from "react-bootstrap";
import './cardStyle.css';
export const DwnldUpdtCard = () => {
    return (
        <Container className="container">
            <Card className="card-custom">
                <Card.Title className="card-custom-title">Start practicing with us</Card.Title>
                <Card.Body className="card-custom-body">
                    <div className="left-content">
                        <Button className={"custom-button"}>Download</Button>
                    </div>
                    <div className="right-content">
                        <h4>List of updates</h4>
                        <ul>
                            <li>Believe drift done better morning design devonshire manner asked shewing discovery
                                venture attending met made. Engage world northward first painful become raising whom
                                fully share.
                            </li>
                            <li>Item 2</li>
                            <li>Item 3</li>
                        </ul>
                    </div>
                </Card.Body>
            </Card>
        </Container>
    );
};