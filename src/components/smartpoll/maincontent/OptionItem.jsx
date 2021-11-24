import React from 'react'
import { Button, Input, Label } from 'reactstrap'


const getCalculate = (vote,totalVote) => {
    const rate = vote*100 /totalVote
    return rate.toFixed(2)+'%';
}

export default function OptionItem({options,handleChange,errors,totalVote,selectVote}) {
    if(Object.keys(options).length === 0){
        return <h6>There are No Options</h6>
    }
   
    return (
        <>
        {
           options.map(option => (
              
                <div className="d-flex" style={{marginTop: '5px'}} key={option.id}>
                    <div className="d-flex" style={{width: '80%'}}>
                        <Input
                            type="radio"
                            name="vote"
                            id={option.id}
                            value={option.id}
                            style={{marginRight: '8px'}}
                            onChange={handleChange}
                            invalid={errors.vote ? true : false}
                            checked={selectVote === option.id ? true : false}
                        />
                        <Label for={option.id} style={{fontWeight: 500}}>{option.value}</Label>
                    </div>
                    <Button  color="success">{option.vote}</Button>
                    <Button style={{marginLeft: '10px'}} color="warning">{option.vote ? getCalculate(option.vote, totalVote) : '0%'}</Button>
                </div>
            ))
        
        }
        </>
    )
}
