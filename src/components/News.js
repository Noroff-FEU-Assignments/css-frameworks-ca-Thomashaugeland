import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function News() {
    return (
        <>
            <h1>News</h1>

            <ButtonGroup className="newsbutton" aria-label="Buttons_news">
                <Button className="newsbutton_inner_active" variant="secondary">1</Button>
                <Button className="newsbutton_inner" variant="secondary">2</Button>
                <Button className="newsbutton_inner" variant="secondary">3</Button>
                <Button className="newsbutton_inner" variant="secondary">4</Button>
            </ButtonGroup>

            <Container className="newscards">
                <Row>
                    <Col sm>
                        <div className="card_size">
                            <Card className="newscards_inner" style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={require('./images/news/news-1.jpg')} />
                                <Card.Body className="newscard_inner_item">
                                    <Card.Title><h5>Nunc porttitor vel</h5></Card.Title>
                                    <Card.Text>
                                        <p>Nunc malesuada eget est fringilla dapibus.</p>
                                    </Card.Text>
                                    <Button className="button_more" variant="primary">MORE</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                    <Col sm>
                        <div className="card_size">
                            <Card className="newscards_inner" style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={require('./images/news/news-2.jpg')} />
                                <Card.Body>
                                    <Card.Title><h5>Nunc porttitor vel</h5></Card.Title>
                                    <Card.Text>
                                        <p>Nunc malesuada eget est fringilla dapibus.</p>
                                    </Card.Text>
                                    <Button className="button_more" variant="primary">MORE</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                    <Col sm>
                        <div className="card_size">
                            <Card className="newscards_inner" style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={require('./images/news/news-3.jpg')} />
                                <Card.Body>
                                    <Card.Title><h5>Nunc porttitor vel</h5></Card.Title>
                                    <Card.Text>
                                        <p>Nunc malesuada eget est fringilla dapibus.</p>
                                    </Card.Text>
                                    <Button className="button_more" variant="primary">MORE</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                    <Col sm>
                        <div className="card_size">
                            <Card className="newscards_inner" style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={require('./images/news/news-4.jpg')} />
                                <Card.Body>
                                    <Card.Title><h5>Nunc porttitor vel</h5></Card.Title>
                                    <Card.Text>
                                        <p>Nunc malesuada eget est fringilla dapibus.</p>
                                    </Card.Text>
                                    <Button className="button_more" variant="primary">MORE</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm>
                        <div className="card_size">
                            <Card className="newscards_inner" style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={require('./images/news/news-5.jpg')} />
                                <Card.Body>
                                    <Card.Title><h5>Nunc porttitor vel</h5></Card.Title>
                                    <Card.Text>
                                        <p>Nunc malesuada eget est fringilla dapibus.</p>
                                    </Card.Text>
                                    <Button className="button_more" variant="primary">MORE</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                    <Col sm>
                        <div className="card_size">
                            <Card className="newscards_inner" style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={require('./images/news/news-6.jpg')} />
                                <Card.Body>
                                    <Card.Title><h5>Nunc porttitor vel</h5></Card.Title>
                                    <Card.Text>
                                        <p>Nunc malesuada eget est fringilla dapibus.</p>
                                    </Card.Text>
                                    <Button className="button_more" variant="primary">MORE</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                    <Col sm>
                        <div className="card_size">
                            <Card className="newscards_inner" style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={require('./images/news/news-7.jpg')} />
                                <Card.Body>
                                    <Card.Title><h5>Nunc porttitor vel</h5></Card.Title>
                                    <Card.Text>
                                        <p>Nunc malesuada eget est fringilla dapibus.</p>
                                    </Card.Text>
                                    <Button className="button_more" variant="primary">MORE</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                    <Col sm>
                        <div className="card_size">
                            <Card className="newscards_inner" style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={require('./images/news/news-8.jpg')} />
                                <Card.Body>
                                    <Card.Title><h5>Nunc porttitor vel</h5></Card.Title>
                                    <Card.Text>
                                        <p>Nunc malesuada eget est fringilla dapibus.</p>
                                    </Card.Text>
                                    <Button className="button_more" variant="primary">MORE</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </Container>

            <ButtonGroup className="newsbutton" aria-label="Buttons_news">
                <Button className="newsbutton_inner_active" variant="secondary">1</Button>
                <Button className="newsbutton_inner" variant="secondary">2</Button>
                <Button className="newsbutton_inner" variant="secondary">3</Button>
                <Button className="newsbutton_inner" variant="secondary">4</Button>
            </ButtonGroup>

        </>
    )
}

export default News