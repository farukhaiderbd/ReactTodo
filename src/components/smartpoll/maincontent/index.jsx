import React, { Component } from 'react'
import DefaultContent from './defaultContent'
import PollDetails from './PollDetails'

export default class MainContent extends Component {
   
    getOptions() { 
        if(Object.keys(this.props.poll).length !== 0){
            return  <PollDetails 
            poll={this.props.poll}
            getOpinion={this.props.getOpinion}
            toggleFrom={this.props.toggleFrom}
            updatePoll={this.props.updatePoll}
            deletePoll={this.props.deletePoll}
            />
        }else{
            return <DefaultContent />
        }
    }
   
    render() {
        return (
           
               this.getOptions()
           
        )
    }
}
