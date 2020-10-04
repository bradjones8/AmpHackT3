import React from 'react';
import './style.css';
import QuetionPost from '../QuestionPost';
import QuestionPostedView from '../QuestionPostedView';
import { Card, Button } from 'react-bootstrap'
class ParentMenu extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            currentComponent: 0
        }
        this.changeComponent = this.changeComponent.bind(this)
    }
    changeComponent(component_code){
        this.setState({currentComponent:component_code});
    }
    render(){
        return(
            <div className="parent-menu-container">
                <Button variant="primary" onClick={this.changeComponent(1)}>New Question</Button>
                <Button variant="primary" onClick={this.changeComponent(2)}>View My Questions</Button>
                <Button variant="primary" onClick={this.changeComponent(3)}>Feeds</Button>
            </div>
        )
    }
}

export default ParentMenu;