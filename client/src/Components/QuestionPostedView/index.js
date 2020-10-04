import React from 'react';
import './style.css';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'
import QuestionViewModal from '../QuestionViewModal'
class QuestionPostedView extends React.Component{
    
    render(){
        return (
            <div>
                <Navbar bg="light">
                    <Navbar.Brand>Your Questions</Navbar.Brand>
                    <Button size="sm" className="question-posted-view-back" variant="outline-secondary" >Back</Button>
                </Navbar>
                <div className="question-posted-view-container">
                    <QuestionViewModal question="what does something something dxx"
                                        response="no response yet">
                    </QuestionViewModal>
                    <QuestionViewModal question="what does something something dxx"
                                        response="no response yet">
                    </QuestionViewModal>
                </div>
                
            </div>
        )
    }
}


export default QuestionPostedView;