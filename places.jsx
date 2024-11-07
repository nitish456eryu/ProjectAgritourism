import React from "react";


function ShowPlace(props){
    return (
    <>
        <h1>{props.name} </h1>
        <img src={props.imagee} alt={props.name} />
        <p>{props.description} </p>
        <h3>Activity</h3>
    </>
    )
}

export default ShowPlace;