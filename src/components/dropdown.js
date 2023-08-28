import {DropdownToggle,DropdownMenu,DropdownItem, UncontrolledDropdown} from 'reactstrap';
import {Row, Col, Container} from "reactstrap";
function Example(){
    return (
            <div>
                <Container>
                    <Row>
                        <Col>

                            <UncontrolledDropdown  inNavbar>
                <DropdownToggle nav caret>
                    account
                </DropdownToggle>
                <DropdownMenu right>
                    <DropdownItem>cancel ticket</DropdownItem>
                    <DropdownItem>change travel date</DropdownItem>
                    <DropdownItem>Show my ticket</DropdownItem>
                    <DropdownItem>Email/SMS</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Login/SignUp</DropdownItem>
                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Col>
                    </Row>
                </Container>
            
            </div>
    );
}

export default Example;