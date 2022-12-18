import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Card from 'react-bootstrap/Card';
import Mail from "./images/icons/mail.svg";
import Phone from "./images/icons/phone.svg";
import Location from "./images/icons/location.svg";


function Contact() {
    const [checked, setChecked] = useState(false);
    return (
        <>
            <h1>Submit your details</h1>

            <Container>
                <Row>
                    <Col md={{ order: "first" }}>

                        <Form>
                            <div className='form_element'>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>
                                        <div><h5>Name</h5></div></Form.Label>
                                    <Form.Control type="email" placeholder="" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label><div><h5>Email</h5></div></Form.Label>
                                    <Form.Control type="email" placeholder="" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label><div><h5>Website</h5></div></Form.Label>
                                    <Form.Control type="email" placeholder="https://" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label><div><h5>Message</h5></div></Form.Label>
                                    <Form.Control as="textarea" rows={3} />
                                </Form.Group>
                                <div className='Sellout'>
                                    <ButtonGroup className="mb-2">
                                        <div className='check_box'>
                                            <ToggleButton
                                                id="toggle-check"
                                                type="checkbox"
                                                variant="secondary"
                                                checked={checked}
                                                value="1"
                                                onChange={(e) => setChecked(e.currentTarget.checked)}
                                                style={{ backgroundColor: "#E92569" }}
                                            >

                                            </ToggleButton>
                                        </div>
                                        <p>Allow us to sell your personal details to whom ever we want</p>
                                    </ButtonGroup>
                                </div>
                                <div className="d-grid gap-2">
                                    <Button variant="secondary" size="lg">
                                        Submit
                                    </Button>
                                </div>
                            </div>
                        </Form>

                    </Col>

                    <Col xs={{ order: "first" }} md={4}>
                        <Card style={{ width: '18rem' }}>
                            <div className='contact_card_element'>
                                <Card.Body>


                                    <Card.Text>
                                        <div className='contact_card_item1'>
                                            <div className='social_icon'>
                                                <img src={Mail} alt="mail logo" />
                                            </div>
                                            <p>hello@yay.com</p>
                                        </div>
                                    </Card.Text>
                                    <Card.Text>
                                        <div className='social_icon'>
                                            <img src={Phone} alt="phone logo" />
                                        </div>
                                        123 456 7890
                                    </Card.Text>
                                    <Card.Text>
                                        <div className='social_icon'>
                                            <img src={Location} alt="loaction logo" />
                                        </div>
                                        123 Some Street
                                        Somewhere
                                        Some City
                                        10000
                                    </Card.Text>

                                </Card.Body>
                            </div>
                        </Card>
                    </Col>

                </Row>
            </Container >
        </>
    )
}

export default Contact