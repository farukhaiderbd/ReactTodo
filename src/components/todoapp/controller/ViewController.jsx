import React from 'react'
import { Input, Label } from 'reactstrap'
import propTypes from 'prop-types'

export default function ViewController({view, changeView}) {
    return (
        <div>
            <div className="d-flex">
                <Label for="list_view">
                    <Input
                        type="radio"
                        name="view"
                        value="list"
                        id="list_view"
                        onChange={changeView}
                        checked={view === 'list'}
                    />
                    List View
                </Label>
                <Label for="table_view" className="">
                    <Input
                        type="radio"
                        name="view"
                        id="table_view"
                        value="table"
                        onChange={changeView}
                        checked={view === 'table'}
                    />
                    Table View
                </Label>
            </div>
        </div>
    )
}

ViewController.propTypes = {
    view: propTypes.string.isRequired,
    changeView: propTypes.func.isRequired,

}