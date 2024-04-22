import {Card, Container} from "react-bootstrap";
import './cardStyle.css';
export const NewsCard = () => {
    return (
        <Container className="container">
            <Card className="image-custom-card">
                <Card.Title className="card-custom-title">News!</Card.Title>
                <Card.Body className="image-custom-card-body">
                    <ul className="image-list">
                        <li className="image-with-text">
                            <img
                                src="https://thumbs.dreamstime.com/b/funny-robots-cartoon-characters-group-illustration-fantasy-science-151512700.jpg"
                                alt="Image 1"/>
                            <p>Entreaties result contrasted draw determine times occasion. Justice dependent
                                subjects. Edward discovered name delighted especially affection stuff woody
                                contained being forty. Thoughts anxious compliment small forbade ability side
                                esteem.</p>
                        </li>
                        <li className="image-with-text">
                            <img
                                src="https://indasil.club/uploads/posts/2022-11/1669302924_39-indasil-club-p-robot-detskii-risunok-pinterest-40.jpg"
                                alt="Image 2"/>
                            <p>Conviction its song possible left servants parties offence window chiefly case
                                picture remark. Lived gentleman fancy. Civility wished mistress anxious appetite
                                terminated assurance gravity rank. Comfort interested horrible mention.</p>
                        </li>
                        <li className="image-with-text">
                            <img
                                src="https://previews.123rf.com/images/izakowski/izakowski2204/izakowski220400196/185209415-cartoon-illustration-of-robots-and-droids-comic-characters-group.jpg"
                                alt="Image 3"/>
                            <p>Thoughts indulged inhabit yourself about. Vulgar suspected misery speedily sorry
                                furniture. Produced eat they your small shutters fifteen mistaken impossible lain
                                songs comparison next bringing bachelor solid worthy. Interested very staying do
                                sportsmen melancholy giving any. </p>
                        </li>
                    </ul>
                </Card.Body>
            </Card>
        </Container>
    );
};