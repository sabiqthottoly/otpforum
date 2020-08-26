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
  const [postOptions,setPostOptions]=useState([])
  const toggle = () => setModal(!modal);
  const option=[];

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
              <Button className="Doubt-btn" color="primary" onClick={setToDoubt}>
                Ask A Doubt
              </Button>{" "}
            </Col>
            <Col>
              <Button className="mcq-btn" color="primary" onClick={setToMcq}>
                Post A MCQ
              </Button>
            </Col>
            <Col>
              <Button color="primary"  className="shareInfo-btn" onClick={setToShareinfo}>
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
                isDeleted: false,
                postType:ask
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
                onChange={(event) => {
                setPostText(event.target.value);
              }}
              />
              <Row>
                <Col>
                  <li>
                    <label>Option 1</label>
                    <Input  onChange={(event) => {
                       option[0]=event.target.value;
                       console.log(option)
                      }} />
                  </li>
                </Col>
                <Col>
                  <li>
                    <label>Option 2</label>
                    <Input  onChange={(event) => {
                      option[1]=event.target.value;
                      console.log(option)
                      }} />
                  </li>
                </Col>
              </Row>

              <Row>
                <Col>
                  <li>
                    <label>Option 3</label>
                    <Input  onChange={(event) => {
                       option[2]=event.target.value;
                       console.log(option)
                       
                      }} />
                  </li>
                </Col>
                <Col>
                  <li>
                    <label>Option 4</label>
                    <Input  onChange={(event) => {
                      option[3]=event.target.value;
                      console.log(option)
                            
                      }} />
                      {/* {console.log(postOptions)} */}
                      {/* {setPostOptions([option[0],option[1],option[2],option[3]])} */}
                      {console.log(option)}
                  </li>
                </Col>
              </Row>

              <Button 
              onClick={(event) => addNewPost(
                [ ...posts , {
                userName: "Hisham",
                postQuestion: postText,
                postOptions: option,
                isDeleted: false,
                postType:ask
              }]
              )
              }
              color="secondary">Post</Button>
            </ModalFooter>
          ) : ask == "shareinfo" ? (
            <ModalFooter>
              <Input onChange={(event) => {
                setPostText(event.target.value);}} type="textarea" name="text" className="askInput" />
              <Button
                color="secondary"
                onClick={(event) => addNewPost(
                [ ...posts , {
                userName: "Hisham",
                postQuestion: postText,
                isDeleted: false,
                postType:ask
              }]
              )}
              >
                Post 
            </Button>
            </ModalFooter>
          ) : null}
      </Modal>
    </div>
  );
}

export default AskQuestionModal;