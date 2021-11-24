import React from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import propTypes from 'prop-types'
export default class TodoModalFrom extends React.Component {

    state = {
        text : "",
        description : "",
    }

    handleChange =(event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit=(event) => {
        event.preventDefault();
        this.props.createTodo(this.state)
        event.target.reset()
        this.setState({text:"",description:""})
    }
    render() {
        return (
            <>
              <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="todo_task">Enter Task</Label>
                        <Input 
                            name="text"
                            id="todo_task"
                            placeholder="Please Enter Task"
                            value={this.state.text}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="todo_desc">Enter Description</Label>
                        <Input 
                            name="description"
                            id="todo_desc"
                            placeholder="Please Enter Description"
                            value={this.state.description}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <Button block color="primary" type="submit">Create Task</Button>
              </Form>  
            </>
        )
    }
}

TodoModalFrom.propTypes = {
    createTodo: propTypes.func.isRequired
}