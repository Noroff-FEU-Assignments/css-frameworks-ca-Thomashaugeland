import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Accordion from 'react-bootstrap/Accordion';
import Tabs from "./Tabs";
import Tab1 from "./images/tab/tab-1.jpg";
import Tab2 from "./images/tab/tab-2.jpg";
import Tab3 from "./images/tab/tab-3.jpg";



function Home() {
    return (
        <>

            <Carousel controls={false}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={require('./images/carousel/carousel-1.jpg')}
                        alt="First slide"
                    ></img>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={require('./images/carousel/carousel-2.jpg')}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={require('./images/carousel/carousel-3.jpg')}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>


            <h1>We do YAY things</h1>
            <p className="homeparagraph">Nam tincidunt, sapien nec congue porta, tellus risus ullamcorper mi, a rutrum justo eros pretium libero. Nullam vel enim id mauris eleifend finibus et ac orci. Aliquam metus massa, aliquam quis arcu sit amet, consectetur faucibus urna. Suspendisse massa diam, efficitur eu massa euismod, pretium lacinia magna. Donec mi orci, sollicitudin in luctus a, varius eget massa.</p>


            <Accordion defaultActiveKey="0" className="d-md-none .d-lg-block">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>
                        <div><h4>First</h4></div></Accordion.Header>
                    <Accordion.Body>
                        <div>
                            <img src={Tab1} alt="tab1" />
                        </div>
                        <div><p>                        Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.
                        </p></div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header><div><h4>Second</h4></div></Accordion.Header>
                    <Accordion.Body>
                        <div>
                            <img src={Tab2} alt="tab2" />
                        </div>
                        Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header><div><h4>Third</h4></div></Accordion.Header>
                    <Accordion.Body>
                        <div>
                            <img src={Tab3} alt="tab3" />
                        </div>
                        <div><p>                        Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.
                        </p></div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <Tabs />


        </>
    );
}

export default Home;

