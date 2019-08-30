import React, { Component } from 'react'

export default class Navigation extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <button onClick={() => this.props.previous}>{'< Previous'}</button>
                <button onClick={() => this.props.next}>{'Next >'}</button>
            </div>
        )
    }
}