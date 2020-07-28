import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import './App.scss';
import Slot from './Slot'
class Schedule extends Component {
    slots = ['8:30', '9:30', '10:30', '11:30', '12:30', '1:30', '2:30', '3:30', '4:30']
    days = ['sun','mon','tue','wed','thu']
    render() {

        return (
            <div className={`schedule-card`}>
                <Container>
                    {this.props.timetable ?
                        this.props.layout === 'vertical' ?
                            <Row>
                                <Col className='no-pad' xs={2}>
                                    <Slot key={Math.random()} type="head"></Slot>
                                    {this.slots.map(el => (
                                        <Slot type='side' course={el} key={el}></Slot>
                                    ))}
                                </Col>
                                {this.days.map((el, idx) => (
                                    <Col className='no-pad' key={idx} xs={2}>
                                        <Slot type='head' course={el} key={el}></Slot>
                                        {this.props.timetable[el].map((subel, index) => {
                                            let final_subel = subel;
                                            if (subel[subel.length - 1] === 'T' || subel[subel.length - 1] === 'L') {
                                                final_subel = subel.substring(0, subel.length - 1)
                                            }
                                            return (
                                                <Slot key={index} type='side' course={subel} color={this.props.courseColors[final_subel]}></Slot>
                                            )
                                        })}
                                    </Col>
                                ))}
                            </Row>
                            : <Row>
                                <Col xs={1}>
                                    <Slot key={Math.random()} type='head' course={'empty'}></Slot>
                                    {Object.keys(this.props.timetable).map((el,id) => (
                                        <Slot type='side' course={el} key={id}></Slot>))}
                                </Col>
                                {this.slots.map((el, idx) => {
                                    return (
                                        <Col className='no-pad' key={idx} xs={1}>
                                            <Slot type='side' course={el} key={idx}></Slot>
                                            {
                                                Object.keys(this.props.timetable).map((day,index) => {
                                                    let subel = this.props.timetable[day][idx];
                                                    let final_subel = subel;
                                                    if (subel[subel.length - 1] === 'T' || subel[subel.length - 1] === 'L') {
                                                        final_subel = subel.substring(0, subel.length - 1)
                                                    }
                                                    return (
                                                        <Slot key={index} type='head' course={subel} color={this.props.courseColors[final_subel]}></Slot>
                                                    )
                                                })
                                            }

                                        </Col>
                                    )
                                })}
                            </Row>
                        : ""}
                </Container>
            </div>
        )
    }
}


export default Schedule;