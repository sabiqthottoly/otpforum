import React, { useState } from 'react'
import {
    Button, Row, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem,
    // Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';
import './PostDefault.css';
import AskQuestionModal from './AskQuestionModal';
import { PostsDispatchContext } from '../context/PostContext';

export default function PostDefault() {

    const [dropdownOpen1, setDropdownOpen1] = useState(false);
    const toggle1 = () => setDropdownOpen1(prevState => !prevState);

    const [dropdownOpen2, setDropdownOpen2] = useState(false);
    const toggle2 = () => setDropdownOpen2(prevState => !prevState);

    onclick = () => {
        return (
            <div></div>
        )
    }

    return (
        <div className="mainPostDefault">
            <div className="topPart">
                <div className="postDefaultHeader">
                    <h1 >POST YOUR QUESTION HERE</h1>
                </div>
                <div className="askButton">
                    <AskQuestionModal />
                </div>
            </div>
            <div className="bottomPart">
                <div className="bottomPartHeader"><h2>WANT TO ANSWER SOME QUESTIONS</h2></div>
                <Row className="row">
                    <Col>
                        <Dropdown isOpen={dropdownOpen1} toggle={toggle1}>
                            <DropdownToggle style={{ borderRadius: '50px', backgroundColor: "whitesmoke", color: "gray", height: "40px" }} caret>
                                All Level
                              </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem>level 1</DropdownItem>
                                <DropdownItem>level 2</DropdownItem>
                                <DropdownItem>level 3</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </Col>

                    <Col>
                        <Dropdown isOpen={dropdownOpen2} toggle={toggle2}>
                            <DropdownToggle style={{ borderRadius: '50px', backgroundColor: "whitesmoke", color: "gray", height: "40px" }} caret>
                                Topics
                              </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem>Kerala</DropdownItem>
                                <DropdownItem>India</DropdownItem>
                                <DropdownItem>World</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </Col>
                    <Col>
                        <Button className style={{ borderRadius: '50px', backgroundColor: "whitesmoke", border: "solid 2px gray", color: "gray", height: "40px" }} className="startButton-postDeafault">START</Button>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
