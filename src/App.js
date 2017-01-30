import React, { Component } from 'react';
import Header from './Header';
import AccordionGroup from './AccordionGroup';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            openAccordion: ''
        }
        this.openRsvpAccordion = this.openRsvpAccordion.bind(this);
    }
    
    openRsvpAccordion() {
        this.setState({
            openAccordion: 'RSVP'
        });
    }
    
    render() {
        return (
            <div>
                <Header rsvpClick={this.openRsvpAccordion} />
                <AccordionGroup openAccordion={this.state.openAccordion} />
            </div> 
        );
  }
}

export default App;