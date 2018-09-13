import React from "react";
import "./Form.css";

const Form = props => (

    <div id="form" className="row">
        <div className="col-md-12 card-body">

            <form className="form-group">
                <div className="form-group">
                    <label>Topic</label>
                    <input className="form-control" type="text" placeholder="input"></input>
                </div>
                <div className="form-group">
                    <label>Start Year</label>
                    <input className="form-control" type="text" placeholder="input"></input>
                </div>
                <div className="form-check">
                    <label>End Year</label>
                    <input className="form-control" type="text" placeholder="input"></input>
                </div>
                <br></br>
                <button type="submit" className="btn btn-success">Search</button>
            </form>

        </div>
    </div>


);

export default Form;