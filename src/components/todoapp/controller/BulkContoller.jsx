import React from 'react'
import { Button, ButtonGroup } from 'reactstrap'

export default function BulkContoller({clearSelected, clearCompleted, reset}) {
    return (
        <>
            <ButtonGroup>
                <Button color="danger" onClick={clearSelected}>Selected</Button>
                <Button color="danger" onClick={clearCompleted}>Completed</Button>
                <Button color="danger" onClick={reset}>Reset</Button>
            </ButtonGroup>   
        </>
    )
}
