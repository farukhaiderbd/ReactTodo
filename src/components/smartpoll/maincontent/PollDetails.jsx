import React from 'react'
import { Button, Form, FormFeedback, Input, ListGroup, Modal, ModalBody, ModalHeader } from 'reactstrap'
import PollModalForm from '../pollform/PollForm'
import OptionItem from './OptionItem'
import VoteForm from './VoteForm'

export default class PollDetails extends React.Component {
    state = {
        name: '',
        vote: '',
        errors:[],
        isOpenModalFrom: false
    }

    toggleForm = () => {
        this.setState({ isOpenModalFrom:!this.state.isOpenModalFrom})
    }
    handleChange =(event) => {
        this.setState({[event.target.name] : event.target.value})
    }

    handleSubmit =(event) => {
        event.preventDefault()
        const {errors, isValid} = this.validate()
        if(isValid){
            this.props.getOpinion({
                name: this.state.name,
                vote: this.state.vote,
                pollId: this.props.poll.id
            })
            this.setState({
                name:'', 
                vote:'',
                errors:[]
            })
           
        }else{
            this.setState({errors})
        } 
    }
    validate(){
        const {name, vote} = this.state
        const user = this.props.poll.opinions.find(o => o.name === name)
        const errors= {}
        if(!name){
            errors.name = "Please Enter Your Name"
        }else if(name.length <5){
            errors.name = "Name at last 10 charcter"
        }else if(user){
            errors.name = "This user already exists"
        }

        if(!vote){
            errors.vote = "Please select One"
        }
        return {
            errors,
            isValid: Object.keys(errors).length === 0

        }
    }
    render() {
        const {poll} = this.props
        return (
            <div>
                <h3>{poll.title}</h3>
                <p>{poll.description}</p>
    
                <ListGroup style={{ marginTop: '20px'}}>
                    <div className="d-flex" style={{marginBottom: '15px'}}>
                        <h4 style={{width: '80%'}}>Options</h4>
                        <Button onClick={this.toggleForm} color="warning">Edit</Button>
                        <Button style={{marginLeft: '10px'}} onClick={()=>this.props.deletePoll(poll.id)} color="danger">Delete</Button>
                    </div>
                    <Form onSubmit={this.handleSubmit}>
                        
                        <OptionItem 
                            selectedOption={this.selectedOption}
                            options={poll.options}
                            totalVote={poll.totallVote}
                            handleChange={this.handleChange}
                            errors={this.state.errors}
                            selectVote={this.state.vote}
                        />
                        <VoteForm
                            selectPollId={poll.id}
                            getOpinion={this.getOpinion}
                            handleChange={this.handleChange}
                            userName={this.state.name}
                            errors={this.state.errors}
                        />
                        <Button color="dark" type="submit">Submit Your Opinion</Button>
                    </Form>
                    <Modal 
                        isOpen={this.state.isOpenModalFrom}
                        toggle={this.toggleForm}
                    >
                        <ModalHeader
                            toggle={this.toggleForm}
                        >
                            Update Poll
                        </ModalHeader>
                        <ModalBody>
                            <PollModalForm
                                toggleForm={this.toggleForm}
                                poll={this.props.poll}
                                updatePoll={this.props.updatePoll}
                            />
                        </ModalBody>
                    </Modal>
                </ListGroup>
            </div>
        )
    }
}
