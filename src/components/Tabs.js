import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Tab1 from "./Tab1";
import Tab2 from "./Tab2.js";
import Tab3 from "./Tab3";
import { Container } from 'react-bootstrap';

function AllTabs() {
    return (
        <Container>
            <Tabs
                className="d-xs-none.d-sm-none .d-md-block"
                defaultActiveKey="first"
                transition={false}
                id="noanim-tab-example"


            >
                <Tab eventKey="first" title="First">
                    <Tab1 />
                </Tab>
                <Tab eventKey="second" title="Second">
                    <Tab2 />
                </Tab>
                <Tab eventKey="third" title="Third">
                    <Tab3 />
                </Tab>
            </Tabs >
        </Container>
    );
}

export default AllTabs;