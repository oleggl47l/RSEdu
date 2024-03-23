import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Container, Nav, NavDropdown, Card, Button} from "react-bootstrap";
import './cardStyle.css';
import './footerStyle.css';
import './navBarStyle.css';
import './sliderStyle.css';
import './globalStyle.css';


function App() {

    return (
        <>
            <Navbar className="custom-navbar" variant={"dark"}>
                <Container>
                    <Navbar.Brand href="#home">ТУТ ЛОГО</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="m-auto">
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#downloads">Downloads</Nav.Link>
                            <NavDropdown title="Documentation" id="collapsible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider/>
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#news">News</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <div className="slider" style={{paddingBottom: '20px'}}> {/* Added paddingBottom */}

                <div className="carousel-wrapper">
                    <input id="slide1" type="radio" name="controls"/>
                    <input id="slide2" type="radio" name="controls"/>
                    <input id="slide3" type="radio" name="controls"/>
                    <input id="slide4" type="radio" name="controls"/>
                    <input id="slide5" type="radio" name="controls"/>

                    <label htmlFor="slide1" className="nav-dot"></label>
                    <label htmlFor="slide2" className="nav-dot"></label>
                    <label htmlFor="slide3" className="nav-dot"></label>
                    <label htmlFor="slide4" className="nav-dot"></label>
                    <label htmlFor="slide5" className="nav-dot"></label>

                    <label htmlFor="slide1" className="left-arrow">&lt;</label>
                    <label htmlFor="slide2" className="left-arrow">&lt;</label>
                    <label htmlFor="slide3" className="left-arrow">&lt;</label>
                    <label htmlFor="slide4" className="left-arrow">&lt;</label>
                    <label htmlFor="slide5" className="left-arrow">&lt;</label>

                    <label htmlFor="slide1" className="right-arrow">&gt;</label>
                    <label htmlFor="slide2" className="right-arrow">&gt;</label>
                    <label htmlFor="slide3" className="right-arrow">&gt;</label>
                    <label htmlFor="slide4" className="right-arrow">&gt;</label>
                    <label htmlFor="slide5" className="right-arrow">&gt;</label>

                    <div className="carousel">
                        <ul>
                            <li>
                                <img
                                    src="https://img.goodfon.ru/original/8000x5238/6/2d/robot-march-alex-steven-martin-by-alex-steven-martin-art-rob.jpg"/>
                            </li>
                            <li>
                                <img
                                    src="https://previews.123rf.com/images/izakowski/izakowski2204/izakowski220400196/185209415-cartoon-illustration-of-robots-and-droids-comic-characters-group.jpg"/>
                            </li>
                            <li>
                                <img
                                    src="https://thumbs.dreamstime.com/b/cartoon-robots-conceptual-fantasy-characters-group-vector-illustration-funny-151608393.jpg"/>
                            </li>
                            <li>
                                <img
                                    src="https://thumbs.dreamstime.com/b/funny-robots-cartoon-characters-group-illustration-fantasy-science-151512700.jpg"/>
                            </li>
                            <li>
                                <img
                                    src="https://indasil.club/uploads/posts/2022-11/1669302924_39-indasil-club-p-robot-detskii-risunok-pinterest-40.jpg"/>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>


            <Container className="container">
                <Card className="card">
                    <Card.Title className="card-title">Start practicing with us</Card.Title>
                    <Card.Body className="card-body">
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

            <Container className="container">
                <Card className="image-card">
                    <Card.Title>News!</Card.Title>
                    <Card.Body className="image-card-body">
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

            <footer className="footer">
                <div className="social-icons">
                    <a href="#"><img src="src/images/vk.svg" alt="Social Icon 1"/></a>
                    <a href="#"><img src="src/images/telegram.svg" alt="Social Icon 2"/></a>
                    <a href="#"><img src="src/images/discord.svg" alt="Social Icon 3"/></a>
                </div>
                <div className="copyright">© 2024 something</div>
            </footer>
        </>
    )
}

export default App
