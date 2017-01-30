import React, { Component } from 'react';
import Tabs from './Tabs';
import ViewPane from './ViewPane';

class EventInformation extends Component {
    constructor() {
        super();
        this.state = {
            currentTab: 'Agoura Hills Wedding'
        };
        
        this.events = {
            agouraHills: {
                where: 'Reyes Adobe Park',
                when: '11am April 30th, 2017',
                thingsToDo: 'Visit the Reyes Adobe, Zuma Beach, Chesboro Canyon Hiking Trail, See Tinsle Town',
                whereToStay: '<a href="http://www.sheratonagourahills.com/" target="_blank">Sheraton Agoura Hills</a>, <a href="http://hamptoninn3.hilton.com/en/hotels/california/hampton-inn-and-suites-agoura-hills-AGOCAHX/index.html" target="_blank">Hampton Inn & Suites Agoura Hills</a>'
            },
            carrollton: {
                where: 'The Home of John and Lynn Wrinkle, 1436 Northridge Dr. Carrollton, TX 75006',
                when: '7pm May 13th, 2017',
                thingsToDo: 'Dealy Plaza, Eat Beef, Go to Museums',
                whereToStay: '<a href="http://www.marriott.com/hotels/travel/dalrl-courtyard-dallas-carrollton-and-carrollton-conference-center/" target="_blank">Courtyard Dallas Carrollton and Carrollton Conference Center</a>'
            }
        };
        
        this.setTab = this.setTab.bind(this);
    }
    
    setTab(tab) {
        this.setState({
            currentTab: tab
        });
    }
    
    render() {
        return (
            <div className="event-information">
                <Tabs onClick={this.setTab} openTab={this.state.currentTab} />
                <div className="view">
                    <ViewPane eventInformation={this.events.agouraHills} show={this.state.currentTab === 'Agoura Hills Wedding'} />
                    <ViewPane eventInformation={this.events.carrollton} show={this.state.currentTab === 'Carrollton Shindig'} />
                </div>
            </div>
        )
    }
}

export default EventInformation;