import { Button, Modal} from 'react-bootstrap'
import React from 'react';
import './style.css'
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="xs"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Question Review
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>{props.question}</h5>
        <p>{props.response}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function QuestionViewModal(props) {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="outline-secondary" className="question-view-name" onClick={() => setModalShow(true)}>
        {props.question}
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        question={props.question}
        response={props.response}
      />
    </>
  );
}

export default QuestionViewModal;