import React, { Component } from 'react';
import { Col, Container, Modal, ModalBody, ModalHeader, Row } from 'reactstrap';
import SideBar from './Sidebar';
import MainContent from './maincontent/';
import shortid from 'shortid';
import {polls} from './data/index'
import PollModalForm from './pollform/PollForm';
class SmartPoll extends Component {

state = {
    polls: [],
    selectPoll:{},
    searchTerm:'',
    isEdit: false,
    isOpenModalFrom: false
}


componentDidMount() {
    this.setState({polls})
}

addPoll = (poll) => {
    console.log(poll)
    poll.id = shortid.generate()
    poll.time = new Date()
    poll.totallVote = 0
    poll.opinions = []

    this.setState({polls: this.state.polls.concat(poll)})
    this.toggleFrom()
}


updatePoll = (updatePoll) => {
    console.log(updatePoll)
    const polls = [...this.state.polls]
    const poll = polls.find(poll => poll.id === updatePoll.id)
    poll.title = updatePoll.title
    poll.description = updatePoll.description
    poll.options = updatePoll.options

    this.setState({polls})
}

deletePoll = (deletePollId) => {
    const polls = this.state.polls.filter(poll => poll.id !== deletePollId)
    this.setState({polls,selectPoll:{}})
}

selectPoll =(poll)=>{ 
    this.setState({selectPoll:poll})
}
handleSearch =(term)=>{
    this.setState({searchTerm:term})    
}

performSearch = ()=>{
    return this.state.polls.filter(poll => poll.title.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
}

getOpinion = ({name,vote,pollId}) =>{
   const {polls} = this.state
   const poll = polls.find(poll => poll.id === pollId)
   poll.totallVote++
   const option = poll.options.find(o => o.id === vote)
   option.vote++
   const opinion = {
       id: shortid.generate(),
       name:name,
       selectOption:vote
   }
   poll.opinions.push(opinion)
}
toggleFrom = () =>{
    this.setState({isOpenModalFrom: !this.state.isOpenModalFrom})
}
    render() {
       const polls = this.performSearch()
        return (
            <>
                <Container className="my-4 ">
                    <Row>
                        <Col md={4}>
                            <SideBar 
                                term={this.state.searchTerm}
                                handleSearch={this.handleSearch}
                                polls={polls}
                                selectPoll={this.selectPoll}
                                toggleFrom={this.toggleFrom}
                            />

                        </Col>
                        <Col md={8}>
                            <MainContent 
                                poll={this.state.selectPoll}
                                getOpinion={this.getOpinion}
                                toggleFrom={this.toggleFrom}
                                updatePoll={this.updatePoll}
                                deletePoll={this.deletePoll}
                            />  
                        </Col>
                    </Row>

                    <Modal 
                        isOpen={this.state.isOpenModalFrom}
                        toggle={this.toggleFrom}
                    >
                        <ModalHeader
                            toggle={this.toggleFrom}
                        >
                            Create Poll
                        </ModalHeader>
                        <ModalBody>
                            <PollModalForm
                                addPoll={this.addPoll}
                            />
                        </ModalBody>
                    </Modal>
                </Container>
            </>
        );
    }
}

export default SmartPoll;