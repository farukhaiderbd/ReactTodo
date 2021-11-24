import React from 'react'
import { Button, Table } from 'reactstrap'
import propTypes from 'prop-types'



const TableItem = ({todo,toggleSelect,toggleComplete}) =>{

    return(
        <tr>
            <td scope="row">
                <input
                    type="checkbox"
                    id={todo.id}
                    checked={todo.isSelect}
                    onChange={() => toggleSelect(todo.id)}
                />
            </td>
            <td>
                {todo.time.toDateString()}
            </td>
            <td>
                {todo.text}
            </td>
            <td>
                <Button
                    className="ml-auto"
                    color={todo.isComplete? "success": "danger"}
                    onClick={() => toggleComplete(todo.id)}
                >
                    {todo.isComplete ? "Completed" : "Runnig"}
                </Button>
            </td>
        </tr>
    )
}

TableItem.propTypes = {
    todo: propTypes.object.isRequired,
    toggleComplete: propTypes.func.isRequired,
    toggleSelect: propTypes.func.isRequired
}


export default function TableView({todos,toggleComplete,toggleSelect}) {
    return (
        <>
           <Table>
               <thead>
                   <tr>
                        <th>#</th>
                        <th>Time</th>
                        <th>Todo</th>
                        <th>Action</th>
                   </tr>
               </thead>
               <tbody>
               {
                    todos.map((todo)=> <TableItem
                                key={todo.id}
                            todo={todo}
                            toggleComplete={toggleComplete}
                            toggleSelect={toggleSelect}
                    />
                    )
                }
               </tbody>
            </Table> 
        </>
    )
}

TableView.propTypes = {
    // todos: propTypes.object.isRequired,
    toggleComplete: propTypes.func.isRequired,
    toggleSelect: propTypes.func.isRequired
}