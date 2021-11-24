import React from 'react'
import { FormFeedback, FormGroup, Input, Label } from 'reactstrap'

export default function VoteForm({handleChange, userName,errors}){
    return (
        <div>
                
                <FormGroup>
               
                    <Label for="exampleName">
                    Enter Your Name
                    </Label>
                    <Input
                    id="exampleName"
                    name="name"
                    value={userName}
                    onChange={handleChange}
                    placeholder="Enter Your Name"
                    type="text"
                    invalid={errors.name ? true : false}
                    />
                     <FormFeedback>{errors.name}</FormFeedback>
                </FormGroup>
            
        </div>
    )
   
}
