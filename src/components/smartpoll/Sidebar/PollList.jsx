import React from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'

export default function PollList({polls,selectPoll}) {

    if(polls.length === 0) {
        return <p> There is no Poll </p>
    }

    return (
        <ListGroup>
            {
                polls.map((poll=>(
                    <ListGroupItem
                        key={poll.id}
                        onClick={() =>selectPoll(poll)}
                        style={{ cursor: "pointer" }}
                        className="mt-1"
                    >
                        {
                            poll.title.length > 30 ? poll.title.subString(0, 30)+"..." : poll.title
                        }
                    </ListGroupItem>
                )))
            }
        </ListGroup>
    )
}
