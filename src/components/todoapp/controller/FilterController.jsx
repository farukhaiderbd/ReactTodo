import React from 'react'
import { Button, ButtonGroup } from 'reactstrap'
import propTypes from 'prop-types'
export default function FilterController({handleFilter}) {
    return (
        <ButtonGroup>
            <Button color="primary" onClick={()=> handleFilter('all')}>ALL</Button>
            <Button color="primary" onClick={()=> handleFilter('complete')}>Completed</Button>
            <Button color="primary" onClick={()=> handleFilter('running')}>Runnig</Button>
        </ButtonGroup>  
    )
}
FilterController.propTypes ={
    handleFilter: propTypes.func.isRequired
}