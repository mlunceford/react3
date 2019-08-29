import React, {Component} from 'react'
import data from './data'

export default class Grandpa extends Component {
    constructor() {
        super()
        this.state = {
            counter: 0
        }
    }
    // upOne = () => {
    //     if (this.state.counter >= this.state.data + 1)
    // }
    
    render() {
        getId(() =>{
            this.setState({
                currentId: this.state.counter +1
            })
        },1000)
        console.log({data})

        return(
           <p>keep passing in numbers:{getId()}</p>
        )
    }
}