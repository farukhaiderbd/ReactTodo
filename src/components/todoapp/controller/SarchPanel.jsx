import React from 'react'
import { Input, Button } from 'reactstrap';
import propTypes from 'prop-types'
export default function SarchPanel({term,toggleFrom,searchFrom}) {
    return (
        <div className="d-flex">
            <Input 
                className="mr-3"
                name="term"
                placeholder="Please Enter Search Term"
                value={term}
                onChange={e=> searchFrom(e.target.value)}
            /> 
             <Button onClick={toggleFrom} className="" color="success">
                 New
             </Button>        
        </div>
    )
}

SarchPanel.propTypes = {
    term: propTypes.string.isRequired,
    toggleFrom: propTypes.func.isRequired,
    searchFrom: propTypes.func.isRequired,
}