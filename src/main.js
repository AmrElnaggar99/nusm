import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Schedule from './Schedule';
import './App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faMoon, faGripHorizontal, faGripVertical } from '@fortawesome/free-solid-svg-icons'

let courses = ['Safety', 'ECEN302', 'ECEN306', 'ECEN304', 'HUMA102', 'IENG301', 'ECEN402']
let colors = ['orange', 'pink', 'purple', 'green', 'blue', 'yellow', 'teal', 'red']
let courses_colors = {}

for (let i = 0; i < courses.length; i++) {
    courses_colors[courses[i]] = colors[i]
}
class MainApp extends Component {

    randomColor = () => {
        return colors[colors.length * Math.random() << 0];
    };
    render() {
        return (
            this.props.chooseCourses ? 
                <Col md={8} lg={9}>
                <div className="main-app">
                    <Row>
                        <Container>
                            <div className='schedules-head'>
                                <h2>Possible Schedules</h2>
                                <span id="change_mode">
                                    Mode:
                                    <button className={this.props.darkmode ? 'active' : ""} onClick={() => this.props.changeMode()}><FontAwesomeIcon icon={faMoon} /></button>
                                </span>
                                <span id='change_layout'>
                                    Layout:
                                    <button className={this.props.layout === 'vertical' ? 'active' : ""} onClick={() => this.props.changeLayout('vertical')}><FontAwesomeIcon icon={faGripVertical} /></button>
                                    <button className={this.props.layout === 'horizontal' ? 'active' : ""} onClick={() => this.props.changeLayout('horizontal')}><FontAwesomeIcon icon={faGripHorizontal} />
                                    </button>
                                </span>
                            </div>
                        </Container>
                    </Row>
                    <div className={`schedule-cards ${this.props.layout}-cards`}>

                        <Row>
                            {this.props.schedules.map((el, index) => (
                                <Col key={index}  md={12} xl={this.props.cardWidth ? this.props.cardWidth : ""} lg={6} >
                                    <Schedule layout={this.props.layout ? this.props.layout : ""} courseColors={courses_colors} timetable={this.props.schedules ? el : ""} />
                                </Col>
                            ))}

                        </Row>
                    </div>
                </div>
            </Col>
                : ""
        )
    }
}


export default MainApp;