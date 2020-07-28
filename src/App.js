import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sidebar from './sidebar';
import MainApp from './main.js';
import { Container, Row } from 'react-bootstrap';
import './App.scss';

class App extends Component {
  state = {
    isPhone: window.innerWidth < 768 ? true : false,
    layout: 'vertical',
    // layout: 'horizontal',
    cardWidth: 4,
    darkmode: true,
    chooseCourses: false,
    schedules:
      [
        {
          sun: ['Safety', 'Safety', "empty", "empty", "empty", "empty", "empty", "empty", "empty"],
          mon: ['ECEN304T', 'ECEN304T', 'ECEN402', 'ECEN402', "empty", 'ECEN402T', 'ECEN402T', 'ECEN306T', 'ECEN306L'],
          tue: ['ECEN302', 'ECEN302', 'ECEN304', 'ECEN304', 'ECEN306', 'ECEN306', 'ECEN302T', 'ECEN302T', 'empty'],
          wed: ["empty", "empty", 'ECEN306T', 'ECEN306T', "empty", "empty", "empty", "empty", "empty"],
          thu: ["empty", 'HUMA102', 'IENG301', 'IENG301', 'Safety', 'Safety', 'IENG301T', 'IENG301T', 'empty'],
        },
        {
          sun: ['ECEN302', 'ECEN302', 'ECEN304', 'ECEN304', 'ECEN306', 'ECEN306', 'ECEN302T', 'ECEN302T', 'empty'],
          mon: ['ECEN304T', 'ECEN304T', 'ECEN402', 'ECEN402', "empty", 'ECEN402T', 'ECEN402T', 'ECEN306T', 'ECEN306L'],
          tue: ['Safety', 'Safety', "empty", "empty", "empty", "empty", "empty", "empty", "empty"],
          wed: ["empty", 'HUMA102', 'IENG301', 'IENG301', 'Safety', 'Safety', 'IENG301T', 'IENG301T', 'empty'],
          thu: ["empty", "empty", 'ECEN306T', 'ECEN306T', "empty", "empty", "empty", "empty", "empty"],
        }

      ]
  }

  changeMode = () => {
    this.setState((prev) => {
      return ({
        darkmode: !prev.darkmode
      })
    })
  }

  changeLayout = (toLayout) => {
    let width;
    if (toLayout === this.layout)
      return "";
    if (toLayout === 'horizontal')
      width = 12
    else
      width = 4
    this.setState({
      layout: toLayout,
      cardWidth: width
    })
  }

  toggleChangeCourses = () => {
    this.setState((prev) => ({
      chooseCourses: !prev.chooseCourses,
    }))

  }

  render() {
    if (!this.state.darkmode) {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    } else {
      document.body.classList.remove('light-mode');
      document.body.classList.add('dark-mode');
    }
    return (
      <React.Fragment>
        <Container fluid>
          <div className='wrapper'>
            <Row className='flex-xl-nowrap'>
              <Sidebar isPhone={this.state.isPhone} chooseCourses={this.state.chooseCourses} toggleChangeCourses={this.toggleChangeCourses} />
              <MainApp isPhone={this.state.isPhone} chooseCourses={this.state.chooseCourses} changeMode={this.changeMode} darkmode={this.state.darkmode} changeLayout={this.changeLayout} layout={this.state.layout} cardWidth={this.state.cardWidth} schedules={this.state.schedules} />
            </Row>
          </div>
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
