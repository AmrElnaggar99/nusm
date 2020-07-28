import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import FilteredMultiSelect from 'react-filtered-multiselect'
import './App.scss';
import Scrollbar from 'react-scrollbars-custom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const last_updated = "July 17, 2020 08:45 PM";
const CULTURE_SHIPS = [
    { id: 1, name: 'ECEN101' },
    { id: 2, name: 'ARTS108' },
    { id: 3, name: 'ECEN102' },
    { id: 4, name: 'ECEN203' },
    { id: 5, name: 'ENGL101' },
    { id: 6, name: 'ENGL102' },
    { id: 7, name: 'ENGL201' },
    { id: 8, name: 'ENGL202' },
    { id: 9, name: 'ENGR101' },
    { id: 10, name: 'ENGR102' },

]

class Sidebar extends Component {
    state = {
        selectedShips: []
    }
    handleDeselect(index) {
        var selectedShips = this.state.selectedShips.slice()
        selectedShips.splice(index, 1)
        this.setState({ selectedShips })
    }

    handleSelectionChange = (selectedShips) => {
        this.setState({ selectedShips })
    }

    render() {
        var { selectedShips } = this.state
        return (
            <React.Fragment>
                <Col md={4} lg={3}>
                    <div className='phone-collapse'>
                            <div className="select-courses" style={{height: this.props.chooseCourses && this.props.isPhone ? 'auto' : '97vh'}}>
                                <div className='main-head'>
                                <h1 className="brand-text">NU Schedule Maker</h1>
                                {this.props.chooseCourses && this.props.isPhone ?
                                <button onClick={()=> this.props.toggleChangeCourses()} className='choose-courses-btn'>
                                    Change Courses
                                    <FontAwesomeIcon icon={faChevronDown} />    
                                    </button>
                                    : ""
                                }
                                </div>
                                <div className='collapse-wrapper' 
                                style={{display: 
                                this.props.isPhone ? 
                                this.props.chooseCourses ? 'none' : 'block'
                                :  "auto"}}>
                                <div className='head-info'>
                                    <Scrollbar >
                                        <div className='cofigure-courses'>
                                            {selectedShips.length === 0 && <small className='notice text-center'>Double click on courses bellow to select</small>}
                                            {selectedShips.length > 0 && <div>
                                                <div className='slots-head'>
                                                    <b>Slots per</b>
                                                    <span>LE</span>
                                                    <span>LAB</span>
                                                    <span>Tut</span>
                                                </div>
                                                <ul>
                                                    {selectedShips.map((ship, i) => <li key={ship.id}>
                                                        <button type="button" onClick={() => this.handleDeselect(i)}>
                                                            &times;</button>
                                                        {`${ship.name} `}
                                                        <div className='slots-per'>

                                                            <input required type='text' value='2'/>
                                                            <input required type='text' value='1'/>
                                                            <input required type='text' value='1'/>
                                                        </div>
                                                    </li>)}
                                                </ul>
                                            </div>}
                                        </div>
                                    </Scrollbar>
                                </div>

                                <div className='filter-form'>
                                    <div className='select-wrapper'>
                                        <FilteredMultiSelect
                                            onChange={this.handleSelectionChange}
                                            options={CULTURE_SHIPS}
                                            selectedOptions={selectedShips}
                                            textProp="name"
                                            valueProp="id"
                                        />
                                    </div>
                                    <div className='btn-container'>
                                        <button onClick={()=> this.props.toggleChangeCourses()} className='btn btn-success done-button'>
                                            DONE
                                        </button>
                                    </div>
                                    <small className="last-update-date">updated: {last_updated}</small>
                                </div>
                            </div>
                                </div>
                    </div>
                </Col>
            </React.Fragment >
        );
    }
}


export default Sidebar;