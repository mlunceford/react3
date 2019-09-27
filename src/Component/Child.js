import React from 'react'


export default function Child(props) {

    let {data,id,next,previous} = props
// console.log(props.data)
    return(
        <div className="Child">
            <div className="numIndex">{data[id].id}/25 </div>
            <div className="name">{data[id].name.first} {data[id].name.last}</div>
            <div className="info">
                <div><label>From:</label> {data[id].city}, {data[id].country}</div>
                <div><label>Title:</label> {data[id].title}</div>
                <div><label>Employer:</label> {data[id].employer}</div>
            </div>
            <div className="favMovie">
                <h4>Favorite Movies:</h4>
                <ol>
                    <li>{data[id].favoriteMovies[0]}</li>
                    <li>{data[id].favoriteMovies[1]}</li>
                    <li>{data[id].favoriteMovies[2]}</li>
                </ol>
            </div>
            <div className="nav">
                <div className="prev point" onClick={()=>previous()}>{'<Previous'}</div>
                <div className="midNav">
                    <button className='edit but'>Edit</button>
                    <button className='delete but'>Delete</button>
                    <button className='new but'>New</button>
                </div>
                <div className="next point" onClick={() => next()}>{`Next>`}</div>
            </div>
        </div>
    )
} 