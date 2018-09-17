import React from "react";
import "./Results.css";


const Results = props => (

    <div className="card">
        <div className="card-header">
            Results
        </div>

        <div className="card-body">
            <h5 className="card-title">Title: {props.title}</h5>
            <p className="card-text">Date: {props.date}</p>
            <a href={props.url}>{props.url}</a>
            <a href="/save/:id" className="btn btn-danger" onClick={saveScraped}>Save</a>
        </div>
    </div>

);

export default Results;