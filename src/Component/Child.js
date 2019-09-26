import React from 'react'


export default function Child(props) {


// console.log(props.data)
    return(
        <div className="Child">
            <div className="numIndex">{props.data[props.id].id}/25 </div>
            <div className="name">{props.data[props.id].name.first} {props.data[props.id].name.last}</div>
            <div className="info">
                <div><label>From:</label> {props.data[props.id].city}, {props.data[props.id].country}</div>
                <div><label>Title:</label> {props.data[props.id].title}</div>
                <div><label>Employer:</label> {props.data[props.id].employer}</div>
            </div>
            <div className="favMovie">
                <h4>Favorite Movies:</h4>
                <ol>
                    <li>{props.data[props.id].favoriteMovies[0]}</li>
                    <li>{props.data[props.id].favoriteMovies[1]}</li>
                    <li>{props.data[props.id].favoriteMovies[2]}</li>
                </ol>
            </div>
            <div className="nav">
                <div className="prev point" onClick={()=>props.previous()}>{'<Previous'}</div>
                <div className="midNav">
                    <button className='edit but'>Edit</button>
                    <button className='delete but'>Delete</button>
                    <button className='new but'>New</button>
                </div>
                <div className="next point" onClick={() => props.next()}>{`Next>`}</div>
            </div>
        </div>
    )
} 