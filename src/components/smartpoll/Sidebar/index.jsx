import React from 'react'
import { Button, Input } from 'reactstrap'
import PollList from './PollList'

export default function SideBar({polls,selectPoll,handleSearch,term,toggleFrom}) {
    return (
        <div style={{ background: '#efefef',padding: '10px' }}>

            <div className="d-flex mb-3">
                <Input 
                    name="term"
                    id="searchTerm"
                    value={term}
                    onChange={(event) => handleSearch(event.target.value)}
                    placeholder="Please Enter Terms"
                />
                <Button style={{marginLeft:'5px'}} color="primary" onClick={toggleFrom}>
                    New
                </Button>
            </div>
            <h4>Poll List</h4>
            <PollList 
            polls={polls}
            selectPoll={selectPoll}
            />   
        </div>
    )
}

