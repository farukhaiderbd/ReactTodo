import React from 'react'
import SarchPanel from './SarchPanel';
import propTypes from 'prop-types';
import { Col, Row } from 'reactstrap';
import FilterController from './FilterController';
import ViewController from './ViewController';
import BulkContoller from './BulkContoller';


export default function Controller({term,toggleFrom,searchFrom,handleFilter,view,changeView,clearCompleted,clearSelected,reset}) {
    return (
        <>
            <SarchPanel
                term={term}
                toggleFrom={toggleFrom}
                searchFrom={searchFrom}            
            /> 
            <div className="d-flex justify-content-between">
                <div >
                    <FilterController 
                        handleFilter={handleFilter}
                    />
                </div>
                <div>
                    <ViewController 
                        view={view}
                        changeView={changeView}
                    />  
                </div>
                <div>
                    <BulkContoller
                        clearSelected={clearSelected}
                        clearCompleted={clearCompleted}
                        reset={reset}
                    />
                </div>
            </div>    
        </>
    )
}
Controller.propTypes = {
    term: propTypes.string.isRequired,
    toggleFrom: propTypes.func.isRequired,
    searchFrom: propTypes.func.isRequired,
}