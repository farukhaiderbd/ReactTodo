import React from 'react'
import { ListGroupItem, Button, ListGroup } from 'reactstrap';
import propTypes from 'prop-types';

const ListItem = ({todo,toggleSelect,toggleComplete})=>{
    return(
        <ListGroupItem className="d-flex align-items-center justify-content-between">
            
            <input
                type="checkbox"
                id={todo.id}
                checked={todo.isSelect}
                onChange={() => toggleSelect(todo.id)}
            />
            
            <div className="mx-3">
                <h4>{todo.text}</h4>
                <p>{todo.time.toDateString()}</p>
            </div>

            <Button
                className="ml-auto"
                color={todo.isComplete? "success": "danger"}
                onClick={() => toggleComplete(todo.id)}
            >
                {todo.isComplete ? "Completed" : "Runnig"}
            </Button>
                
        </ListGroupItem> 
    )
}

ListItem.propTypes ={
    todo: propTypes.object.isRequired,
    toggleComplete: propTypes.func.isRequired,
    toggleSelect: propTypes.func.isRequired
}


export default function ListView({todos,toggleComplete,toggleSelect}) {
    return (
        <>
            <ListGroup className="mb-5">
                {
                    todos.map((todo)=> <ListItem 
                    key={todo.id}
                            todo={todo}
                            toggleComplete={toggleComplete}
                            toggleSelect={toggleSelect}
                    />
                    )
                }
            </ListGroup>
        </>
    )
}

ListView.propTypes ={
    // todos: propTypes.object.isRequired,
    toggleComplete: propTypes.func.isRequired,
    toggleSelect: propTypes.func.isRequired
}