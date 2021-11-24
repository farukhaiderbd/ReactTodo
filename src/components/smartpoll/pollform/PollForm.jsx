import React from 'react'
import { Button, Form, FormFeedback, FormGroup, Input, Label } from 'reactstrap'
import propTypes from 'prop-types'
import shortid from 'shortid'
const defaultOptions = [
    {id: shortid.generate(), value: '', vote:0},
    {id: shortid.generate(), value: '', vote:0},
    {id: shortid.generate(), value: '', vote:0},
]

export default class PollModalForm extends React.Component {

    state = {
        title : "",
        description : "",
        options : defaultOptions,
        erorrs : []
    }

    componentDidMount() {
        const {poll} = this.props
        if(poll){
          this.setState({
            title : poll.title,
            description : poll.description,
            options : poll.options,
          })  
        }
        
    }

    handleChange =(event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    handleOptionChange =(event,index) => {
        const options = [...this.state.options]
        options[index].value = event.target.value
        this.setState({options})
    }

    addOption = () => {
        const options = this.state.options
        if(options.length <5){
            options.push({
                id: shortid.generate(),
                value: "",
                vote: 0
            })
            this.setState({options})
        }else{
            alert('maximum number of options 5')
        }    
    }

    deleteOption = (id) => {
        if(this.state.options.length > 2){
            const options = this.state.options.filter((option)=> option.id !== id)
            this.setState({options})
        } 
    }

    handleSubmit=(event) => {
        event.preventDefault();
        const { erorrs , isValid } = this.validate()
        if(isValid){
            if(this.props.poll){
                const {title, description, options} = this.state
                this.props.updatePoll({
                    id:this.props.poll.id,
                    title, 
                    description, 
                    options 
                })
                event.target.reset()
                this.setState({title:"",description:""})
                this.props.toggleForm()
            }else{
                this.props.addPoll(this.state)
                event.target.reset()
                this.setState({title:"",description:""})
            }
        
        }else{
            this.setState({erorrs})
        }
    }
    validate = () => {
        const {options,title,description} = this.state
        const erorrs = {}
        if(!title){
            erorrs.title = "Please Enter a title"
        }else if (title.length <10){
            erorrs.title = "Title are too short"
        }else if (title.length >100){
            erorrs.title = "Title is too long"
        }
        if(!description){
            erorrs.description = "Please Enter a descriptions"
        }else if (description.length > 500){
            erorrs.description = "Descriptions are too long"
        }
    
        const optionsError = []
        options.forEach((option,index) => {
            if(!option.value){
                optionsError[index] = "Options Text Empty"
            }else if(option.value.length >100){
                optionsError[index] = "Options Text too long"
            }
        })
    
        if(optionsError.length >0){
            erorrs.options= optionsError
        }
        return {
            erorrs,
            isValid: Object.keys(erorrs).length === 0
        }
    }
    render() {
        const {erorrs} = this.state
        return (
            <>
              <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="todo_task">Enter Title</Label>
                        <Input 
                            name="title"
                            id="todo_task"
                            placeholder="Please Enter Task"
                            value={this.state.title}
                            onChange={this.handleChange}
                            invalid={erorrs.title ? true : false}
                        />
                        {erorrs.title ? <FormFeedback>{erorrs.title}</FormFeedback>: ""}
                    </FormGroup>
                    <FormGroup>
                        <Label for="todo_desc">Enter Description</Label>
                        <Input 
                            type="textarea"
                            name="description"
                            id="todo_desc"
                            placeholder="Please Enter Description"
                            value={this.state.description}
                            onChange={this.handleChange}
                            invalid={erorrs.description ? true : false}
                        />
                        {erorrs.description ? <FormFeedback>{erorrs.description}</FormFeedback>: ""}
                    </FormGroup>
                    <div className="m-3 d-flex flex-justify-between">
                        <h4 className="mr-5">Enter Options</h4>
                        <Button onClick={this.addOption} color="success" >Add Options</Button>
                    </div>

                    {
                        this.state.options.map((option, index) =>(
                            <div className="m-3 d-flex flex-justify-between">
                            <Input
                                keys={option.id}
                                name="options[]"
                                id="options_is"
                                placeholder="Enter Option"
                                value={option.value}
                                onChange={(e) =>this.handleOptionChange(e,index)}
                                invalid={erorrs.options && erorrs.options[index] ? true : false}
                            />
                            <Button color="danger" className={index < 2 ? 'disabled': ''} onClick={() =>this.deleteOption(option.id)} >Delete</Button>
                            <br />

                        </div>
                        ))
                    }
                    <Button block color="primary" type="submit">{this.props.poll ? "Update Poll": "Create Poll"}</Button>
              </Form>  
            </>
        )
    }
}

PollModalForm.propTypes = {
    addPoll: propTypes.func.isRequired
}