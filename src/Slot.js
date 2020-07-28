import React, { Component } from 'react';
import './App.scss';


class Slot extends Component {
    render() {
        return (
            <div style={{ visibility: this.props.course === 'empty' ? 'hidden' : "visible" }} className={`single-slot ${this.props.color ? this.props.color + "-card course-slot" : ""} ${this.props.type ? this.props.type + "-type" : ""}`}>
                {this.props.course ? this.props.course : ""}
            </div>
        )
    }
}
export default Slot