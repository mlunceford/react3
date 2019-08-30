import React, { Component } from 'react'


export default function Display(props) {
    return (
        <section>
            <div className='counter'>{props.user.id}/25</div>
            <div className='name'>{props.user.name.first} {props.user.name.last}</div>
            <div className="info">{props.user.employer}</div>
            <ul className="favorites">
                Favorites:
                {props.user.favoriteMovies.map(movie => <li>{movie}</li>)}
            </ul>


        </section>
    )
}

// Component {

//     constructor() {
//         super()
//         this.state = {
//             counter: 0
//         }
//     }
//     // upOne = () => {
//     //     if (this.state.counter >= this.state.data + 1)
//     // }

//     render() {
//         getId(() =>{
//             this.setState({
//                 currentId: this.state.counter +1
//             })
//         },1000)
//         console.log({data})

//         return(
//            <p>keep passing in numbers:{getId()}</p>
//         )
//     }
// }