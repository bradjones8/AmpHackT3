import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './style.css';
import { Row, Col } from 'react-bootstrap';
import FormControl from 'react-bootstrap/FormControl'
import InputGroup from 'react-bootstrap/InputGroup';
class QuestionPost extends React.Component{
    render(){
        return (
            <div className="question-posting-container">
                <div className="question-posting-form">
                    <label htmlFor="question-posting-input">Question</label>
                    <InputGroup className="mb-3">
                        <FormControl id="question-posting-input" as="textarea" rows={5} placeholder="Type your question here" />
                    </InputGroup>

                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="anoaymous posting" />
                    </Form.Group>
                    <Row>
                        <Col>
                            <Button className="question-posting-button" variant="secondary">Exit</Button>
                        </Col>
                        <Col>
                            <Button className="question-posting-button" variant="light">Post</Button>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

export default QuestionPost;