import React from 'react'
import Child from './Child'
import data from './data'

export default class Parent extends React.Component {
    constructor() {
        super()
        this.state = {
            data: data, //array of objects
            index: 0
        }
    }
    previous = () => {
        if (this.state.index === 0){ //you have to say  -1 because of zero index
            this.setState({index: this.state.data.length -1}) 
        }else {
            this.setState({ index: this.state.index - 1 })
        }
    }
    next = () => {
        if (this.state.index === this.state.data.length -1) {
            this.setState({ index: 0 })
        }else{
            this.setState({ index: this.state.index + 1 })
        }
    }
    // numIndexChange = () => {

    // }


    render() {
        return (
            <div className="Parent">
                <Child
                    data={this.state.data}
                    id={this.state.index}
                    next={this.next}
                    previous={this.previous}/>
            </div>
        )
    }
}