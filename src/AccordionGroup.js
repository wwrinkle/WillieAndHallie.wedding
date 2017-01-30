import React, { Component } from 'react';
import Accordion from './Accordion';
import RSVPForm from './RSVPForm';
import EventInformation from './EventInformation';
import OurStory from './OurStory';
import GiftRegistry from './GiftRegistry';
import Playlist from './Playlist';
import Pictures from './Pictures';

class AccordionGroup extends Component {
    
    constructor() {
        super();
        this.state = {
            openAccordion: ''
        };
        this.handleClick = this.handleClick.bind(this);
        this.clearAccordion = this.clearAccordion.bind(this);
        this.setAccordion = this.setAccordion.bind(this);
    }
    
    setAccordion(name) {
        this.setState({
            openAccordion: name
        });
    }
    
    handleClick(name) {
        let newAccordion = '';
        if (this.state.openAccordion === '' || this.state.openAccordion === undefined || this.state.openAccordion !== name) {
            newAccordion = name;
        }
        else {
            newAccordion = '';
        }
        this.setAccordion(newAccordion);
    }
    
    clearAccordion(event) {
        // Accordion off click
        if (event.target.className.indexOf('accordion') === -1 
            && (!event.target.parentElement || event.target.parentElement.className.indexOf('accordion') === -1)) {
            this.setAccordion('');
        } 
    }
    
    componentDidMount() {
        window.addEventListener('click', this.clearAccordion);
    }
    
    componentWillReceiveProps(nextProps) {
        setTimeout(() => {
            this.setAccordion(nextProps.openAccordion);
        });
    }
    
    render() {
        const closedHeight = '45px';
        return (
            <div className="accordion-group">
                <Accordion name="RSVP" className="rsvp-accordion" closedHeight={closedHeight} isOpen={this.state.openAccordion === 'RSVP'} handleClick={this.handleClick}>
                    <RSVPForm />
                </Accordion>
            
                <Accordion name="Event Information" className="event-information-accordion" closedHeight={closedHeight}  isOpen={this.state.openAccordion === 'Event Information'} handleClick={this.handleClick}>
                    <EventInformation />
                </Accordion>
                
                <Accordion name="Our Story" className="our-story-accordion" closedHeight={closedHeight}  isOpen={this.state.openAccordion === 'Our Story'} handleClick={this.handleClick}>
                    <OurStory />
                </Accordion>
                
                <Accordion name="Gift Registry" className="gift-registry-accordion" closedHeight={closedHeight}  isOpen={this.state.openAccordion === 'Gift Registry'} handleClick={this.handleClick}>
                    <GiftRegistry />
                </Accordion>
            
                <Accordion name="Our Playlist" className="playlist-accordion" closedHeight={closedHeight}  isOpen={this.state.openAccordion === 'Our Playlist'} handleClick={this.handleClick}>
                    <Playlist />
                </Accordion>
            
                <Accordion name="Pictures" className="pictures-accordion" closedHeight={closedHeight}  isOpen={this.state.openAccordion === 'Pictures'} handleClick={this.handleClick}>
                    <Pictures />
                </Accordion>
            </div>
        );
    }
    
}

export default AccordionGroup;