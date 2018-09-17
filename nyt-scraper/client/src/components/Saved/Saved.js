import React from "react";
import "./Saved.css";

const Saved = props => (

    <div className="card">
        <div className="card-header">
            Results
        </div>

        <div className="card-body">

            <div className="row">
                <h5 className="card-title">Title: {props.title}</h5>
                <p className="card-text">Date: {props.savedDate}</p>
            </div>
            <div className="row">
                <h5 className="card-title">{props.notes}</h5>
            </div>
            <div className="row">
                <a href="/delete/:id" className="btn btn-danger" onClick={remove}>Remove</a>
            </div>
        </div>
    </div>

);

export default Saved;