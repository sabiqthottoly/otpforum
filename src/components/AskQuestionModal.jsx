import React, { useState, useContext } from "react";
import {
  Row,
  Col,
  Input,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import "./AskQuestionModal.css";
import { PostsDispatchContext, PostsContext } from "../context/PostContext";

function AskQuestionModal(props) {
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);
  const [ask, setAsk] = useState(null);
  const [postText, setPostText] = useState("");

  const toggle = () => setModal(!modal);

  const setToDoubt = () => {
    setAsk("doubt");
  };

  const setToMcq = () => {
    setAsk("mcq");
  };

  const setToShareinfo = () => {
    setAsk("shareinfo");
  };

  const posts = useContext(PostsContext);
  const addNewPost = useContext(PostsDispatchContext);

  return (
    <div>
      <Button color="primary" onClick={toggle}>
        {buttonLabel}ASK YOUR QUESTION
      </Button>
      <Modal isOpen={modal} size="lg" toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>
          Select what you would like to post
        </ModalHeader>
        <ModalBody>
          <Row>
            <Col>
              <Button color="primary" onClick={setToDoubt}>
                Ask A Doubt
              </Button>{" "}
            </Col>
            <Col>
              <Button color="primary" onClick={setToMcq}>
                Post A MCQ
              </Button>
            </Col>
            <Col>
              <Button color="primary" onClick={setToShareinfo}>
                ShareInfo
              </Button>
            </Col>
          </Row>
        </ModalBody>

        {/* Modal dropdown footer  */}

        {ask === "doubt" ? (
          <ModalFooter>
            <Input
              onChange={(event) => {
                setPostText(event.target.value);
              }}
              type="textarea"
              name="text"
              className="askInput"
            />
            <Button
              onClick={(event) => addNewPost(
                [ ...posts , {
                userName: "Hisham",
                postQuestion: postText,
                postOptions: ["1", "2", "3", "4"],
                isDeleted: false,
              }]
              )}
              color="secondary">
            Post</Button>
          </ModalFooter>) : ask === "mcq" ? (
            <ModalFooter>
              <Input
                style={{ paddingBottom: "100px" }}
                type="textarea"
                name="text"
                className="askInput"
              />
              <Row>
                <Col>
                  <li>
                    <label>Option 1</label>
                    <Input />
                  </li>
                </Col>
                <Col>
                  <li>
                    <label>Option 2</label>
                    <Input />
                  </li>
                </Col>
              </Row>

              <Row>
                <Col>
                  <li>
                    <label>Option 2</label>
                    <Input />
                  </li>
                </Col>
                <Col>
                  <li>
                    <label>Option 2</label>
                    <Input />
                  </li>
                </Col>
              </Row>

              <Button color="secondary">Post</Button>
            </ModalFooter>
          ) : ask == "shareinfo" ? (
            <ModalFooter>
              <Input type="textarea" name="text" className="askInput" />
              <Button
                color="secondary"

              >
                Post Question
            </Button>
            </ModalFooter>
          ) : null}
      </Modal>
    </div>
  );
}

export default AskQuestionModal;
