import React, { Component } from 'react'
import ListView from './../listview/index';
import TableView from './../tableview/index';
import './../style.css'
import Controller from '../controller';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import TodoModalFrom from '../todo-modal-form';
import shortid from 'shortid'


export default class Todos extends Component {

    state = {
        todos:[
            {
                id: "jkjhfgkdsjfh",
                text: "Hellow todo text",
                time:  new Date(),
                isComplete: false,
                isSelect: false
            },{
                id: "jkjhffsjfh",
                text: "Hellow todo text 2",
                time:  new Date(),
                isComplete: false,
                isSelect: false
            },{
                id: "jkjhffffsjfh",
                text: "Hellow todo text 2",
                time: new Date(),
                isComplete: false,
                isSelect: false
            }
        ],
        isOpenModalFrom: false,
        term: "",
        dataView: 'list',
        filter: 'all'
    }
    toggleComplete= (id) =>{
        const todos = [...this.state.todos]
        const todo = todos.find(t => t.id === id)
        todo.isComplete = !todo.isComplete
        this.setState({todos})
    }
    toggleSelect= (id) =>{
        const todos = [...this.state.todos]
        const todo = todos.find(t => t.id === id)
        todo.isSelect = !todo.isSelect
        this.setState({todos})
    }
    searchFrom = (term) =>{
        this.setState({term})
    }

    performSearch(){
        return this.state.todos.filter(todo => todo.text.toLowerCase().includes(this.state.term.toLocaleLowerCase()))
    }
    toggleFrom = () =>{
        this.setState({
            isOpenModalFrom: !this.state.isOpenModalFrom
        })
    }
    createTodo = (todo) =>{
        todo.id = shortid.generate()
        todo.time = new Date()
        const todos = [todo, ...this.state.todos]
        this.setState({todos})
        this.toggleFrom()
    }

    performFilter = (todos) =>{
        const {filter} = this.state
        if(filter === 'complete'){
            return todos.filter(todo => todo.isComplete)
        }else if(filter === 'running'){
            return todos.filter(todo => !todo.isComplete)
        }else{
            return todos
        }

    }
    getView = ()=>{
        let todos = this.performSearch()
        todos = this.performFilter(todos)
        if(this.state.dataView === 'list'){
            return <ListView 
            toggleComplete={this.toggleComplete}
            toggleSelect={this.toggleSelect}
            todos={todos}
        />
        }else{
            return  <TableView 
            toggleComplete={this.toggleComplete}
            toggleSelect={this.toggleSelect}
            todos={todos}
        />
        }
    }

    changeView =(event) =>{
        this.setState({
            dataView: event.target.value
        })
    }
    handleFilter = (filter) =>{
  
        this.setState({
            filter
        })
    }
    clearSelected = ()=>{
        let todos = this.state.todos.filter(todo =>!todo.isSelect)
        this.setState({todos})
    }
    clearCompleted = () =>{
        let todos = this.state.todos.filter(todo => !todo.isComplete)
        this.setState({todos})
    }
    reset = () =>{
        this.setState({
            isOpenModalFrom: false,
            term: "",
            dataView: 'list',
            filter: 'all'
        })
        
    }
    render() {
        return (
            <div className="todo_containser">
                <h1 className="display-4 text-center mb-5">CoderShout Todo</h1>
                <Controller 
                    term={this.state.term}
                    toggleFrom={this.toggleFrom}
                    searchFrom={this.searchFrom}
                    view={this.state.dataView}
                    changeView={this.changeView}
                    handleFilter={this.handleFilter}
                    clearSelected={this.clearSelected}
                    clearCompleted={this.clearCompleted}
                    reset={this.reset}
                />
               {this.getView()}

                <Modal
                    toggle={this.toggleFrom}
                    isOpen={this.state.isOpenModalFrom}
                 >
                    <ModalHeader toggle={this.toggleFrom}>
                        Create Todo Task
                    </ModalHeader>
                    <ModalBody>
                        <TodoModalFrom 
                            createTodo={this.createTodo}
                        />
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}
