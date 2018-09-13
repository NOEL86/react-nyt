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
            <h5>{props.notes}</h5>
            <a href="#" className="btn btn-danger">Save</a>
        </div>
    </div>

);

export default Saved;