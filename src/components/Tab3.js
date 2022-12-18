import Share from "./images/icons/share.svg";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

function Tab3() {
    return (
        <>
            <div className='tab_element'>
                <Row>
                    <Col>
                        <img class="tab_image" src={require('./images/tab/tab-3.jpg')} />
                    </Col>
                    <Col>
                        <p>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus. </p>
                        <div className='social_icon'>
                            <img src={Share} alt="share logo" />
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Tab3;